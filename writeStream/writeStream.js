var fs=require('fs');
var data='hello world';

var writeStream=fs.createWriteStream('output.txt');

//设置编码
writeStream.write(data,'UTF8');

writeStream.end();

writeStream.on('finish',function(){
	console.log('完成写入');
});

writeStream.on('err',function(err){
	console.log(err);
});

console.log('finished');


