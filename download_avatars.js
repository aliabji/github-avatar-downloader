var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');


var GITHUB_USER = 'aliabji';
var GITHUB_TOKEN = '461ea187e96fab4f3d71ef416665556148a60a86';

function getRepoContributors(repoOwner, repoName, cb) {
  var buffer = ""
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  var options = {
    url: requestURL,
    headers: {
      'User-Agent': 'GitHub Avatar Downloader - Student Project'
    }
  }
  
  request.get(options, function(err, response, body) {
    
    if (err) throw err;
    
    if (body) {
      console.log(body)
    }
    
  })
}
getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});