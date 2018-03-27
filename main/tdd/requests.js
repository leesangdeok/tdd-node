
const Requests = function(status, contents) {
  this.httpStatus = status,
  this.contents = contents
}

Requests.prototype.getHttpStatus = function() {
  return this.httpStatus;
};

Requests.prototype.setHttpStatus = function(status) {
  return this.httpStatus = status;
};

Requests.prototype.getContents = function() {
  return this.contents;
}

Requests.prototype.setContents = function(contents) {
  return this.contents = contents;
};

Requests.prototype.request = function() {
  const https = require('https'),
	http = require('http'),
	querystring = require('querystring'),
  url = require('url');

  const reqURL = url.parse("https://www.google.com");
	let reqPort = reqURL.port;
	let contents = "";
	const body = "";
  let protocol = http;
  
  const options = {
		host: reqURL.hostname,
		port: reqPort,
		path: reqURL.path,
		method: 'get',
		headers: {}//JSON.parse(req.query.reqHeader)
  };
  
  if (reqURL.protocol === 'https:') {
    options.rejectUnauthorized = false;
    protocol = https;

    if (reqURL.port == null) {
      options.port = 443;
    }
  } else { 
    if (reqURL.port == null) {
      options.port = 80;
    }
  }

  console.log(JSON.stringify(options));

	const request = protocol.request(options, function (response) {
		response.setEncoding('utf8');
		response.on('data', function (chunk) {
      contents += chunk;
      // console.log(contents);
		});
		response.on('end', function () {
      requests.setContents(contents);
		});
	});

	request.on('error', function (e) {
		console.log('problem with request: ');
		console.log(e);
	});
	
	request.write(body);
	request.end();
	
};

const requests = new Requests();
requests.request();

module.exports = Requests;