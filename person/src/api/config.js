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
    //现金券
    person_coupons:{
        coupon:url+name+'/weixin/group/onsalesindex.html',
    },
    //person跳转支付页
    person_zhifu:{
        orderpays:url+namepay+'/dhzj3orderpay.html?state=123#/repairPay?',//跳转支付
        comment:url+namepay+'/dhzj3orderpay.html?state=123#/commentxiu',//跳转评论
        order:url+namepay+'/dhzj3orderpay.html?start=123#/',//全部订单
        grouporders:url+namepay+'/dhzj3orderpay.html?start=123#/grouporders',//团购订单
        homeorders:url+namepay+'/dhzj3orderpay.html?start=123#/homeorders',//服务订单
        gotoGroupDetail:url+name+'/weixin/group/rgroupinvite.html?',//团购详情
    },
    //报修
    person_repair:{
        baoxiu:url+name+'/weixin/wuye/index.html?state=123#/butler?category=2',//报修
        fuwux:url+name+'/weixin/wuye/index.html?state=123#/butler?category=0',//服务需求 
        butler:url+name+'/weixin/wuye/index.html?state=123#/butler?category=1',//建议
    },
    //团购
    


   
}

window.baseurl= {
    URL:'https://test.e-shequ.com/wechat/hexie/wechat/',
    wuye:'https://test.e-shequ.com/dhzj3/weixin/wuye/index.html?v=20160229',
    home:'https://test.e-shequ.com/dhzj3/weixin/home/index.html?v=20160229',
    person:'https://test.e-shequ.com/dhzj3/weixin/person/index.html?v=20160229',
    conpons:'https://test.e-shequ.com/dhzj3/weixin/group/onsalesindex.html',


    orderpays:'https://test.e-shequ.com/dhzj3/weixin/personpaymentdetail.html.html?state=123#/repairPay?',//跳转支付
    comment:'https://test.e-shequ.com/dhzj3/weixin/personpaymentdetail.html.html?state=123#/commentxiu',//跳转评论
    order:'https://test.e-shequ.com/dhzj3/weixin/personpaymentdetail.html.html?start=123#/',//全部订单
    grouporders:'https://test.e-shequ.com/dhzj3/weixin/personpaymentdetail.html.html?start=123#/grouporders',//团购订单
    homeorders:'https://test.e-shequ.com/dhzj3/weixin/personpaymentdetail.html.html?start=123#/homeorders',//服务订单

    baoxiu:'https://test.e-shequ.com/dhzj3/weixin/wuye/index.html?state=123#/publish?category=2',//报修
    fuwux:'https://test.e-shequ.com/dhzj3/weixin/wuye/index.html?state=123#/butler?category=0',//服务需求 
    butler:'https://test.e-shequ.com/dhzj3/weixin/wuye/index.html?state=123#/butler?category=1',//建议
    message:'https://test.e-shequ.com/dhzj3/weixin/wuye/index.html#/message"',
    gotoGroupDetail:'https://test.e-shequ.com/dhzj3/weixin/group/rgroupinvite.html?',//团购详情
    payment:"https://test.e-shequ.com/dhzj3/weixin/wuyepaymentdetail.html?#/?",

}
export default config