<template>
   <div class="ind"> 
        <div class="avatar-wrap rel ov">
                <div class=" menu-person-link-white" @click="gotoEdit">
                        <img class="avatar center-bg"  :src="user.headimgurl" style="border: 2px solid white; float: left;">
                        <span class=" avatar-info" style="float: left;overflow: hidden;
                        width: 60%;">
                        <div class="name fs16">{{user.name}}</div>
                        <div class="fs14">常住小区&nbsp;{{user.city}}&nbsp;{{user.xiaoqu}} </div>
                        </span>
                </div> 
         </div>
         <div id="point-list" style=" border-bottom: 10px solid #eeeeee;" class="div_bottom clearfix">
            <div class="point-item-wrap" >
                <div class="point-item">
                    <div class="point-info fs16">{{user.zhima}}</div>
                    <div class="point-title fs14">我的芝麻</div>
                </div>
            </div>
            <div class="point-item-wrap" >
                <div class="point-item">
                    <div class="point-info fs16">{{user.lvdou}}</div>
                    <div class="point-title fs14">我的绿豆</div>
                </div>
            </div>
            <div class="point-item-wrap">
                <div class="point-item" @click="coupons">
                    <div class="point-info fs16">{{user.couponCount}}</div>
                    <div class="point-title fs14">我的现金劵</div>
                </div>
            </div>
            
        </div>


         <div class="info-wrap" style="overflow:hidden; clear: both; border-bottom:none ;">
                 <!-- 链接地址要换 -->
                    <a :href="this.config.person_zhifu.order" class="input-wrap menu-person-link lite-divider">
                            <span class="input-info lf30 fs16">全部订单</span>
                            <span class="fr fs14 left_color">查看全部订单&nbsp;&nbsp;&nbsp;&nbsp;</span>
                   </a> 
          </div>

        <div id="module-list" >

            <div class="module-item-wrap">
                <a class="module-item" :href="this.config.person_zhifu.grouporders">
                    <div class="module-logo logo2" >
                        <div class="module-title fs14">团购订单</div>
                    </div>
                    <div></div>
                </a>    
            </div>
            <div class="module-item-wrap" >
                <a :href="this.config.person_zhifu.homeorders">
                    <div class="module-logo logo3" >
                        <div class="module-title fs14">服务订单</div>
                    </div>
                </a>    
            </div>	
	    </div>

         <div class="info-wrap" style="overflow:hidden; clear: both;">
                <a :href="this.config.person_repair.baoxiu" class="input-wrap menu-person-link lite-divider">
                    <span class="input-info lf30 fs16">报修</span>
                    <span class="fr fs14 left_color">查看消息&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </a>
                <!-- v-if="user.repairOperator -->
              <router-link :to="{path:'/operatorOrders'}" class="input-wrap menu-person-link lite-divider"  v-if="user.repairOperator">
                    <span class="input-info lf30 fs16">我是维修工</span>
                    <span class="fr fs14 left_color">查看维修单&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </router-link>


                <a :href="this.config.person_repair.fuwux" class="input-wrap menu-person-link lite-divider">
                    <span class="input-info lf30 fs16">服务需求</span>
                    <span class="fr fs14 left_color">查看消息&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </a>

                <a :href="this.config.person_repair.butler" class="input-wrap menu-person-link lite-divider">
                    <span class="input-info lf30 fs16">意见建议</span>
                    <span class="fr fs14 left_color">查看消息&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </a>

         </div>

          <div class="info-wrap" style="border-bottom: none;">

                     <a :href="'tel:'+user.officeTel" v-show="user.officeTel!=null && user.officeTel!==''" class="input-wrap menu-person-link lite-divider special-link ">
                            <span class="input-info lf30 fs16">小区电话</span>
                            <span class="fr fs14 left_color">{{user.officeTel}}</span>
                    </a>

                    <a href="tel:021-50876295" class="input-wrap menu-person-link lite-divider special-link ">
                        <span class="input-info lf30 fs16">平台询问电话</span>
                        <span class="fr fs14 left_color">021-50876295</span>
                    </a>
        </div>
   </div>
</template>

<script>
let vm;
import wx from 'weixin-js-sdk';
export default {
   data () {
       return {
           user: {
        	headimgurl:"",/**默认头像*/
            name:"",
        	level:"",
        	zhima:"0",
        	lvdou:"0",
            couponCount:0,
            officeTel:0
        },
       };
   },
   created() {
       vm=this;

   },
   mounted() {
    //    this.initSession4Test();
    //    console.log(Config1("user_info"))
       this.User();
       this.updateCouponStatus();
   },
   components: {},
   methods: {
        //模仿线上用户信息
            // 105/747/384
            initSession4Test(){
                let url ='/initSession4Test/747';
                    vm.receiveData.getData(vm,url,'Data',function(){
                });
            },
       User() {
        //获取页面数据
        let n = "GET",
            a = "userInfo",
            i = null,
            e = function(n){
                vm.user = n.result;
                vm.user.headimgurl ="" != n.result.name || n.result? n.result.headimgurl: Config1.C("user_info").avatar;
                vm.user.name = "" != n.result.name? n.result.name: Config1.C("user_info").nickname;
                vm.user.level = Config1.C("user_level")[n.result.level];
                vm.user.officeTel = n.result.officeTel;
            },
            r = function(){
                vm.user={};
			    vm.user.headimgurl = Config1.C("user_info").avatar,
                vm.user.name = Config1.C("user_info").nickname,
                vm.user.level = Config1.C("user_info").levelname;
            };
           this.common.invokeApi(n,a,i,null,e,r);

        let url = location.href.split('#')[0];
        vm.receiveData.wxconfig(vm,wx,['onMenuShareTimeline','onMenuShareAppMessage'],url);
          },
          //更新红包状态
        updateCouponStatus(){
		
            var n = "GET",
            a = "updateCouponStatus",
            i = null,
            e = function(n) {
                console.log(JSON.stringify(n));
            },
            r = function() {

            };
            vm.common.invokeApi(n, a, i, null, e, r)
        },
        //点击头像
        gotoEdit() {
            if(this.common.hasRegister()) {
                this.$router.push({path:'/bindphone'})
            }else {
                this.$router.push({path:'/register'})
            }
        }  ,
        //现金券
        coupons() {
            vm.$router.push({path:'/coupons'})
        },
        gotoAddress() {
            if(vm.common.hasRegister()){
                 vm.$router.push({path:'/addresses'})
        	} else {
                this.$router.push({path:'/register'})
        	}
        }
   },
   computed: {},
}
</script>

