var http=require('http');
var superagent=require('superagent');
var cheerio=require('cheerio');
var async=requrire('async');

//利用async来控制并发数量
async.mapLimit(urls,5,function(url,callback){
	fetchUrl(url,callback);
})



function fetchUrl(url,callback){
	
}