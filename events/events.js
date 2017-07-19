var events=require('events');

var eventEmitter=new events.EventEmitter();

//创建事件处理程序
var connectHandler=function connected(){
	console.log('连接成功');

	eventEmitter.emit('received')
};


eventEmitter.on('connection',connectHandler);


eventEmitter.on('received',function(){
	console.log('收到数据')
});

eventEmitter.emit('connection');

console.log('程序结束');