<style  scoped>
.ind {
    background-color:#fffff8;
}
.avatar-wrap {
    height: 1.74rem;
    background-color: #FF8A00;
}
.rel {
    position: relative;
}
.ov {
    overflow: hidden;
    padding: 1px;
}
/* 头部 */
.menu-person-link-white {
    display: block;
    background: url(../../assets/images/person/icon_person_arrow.png) no-repeat;
    background-size: 7px 14px;
    height: 1.5rem;
    margin-right: 10px;
    background-position: right 36px;
}
.avatar-wrap span {
    display: inline-block;
    vertical-align: middle;
}
.avatar {
    margin: 15px;
}
.center-bg {
    background-size: cover;
    background-position: center;
}
.avatar {
    height: 60px;
    width: 60px;
    /* margin: 15px 20px; */
    border-radius: 50%;
}
.avatar-info {
    color: #fff;
}
.name {
    margin-top: 25px;
    margin-bottom: 10px;
}
.fs16 {
    font-size: 16px;
}
.fs14 {
    font-size: 14px;
}
#point-list {
    width: 100%;
}
.div_bottom {
    /* position: absolute; */
    /* bottom: 0; */
}
.left_color {
    color: #999999;
}
#point-list .point-item-wrap {
    margin-top: 0.2rem;
    width: 33%;
    float: left;
    position: relative;
}
#point-list .point-item-wrap .point-item {
    border-radius: 2px;
    -webkit-border-radius: 2px;
    /* height: 40px; */
    margin: 0 4px 4px 0;
    display: block;
}
#point-list .point-item-wrap .point-item .point-info {
    /* color: white; */
    text-align: center;
}
#point-list .point-item-wrap .point-item .point-title {
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: center;
    position: relative;
    /* color: white; */
}
/* 全部订单 */
.info-wrap {
    padding:4px;
    padding-left: 8px;
    padding-right: 10px;
    color: #3b3937;
    padding-bottom: 0;
    font-size: 12px;
    border-bottom: 10px solid #eeeeee;
}

.section-title, .lite-divider {
    border-bottom: 1px solid #f2f2f2;
}
.menu-person-link {
    padding-right: 1rem;
    color: #3b3937;
}
.input-wrap {
    overflow: hidden;
    line-height: 1rem;
}
.section-title, .lite-divider {
    /* border-bottom: 1px solid #d4cfc8; */
    padding-left: 15px;
}
.menu-person-link {
    display: block;
    background: url(../../assets/images/person/icon_arrow.png) no-repeat;
    background-size: 7px 14px;
    background-position: right center;
    padding-right: 15px;
}
/* 订单服务 */
#module-list {
    width: 100%;
    overflow: hidden;
}
#module-list .module-item-wrap {
    margin-top: 8px;
    width: 50%;
    float: left;
    border-bottom: 10px solid #eeeeee;
    position: relative;
}
#module-list .module-item-wrap .module-item {
    margin-top: 10px;
    display: block;
    width: 100%;
    /* height: 1.5rem; */
    background-position: 50% 0;
    background-size: 42px;
    background-repeat: no-repeat;
}
#module-list .module-item-wrap .module-item {
    font-size: 16px;
    color: #3b3937;
}
#module-list .module-item-wrap .module-item {
    -webkit-border-radius: 2px;
    /* margin: 0 4px 4px 0; */
}
.module-logo {
    margin-top: -5px;
    display: block;
    height: 1.2rem;
    background-position: 25% 0;
    background-size: .7rem;
    background-repeat: no-repeat;
}
.module-title {
    text-align: center;
    margin-top: 10px;
    margin-left: 27%;
    padding-top: 7%;
    color: #3b3937
}
/* .logo1 {
background-image: url("../../assets/images/person/icon_person_tehui.png");
}*/
.logo2 {
background-image: url("../../assets/images/person/icon_person_tuangou.png");
}
.logo3 {
 background-image: url("../../assets/images/person/icon_person_yuyue.png");
} 

.bottom-info {
    padding: 20px 15px 5px 15px;
}
.divider {
    border-bottom: 10px solid #f7f7f2;
}
.highlight {
    color: #ff8a00;
}
.divider {
    border-bottom: 10px solid #f7f7f2;
}
.special-link {
    padding-right: 0;
    background: none;
}
</style>