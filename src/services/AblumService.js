import AWS from 'aws-sdk/global';
import S3 from 'aws-sdk/clients/s3';

const albumBucketName = 'gallery.westwardhomebuilders.com';

// AWS Configuration.
AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:fbcbfd64-e19a-4372-b81e-6183a46ccd3f',
});
// Create a new service object
const s3 = new S3({
  apiVersion: '2006-03-01',
  params: {Bucket: albumBucketName}
});

//
// Functions
//
// Utility function to list the ablums available in s3.
export async function getAlbums(){
  try {
    let awsResponse = await s3.listObjectsV2({Delimiter: '/'}).promise();
    return awsResponse.CommonPrefixes.map(function(commonPrefix) {
      var prefix = commonPrefix.Prefix;
      return decodeURIComponent(prefix.replace('/', ''));
    });
  } catch(err) {
    
  }
}

// Retrieve photos that exist in an album.
export async function viewAlbum(albumName){
  console.log("Getting albums.")
  let albumPhotosKey = albumName + '/';
  try {
    let awsResponse = await s3.listObjectsV2({Prefix: albumPhotosKey}).promise();
    return awsResponse.Contents.map(function(image) {
      return image.Key.replace(albumPhotosKey, '');
    });
  } catch (err) {

  }
}

export async function peekAlbum(albumName) {
  console.log("peeking album " + albumName);
  let albumPhotosKey = albumName + '/';
  try {
    let awsResponse = await s3.listObjectsV2({Prefix: albumPhotosKey, MaxKeys: 2}).promise();
    return awsResponse.Contents.map(function(image) {
      return image.Key.replace(albumPhotosKey, '');
    });
  } catch (err) {

  }
}