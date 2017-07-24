var express=require('express');
var cheerio=require('cheerio');
var superagent=require('superagent');
var url=require('url');

var app=express();

app.get('',function(request,response,next){
	superagent.get('https://cnodejs.org/')
		.end(function(err,res){
			if(err){return next(err)};
			var $=cheerio.load(res.text);
			var items=[];

			$('#topic_list .topic_title').each(function(idx,item){
				//实际得到的URL地址格式为topic/542acd7d5d28233425538b04
				//利用url.resolve推断出完整的url地址https://cnodejs.org/topic/542acd7d5d28233425538b04 

				var href=url.resolve('https://cnodejs.org/',$(item).attr('href'));
				
				items.push(href);
			})
			console.log(items);
		})
})

app.listen(1005,function(){
	console.log('server has started');
})
