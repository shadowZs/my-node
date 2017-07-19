var fs=require('fs');

var readStream=fs.createReadStream('input.txt');

var writeStream=fs.createWriteStream('output.txt');

//读取readStream中的内容，并通过管道流写入到writeStream中
readStream.pipe(writeStream);
console.log('finished');