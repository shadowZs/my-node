var fs=require('fs');

//异步读取 readFile
fs.readFile('index.txt',function(err,data){
	if(err) {
		return err
	}
	console.log('异步读取：'+data.toString());
})

//同步读取
var data=fs.readFileSync('index.txt');
console.log('同步读取:'+data.toString());

console.log('程序执行完毕');


