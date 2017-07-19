var fs=require('fs');

//压缩文件模块
var zlib=require('zlib');

//压缩
// var readStream=fs.createReadStream('input.txt');
// readStream.pipe(zlib.createGzip())
// 		  .pipe(fs.createWriteStream('input.txt.gz'));


// console.log('压缩完成');


//解压
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('index.doc'));
console.log('finished');