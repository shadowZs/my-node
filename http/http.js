var http=require('http');

http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/plan'});
	response.end('hello world');
}).listen(8888);

console.log('server run at 127.0.0.1:8888');