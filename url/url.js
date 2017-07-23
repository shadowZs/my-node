var url=require('url');
var http=require('http');
var fs=require('fs');

http.createServer(function(request,response){
	response.writeHead(200,{'ContentType':'text/plain'});
	response.write('hello world');

	var pathname=url.parse(request.url).pathname;
	var file=pathname.slice(1);
	var filepath='./public';

	fs.readFile(filepath+file,function(err,data){
		console.log(data);
		response.end(data);
	})

	
	
}).listen('8888');

console.log('service run started') 