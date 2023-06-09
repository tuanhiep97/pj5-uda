import * as AWS from 'aws-sdk'
const AWSXRay = require('aws-xray-sdk')

const XAWS = AWSXRay.captureAWS(AWS)

// TODO: Implement the fileStogare 
export async function getPresignedAttachmentUrl(todoId: string): Promise<string> {
    const bucketName = process.env.ATTACHMENT_S3_BUCKET
    const urlExpiration = parseInt(process.env.SIGNED_URL_EXPIRATION, 300);
    const s3 = new XAWS.S3({ signatureVersion: 'v4' });
    const signedUrl = s3.getSignedUrl('putObject', {
      Bucket: bucketName,
      Key: todoId,
      Expires: urlExpiration
    });
    return signedUrl;
}