var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');


var GITHUB_USER = 'aliabji';
var GITHUB_TOKEN = '461ea187e96fab4f3d71ef416665556148a60a86';

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  
  console.log(requestURL)
}


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});