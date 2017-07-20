var events=require('events');
var EventEmitter=events.EventEmitter;
var events=new EventEmitter()
events.on('someEvent',function(age,name){
	console.log('listener1',age,name)
});

events.on('someEvent',function(age,name){
	console.log('listener2',age,name)
});

//多个事件监听是如何设置监听器的？
events.emit('someEvent','someEvent2','参数1','参数2');