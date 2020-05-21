import AWS from 'aws-sdk/global';
import S3 from 'aws-sdk/clients/s3';

const albumBucketName = 'gallery.westwardhomebuilders.com';

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
export const getAlbums = () => {
  let results= []
  let result = s3.listObjects({Delimiter: '/'}, function(err, data) {
    if (err) {
      return alert('There was an error listing your albums: ' + err.message);
    } else {
      data.CommonPrefixes.map(function(commonPrefix) {
        var prefix = commonPrefix.Prefix;
        results.push(decodeURIComponent(prefix.replace('/', '')));
      });
    }
  });
  
  console.log(results);
  return result;
}

function mapResults(apiresponse, response){

}

// Retrieve photos that exist in an album.
export const viewAlbum = (albumName) => {
  var albumPhotosKey = encodeURIComponent(albumName) + '/';
  return s3.listObjects({Prefix: albumPhotosKey}, function(err, data) {
    if (err) {
      return alert('There was an error viewing your album: ' + err.message);
    }
    return data.Contents
  });
}