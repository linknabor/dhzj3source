
var url=/127|test/.test(location.origin)?'https://test.e-shequ.com':
/uat/.test(location.origin)?'https://uat.e-shequ.com':
'https://www.e-shequ.com';
var name='/dhzj3';
var namepay='/pay';

window.config={
//公共的请求地址
     URL:url+name+'/wechat/hexie/wechat/',
//公共的底部跳转
footer:{
    wuye:url+name+'/weixin/wuye/index.html?v=20162299',
    home:url+name+'/weixin/home/index.html?v=20160229',
    person:url+name+'/weixin/person/index.html?v=20160229',
},
//资讯
home_message:{
    message:url+name+'/weixin/wuye/index.html#/message',
},
}

export default config