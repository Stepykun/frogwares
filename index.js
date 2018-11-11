var http 	= require('http');
var fs 		= require('fs');
var url   = require('url');
var port  = '8080'
http.createServer(function(req, res) {
  var urlParts = url.parse(req.url);
  switch(urlParts.pathname) {
    case "/":
        homepage(req, res);
        break;
    case "/MainPageInfo":
        mainPage(req, res);
        break;
    case "/GeneralQuestsInfo":
        generalInfo(req, res);
        break;
    case "/FinishedQuestsLeafs":
        finished(req, res);
        break;
    default:
        homepage(req, res);
        break;
  }
}).listen(port);

console.log("Listening on port " + port );
function homepage(req, res) {
    res.end('Hey, check out /MainPageInfo, /GeneralQuestsInfo, /FinishedQuestsLeafs');
}
function mainPage(req, res) {
    fs.readFile('MainPageInfo.json', function(err,data) {
      res.writeHead(200, {
        'Content-Type': 'text/json',
        'Access-Control-Allow-Origin': '*'
    });
      res.write(data);
      res.end();
    });
}
function generalInfo(req, res) {
    fs.readFile('GeneralQuestsInfo.json', function(err,data) {
      res.writeHead(200, {
        'Content-Type': 'text/json',
        'Access-Control-Allow-Origin': '*'
      });
      res.write(data);
      res.end();
    });
}

function finished(req, res) {
    fs.readFile('FinishedQuestsLeafs.json', function(err,data) {
      res.writeHead(200, {
        'Content-Type': 'text/json',
        'Access-Control-Allow-Origin': '*'
    });
      res.write(data);
      res.end();
    });
}
