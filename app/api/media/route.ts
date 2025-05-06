import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const slidesDirectory = path.join(process.cwd(), 'public', 'media');
    
    if (!fs.existsSync(slidesDirectory)) {
      return NextResponse.json({ error: 'Slides directory not found' }, { status: 404 });
    }
    
    const files = fs.readdirSync(slidesDirectory)
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext);
      });
    
    return NextResponse.json({ files });
  } catch (error) {
    console.error('Error reading slides directory:', error);
    return NextResponse.json({ error: 'Failed to read slides directory' }, { status: 500 });
  }
}