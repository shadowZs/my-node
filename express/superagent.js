var express=require('express');
var superagent=require('superagent');
var cheerio=require('cheerio');

var app=express();
app.get('',function(request,response,next){

	//superagent 可以获取整个页面的内容
	superagent.get('https://cnodejs.org/?tab=all')
	    .end(function(err,res){        //res为存储页面的html内容
	  	 	if(err){return next(err)};

	  	 	//cheerio的用法类似jQuery
	  	 	var $=cheerio.load(res.text);
	  	 	var items=[];
	  	 	$('#topic_list .topic_title').each(function(idx,item){
	  	 		items.push({
	  	 			title:$(item).attr('title'),
	  	 			href:$(item).attr('href')
	  	 		})
	  	 	})
	  	 	items=JSON.stringify(items);
	  	 	response.end(items);
	    })

	
})
app.listen(1004,function(){
	console.log('service run at 127.0.0.1:1004');
})