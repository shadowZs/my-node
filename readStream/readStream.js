var fs=require('fs');
var data='';
//创建readStream
var readStream=fs.createReadStream('input.txt');

//设置读取编码
readStream.setEncoding('UTF8');

//处理流事件 data--->end--->err
readStream.on('data',function(chunk){
	data+=chunk;
	console.log(chunk);
})

readStream.on('end',function(d){
	console.log(d);  //undefinded
	console.log(data); 
})

readStream.on('err',function(err){
	console.log(err);
})

console.log('over');

// 打印顺序 over ----> hello world