var express = require('express');

var app=express();

app.get('/',function(request,response){
	response.send('hello world');
});

app.listen(1001,function(){
	console.log('server has started');
});