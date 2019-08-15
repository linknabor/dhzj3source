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
    //物业绑定房子
    house_domain: {
        domain:/127|test/.test(location.origin)?'test.e-shequ.com':
        /uat/.test(location.origin)?'at.e-shequ.com':
        'www.e-shequ.com'
    },
    //物业支付跳转
    wuye_zhifu:{
        payment:url+namepay+'/dhzj3wuyepay.html?#/?'//物业支付成功跳转
    },
}

export default config