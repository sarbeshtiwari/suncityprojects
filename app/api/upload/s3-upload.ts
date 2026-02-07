import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION || "",
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY || "",
  },
});

const BUCKET = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME || "";

export async function uploadFileToS3(
  fileBuffer: Buffer,
  fileName: string,
  folder: string,
  contentType: string
) {
  const safeFileName = fileName.replace(/[^\w.-]/g, "_");
  const key = `${folder}/${Date.now()}-${safeFileName}`;

  const command = new PutObjectCommand({
    Bucket: BUCKET,
    Key: key,
    Body: fileBuffer,
    ContentType: contentType,
  });

  await s3Client.send(command);

  return `https://${BUCKET}.s3.${process.env.NEXT_PUBLIC_AWS_S3_REGION}.amazonaws.com/${key}`;
  // return `${key}`;

}

export async function deleteFromS3(fileUrl: string) {
  try {
    if (!fileUrl) return;

    let key = fileUrl;

    if (fileUrl.startsWith("http")) {
      const urlParts = new URL(fileUrl);
      key = urlParts.pathname.slice(1);
    }

    await s3Client.send(
      new DeleteObjectCommand({
        Bucket: BUCKET,
        Key: key,
      })
    );

  } catch (error) {
    console.error("Error deleting from S3:", error);
    throw error;
  }
}
