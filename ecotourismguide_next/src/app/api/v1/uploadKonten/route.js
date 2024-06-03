import { NextResponse } from 'next/server';
import chalk from 'chalk';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { r2 } from '@/libs/r2';
import prisma from '@/libs/prisma';

export async function POST(request) {
  try {
    console.log(chalk.yellow('Generating an upload URL!'));

    // Parse the request to get the file, title, and caption data
    const formData = await request.formData();
    const file = formData.get('file');
    const title = formData.get('title');
    const caption = formData.get('caption');

    // Check if the file exists
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Generate a signed URL for the upload
    const signedUrl = await getSignedUrl(
      r2,
      new PutObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME,
        Key: `filename.png`, // Use a unique filename or use file.name if available
        ContentType: file.type,
      }),
      { expiresIn: 60 }
    );

    console.log(chalk.green('Success generating upload URL!'));

    // Save the URL, title, and caption to the database
    const content = await prisma.Content.create({
      data: {
        Judul: title,
        Caption: caption,
        url: signedUrl,
      },
    });

    return NextResponse.json({ url: signedUrl });
  } catch (err) {
    console.error(chalk.red('Error generating upload URL:', err));
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
