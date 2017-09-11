const request = require('request');
const fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!');


var GITHUB_USER = 'aliabji';
var GITHUB_TOKEN = '461ea187e96fab4f3d71ef416665556148a60a86';

function getRepoContributors(repoOwner, repoName, cb, scb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  var options = {
    url: requestURL,
    headers: {
      'User-Agent': 'GitHub Avatar Downloader - Student Project'
    }
  }
  
  request.get(options, function(error, response, body) {
    if (error) {
      cb(error)
    }
    if (body) {
      var parsed = JSON.parse(body)
      cb(null, parsed) 
    }
  })
}

function process (error, parsed) {
  parsed.forEach(function(a) {
    var x = (a['avatar_url']);
    filepath = "images/" + a.login + ".jpg"
    url = x
    downloadImageByURL(x, filepath)
  })
}


function downloadImageByURL(url, filePath) {
  request.get(url)
         .pipe(fs.createWriteStream(filePath));
}

getRepoContributors("jquery", "jquery", process) 




