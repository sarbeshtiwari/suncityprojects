import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { uploadFileToS3 } from './s3-upload';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const fieldName = formData.get('fieldName') as string;
    const folder = formData.get('folder') as string;
    
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Validate file size (25MB limit)
    const maxSize = 25 * 1024 * 1024; // 25MB in bytes
    if (file.size > maxSize) {
      return NextResponse.json({ 
        error: 'File size too large', 
        details: `File size must be less than 25MB. Current size: ${(file.size / (1024 * 1024)).toFixed(2)}MB` 
      }, { status: 400 });
    }

    // Validate MIME type for project thumbnail
    if (fieldName === 'projectThumbnail') {
      const allowedMimeTypes = [
        'image/webp',
        'image/avif', 
        'image/jpeg',
        'image/jpg',
        'image/png'
      ];
      
      if (!allowedMimeTypes.includes(file.type)) {
        return NextResponse.json({ 
          error: 'Invalid file type', 
          details: `Allowed types: WebP, AVIF, JPG, PNG. Current type: ${file.type}` 
        }, { status: 400 });
      }
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const imageKey = await uploadFileToS3(
      buffer,
      file.name,
      folder,
      file.type
    );

    // Create uploads directory if it doesn't exist
    // const uploadsDir = join(process.cwd(), 'public', 'uploads');
    // await mkdir(uploadsDir, { recursive: true });

    // Create subfolder if specified
    // let targetDir = uploadsDir;
    // let urlPath = '/uploads';
    
    // if (folder) {
    //   targetDir = join(uploadsDir, folder);
    //   await mkdir(targetDir, { recursive: true });
    //   urlPath = `/uploads/${folder}`;
    // }

    // Generate unique filename
    // const timestamp = Date.now();
    // const filename = `${timestamp}-${file.name}`;
    // const path = join(targetDir, filename);

    // await writeFile(path, buffer);

    return NextResponse.json({ 
      success: true, 
      url: imageKey,
      filename: imageKey,
      message: 'File uploaded successfully' 
    });
  } catch (error) {
    console.error('File upload error:', error);
    return NextResponse.json(
      { error: 'File upload failed' },
      { status: 500 }
    );
  }
}
