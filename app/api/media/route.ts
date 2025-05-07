import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const mediaDirectory = path.join(process.cwd(), 'public/media');
    
    // Check if directory exists
    if (!fs.existsSync(mediaDirectory)) {
      console.log('Media directory does not exist:', mediaDirectory);
      return NextResponse.json({ images: [], error: 'Media directory does not exist' });
    }
    
    // Read directory contents
    const fileNames = fs.readdirSync(mediaDirectory);
    console.log('Files found in media directory:', fileNames);
    
    // Filter for image files
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const imageFiles = fileNames.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });
    console.log('Image files found:', imageFiles);
    
    // Create paths relative to the public directory
    const images = imageFiles.map(file => `/media/${file}`);
    
    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error reading media directory:', error);
    return NextResponse.json({ images: [], error: 'Failed to read media directory' });
  }
}