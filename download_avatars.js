
const request = require('request');
const fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!');

//setting github credentials
var GITHUB_USER = 'aliabji';
var GITHUB_TOKEN = '461ea187e96fab4f3d71ef416665556148a60a86';

//taking user input for repository name and owner
var repoOwner = process.argv[2];
var repoName = process.argv[3];

function getRepoContributors(repoOwner, repoName, cb, scb) {
  
//if user input is off, return error message
  if(repoOwner == null || repoName == null) {
      console.log("error: no arguments recieved");
      return;
  };
  
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  var options = {
    url: requestURL,
    headers: {
      //user agent to meet githubs requirements for api's
      'User-Agent': 'GitHub Avatar Downloader - Student Project'
    }
  };
  
  request.get(options, function(error, response, body) {
    if (error) {
      cb(error);
    };
    if (body) {
      //parsing the api body
      var parsed = JSON.parse(body);
      cb(null, parsed);
    };
  });
};

//producing avatar img urls
function func (error, parsed) {
  parsed.forEach(function(a) {
    var x = a['avatar_url'];
    filepath = "images/" + a.login + ".jpg";
    url = x;
    downloadImageByURL(x, filepath);
  });
};
//
//downloading images
function downloadImageByURL(url, filePath) {
  request.get(url)
         .pipe(fs.createWriteStream(filePath))
};

getRepoContributors(repoOwner, repoName, func);

console.log("Image download complete!");




