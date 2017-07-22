var buf=new Buffer(1024);

// var len=buf.write('hello world!');

// console.log('写入的字节数'+len);


for(var i=0; i<26; i++){
	buf[i]=i+97;
};

// console.log(buf.toString('utf8'));
// console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,10))
