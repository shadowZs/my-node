//读取文件并计算单词个数
var fs=require('fs');


var words={};
var filesNumber=0;  //计算已读取的文件数
var totalFile;

//fs.readdir为读取
fs.readdir('./text',function(err,files){
	totalFile=files.length;
	files.forEach(function(file){
		fs.readFile('./text/'+file,function(err,data){
			countWords(data);
			console.log(words);
			checkIfComplete();
		})
	})
});

//计算文件中的单词
function countWords(data){
	var word=data.toString().toLowerCase().split(/\/w+/);
	for(var index in words){
		if(words[index]){
			words[index]++;
		}else{
			words[index]=1;
		}
	}
}

//检查是否已读取完文件
function checkIfComplete(){
	filesNumber++;
	if(filesNumber == totalFile){
		for(var word in words){
			console.log(index+':'+words[index])
		}
	}

}