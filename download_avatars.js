var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');


var GITHUB_USER = 'aliabji';
var GITHUB_TOKEN = '461ea187e96fab4f3d71ef416665556148a60a86';

function getRepoContributors(repoOwner, repoName, cb) {
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
    console.log(a['avatar_url']);
  })
//  console.log(parsed[0]['avatar_url'])
}


getRepoContributors("jquery", "jquery", process) 