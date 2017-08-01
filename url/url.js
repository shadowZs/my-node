var url = require('url');

var str='https://github.com:8080/search?utf8=%E2%9C%93&q=node&type=#user';

var urlObj=url.parse(str);  console.log(urlObj);  //将str转换成对象

var str=url.format(urlObj);   console.log(str);   //将对象转换成字符串

var pathName=urlObj.pathname    //'/yours_back/admin/sys/push_list.jsp',
var path=urlObj.pathname        //pathname+search
var query=urlObj.query          //'utf8=%E2%9C%93&q=node&type=',
var search=urlObj.search        //'?utf8=%E2%9C%93&q=node&type='
var hash=urlObj.hash            //#user  url锚部分 从#开始的部分