var events=require('events');
var eventEmitter=new events.EventEmitter();

//监听器1
var listener1=function listener1(){
	console.log('lisenter1执行');
}

//监听2
var listener2=function listener2(){
	console.log('lisenter2执行')
}

//绑定connection事件处理函数listener1
eventEmitter.addListener('connection',listener1);

//绑定事件2
eventEmitter.on('connection',listener2);

//触发connect事件
eventEmitter.emit('connection');

//为什么要重新引入？
eventListenter=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListenter+'个监听事件')


//移除见监听事件1
eventEmitter.removeListener('connection',listener1);

//再次出发connection事件
eventEmitter.emit('connection');

eventListenter=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListenter+'个监听事件');