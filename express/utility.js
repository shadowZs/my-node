var express=require('express');
var utility=require('utility');

var app=express();
app.get('/',function(request,response){
	console.log(response.query);  
	// var q=response.query.q;
	// var mdsValue=utility(q);
	response.send('hello world')

});

app.listen(1003,function(){
	console.log('service run at 127.0.0.1:1002');	
})