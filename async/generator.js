// var fs=require('fs');

// var readFile=function(filename){
// 	return new Promise(function(resolve,reject){
// 		fs.readFile(filename,function(err,data){
// 			if(errr) reject(err);
// 			resolve(data);
// 		})
// 	})
	
// };

// var gen=function* (){
// 	var f1=yield readFile();
// 	var f2=yield readFile();
	
// }

function* foo(x){
	yield x+1;
	yield x+2;
	return x+3;

}

foo(2);