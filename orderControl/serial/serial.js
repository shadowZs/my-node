//串行流程控制

// setTimeout(function(){
// 	console.log('task 1');
// 	setTimeout(function(){
// 		console.log('task 2');
// 		setTimeout(function(){
// 			console.log('task 3');
// 		})
// 	})
// })

//利用Nimble实现流程控制
var flow=require('nimble');
flow.series([task1,task2,task3]);

function task1(callback){
	setTimeout(function(){
		console.log('task1');
		callback();
	},1000)
	
};

function task2(callback){
	setTimeout(function(){
		console.log('task2');
		callback();
	},100)
	
};

function task3(callback){
	setTimeout(function(){
		console.log('task3');
		callback();
	},500)
	
};