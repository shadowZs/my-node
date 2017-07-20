//定义一个sayHello的方法
function SayHello(){
	var name;
	this.setName=function(myname){
		name=myname;
	};

	this.sayName=function(){
		console.log(name);
	}	

}
module.exports=SayHello;