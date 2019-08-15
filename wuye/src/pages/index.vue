<style scoped>
.wuye{font-family: PingFangSC-Regular;width: 100%;height:100%;
      background-color:#fff;font-size: 14px;text-align: center}
a{color: #000;opacity: 0.7;}	
.address{padding: 14px;background-color: #f7f7f9;font-family: "微软雅黑";
    font-size: 14px;color: #000000;text-align: center;}
.city{float: left;}
.xiaoqu{padding-right: 32px;font-size:16px;font-weight: bold;}
.section_divider{border-bottom: 10px solid #e5e2dd;}
.jiugongge{width: 100%;height: 208px;background-color: white;}
.jgg_li{float: left;width:calc((100% / 3) - 4px);height: 102px; text-align: center;letter-spacing: 1.31px;font-size: 16px;font-family:PingFangSC-Regular;
	border: 1px solid #efefef}
.jgg_li:nth-child(1){border-left:none;}
.jgg_li:nth-child(3){border-right: none;}
.jgg_li:nth-child(4){border-left: none;}
.jgg_li:nth-child(6){border-right: none;}
.jgg_img{margin: 15px auto 3px;}
.jgg_img img{width: 54px;}
.jgg-span{color: black;}

.tonggao{width: 100%; font-size: 15px;color: #000;text-align: left;
	height: 20px;line-height: 20px;background: #fff;
	border-bottom: 1px solid #ccc;padding:10px 0;    text-indent: 10px;
 }
.tabNav{border-bottom: 1px solid #ccc;}

.section3_zixuns{height: 105px;border-bottom: 1px solid #d4cfc8;
	background-color: white;}
.section3_sub_main_left{height: 105px;float: left;}
.section3_sub_main_right{height: 105px;float: left;
    width: 60%;margin-left: 6%;text-align: left;}
.section3_sub_img{width: 100px;height: 75px;margin: 15px 0px 15px 0px;
    float: left;}
.section3_sub_title{height: 18px;margin: 16px 0px 0px 0px;
    font-size: 15px;color: #000000;}
.subadd {
	overflow: hidden;/*超出部分隐藏*/
	white-space: nowrap;/*不换行*/
	text-overflow:ellipsis;
	/* padding: 1px; */
}
.san {
	display: -webkit-box;
		-webkit-box-orient: vertical;
		 -webkit-line-clamp: 3; /*//需要控制的文本行数 */
		overflow: hidden;
}
.section3_sub_content{height: 59px;margin: 10px 0px 0px 0px;
    font-size: 13px;color: #a1a1a1;}
</style>
<template>
	<div  class="wuye">
		<div>
			<div class="address" v-show="xiaoquName">
		        <span class="city" >{{city}}</span>
		        <span class="xiaoqu">{{xiaoquName}}</span>
		    </div>
		    <div class="section_divider"></div>
		    <div class="jiugongge">
	            <ul>
	                <li class="jgg_li" >
	                    <router-link to="/pay">
	                        <div class="jgg_img">
	                            <img src="../assets/images/index/grid_wyjf.png" alt="">
	                        </div>
	                        <span class="jgg-span">物业缴费</span>
	                    </router-link>
	                </li>
	                <li class="jgg_li" >    
	                    <!-- <router-link to="/parkFees"> -->
						<div  @click="gotopay">
	                        <div class="jgg_img">
	                            <img src="../assets/images/index/grid_tcjf.png" alt="">
	                        </div>
	                        <span class="jgg-span">停车缴费</span>
						</div>	
	                    <!-- </router-link> -->
	                </li>
	                <li class="jgg_li" >
	                    <router-link to="/payEnquiry">
	                        <div class="jgg_img">
								<!-- ../assets -->
	                            <img src="../assets/images/index/grid_jfcx.png" alt="">
	                        </div>
	                        <span class="jgg-span">缴费查询</span>
	                    </router-link>
	                </li>
	                <li class="jgg_li" >
	                    <router-link to="/myHouse">
	                        <div class="jgg_img">
	                            <img src="../assets/images/index/grid_wsyz.png" alt="">
	                        </div>
	                        <span class="jgg-span">我是业主</span>
	                    </router-link>
	                </li>
	                <li class="jgg_li" >
	                    <router-link :to="{path:'/butler',query:{category:'2'}}">
	                        <div class="jgg_img">
	                            <img src="../assets/images/index/grid_wdgj.png" alt="">
	                        </div>
	                        <span class="jgg-span">我的管家</span>
	                    </router-link>
	                </li>
	                <li class="jgg_li" >
	                    <!-- <router-link :to="{path:'/publish',query:{category:'2'}}"> -->
						<div @click="gotoThread">
	                        <div class="jgg_img">
	                            <img src="../assets/images/index/grid_zxbx.png" alt="">
	                        </div>
	                        <span class="jgg-span">在线报修</span>
						</div>	
	                	<!-- </router-link> -->
	                </li>
	            </ul>
	        </div>
	        <div class="section_divider"></div> 
	        <div class="tonggao">通知及公告</div>
	        <mt-navbar v-model="selected" class="tabNav">
				<mt-tab-item id="1">物业公告</mt-tab-item>
				<mt-tab-item id="2">业委会公告</mt-tab-item>
				<mt-tab-item id="3">居委会公告</mt-tab-item>
			</mt-navbar>
			<!-- tab-container -->
			<mt-tab-container v-model="selected">
			  	<mt-tab-container-item id="1">
				    <div class="section3_zixuns" v-for="(item,index) in zixuns1" @click="jumpToDetail(item.id)" :key="index">
						<div class="section3_sub_main_left">
							<img class="section3_sub_img" :src="item.smallImage"/>
						</div>
						<div class="section3_sub_main_right">
							<div class="section3_sub_title subadd">{{item.title}}</div>
							<div class="section3_sub_content ">{{item.summary}}</div>
						</div>
					</div>
			  	</mt-tab-container-item>
			  	<mt-tab-container-item id="2">
			    	<div class="section3_zixuns" v-for="(item,index) in zixuns2" @click="jumpToDetail(item.id)" :key="index">
						<div class="section3_sub_main_left">
							<img class="section3_sub_img" :src="item.smallImage"/>
						</div>
						<div class="section3_sub_main_right">
							<div class="section3_sub_title subadd">{{item.title}}</div>
							<div class="section3_sub_content">{{item.summary}}</div>
						</div>
					</div>
			  	</mt-tab-container-item>
			  	<mt-tab-container-item id="3">
			    	<div class="section3_zixuns" v-for="(item,index) in zixuns3" @click="jumpToDetail(item.id)" :key="index">
						<div class="section3_sub_main_left">
							<img class="section3_sub_img" :src="item.smallImage"/>
						</div>
						<div class="section3_sub_main_right">
							<div class="section3_sub_title subadd">{{item.title}}</div>
							<div class="section3_sub_content">{{item.summary}}</div>
						</div>
					</div>
			  	</mt-tab-container-item>
			</mt-tab-container>
		</div>
		<div style="width: 100%;height: 90px;background: white"></div>
		<foot></foot>
	</div>
</template>
<script>
	let vm;
	import foot from '../components/footer.vue'
	export default {
		components:{
			foot
		},
		data(){
			return {
				banners:[],
				xiaoquName:'东湖e家园',
				city:'上海',
				selected: '1',
				userSectId:0,
				zixuns1:[],
				zixuns2:[],
				zixuns3:[],
				page:0

			}
		},
		created(){
			vm=this;
		},
		watch:{
			
		},
		mounted(){
			// vm.initSession4Test();

			vm.queryUserInfo();
			vm.tab();
	  		
		},
		methods:{
			//模仿线上用户信息
			//105/747/384
		  	initSession4Test(){
		  		let _this = this;
				let url = '/initSession4Test/105';
				_this.receiveData.getData(_this,url,'Data',function(){
					// vm.tab();
				});
			},
		queryUserInfo() {
			this.common.invokeApi("GET","userInfo",null,null, function(n) {
				console.log(JSON.stringify(n));
				if(n.result!=null) {
						vm.city=n.result.city;
						vm.xiaoquName=n.result.xiaoquName;
						vm.userSectId = n.result.sect_id;
				}
			},function(){
			})
		},
		tab(){

				this.common.invokeApi("GET", "messages/"+vm.page, null, null, function(n) {
				
					vm.zixuns1 = n.result[0];
					vm.zixuns2 = n.result[1];
					vm.zixuns3 = n.result[2];
					
					vm.page++;
				}, function() {
				})		
		},
		// 停车
		gotopay() {
			alert("内容正在丰富中,敬请期待。");
			
		},
		// 报修
		gotoThread() {
			if(vm.userSectId ==0 || vm.userSectId=='' || vm.userSectId==null) {
				alert("您暂未绑定房屋，请前往“我是业主”\r\n进行操作，感谢！");
				return;
			}else {
				this.$router.push({path:'/addThread',query:{category:'2'}})
			}
		},
		jumpToDetail(mid) {
		    	if(mid==29){
		    		window.location.href="https://mp.weixin.qq.com/s/3N-yinJvq0jDJmh6fd6scw";
		    	}else if(mid==30){
		    		window.location.href="https://mp.weixin.qq.com/s/WTgWmG5lknKExBmOsughmQ";
		    	}else if(mid==31){
		    		window.location.href="https://mp.weixin.qq.com/s/-6gMOUi3vWJMRraOqtC2wQ";
				}else if(mid==76){
					window.location.href="http://mp.weixin.qq.com/s/LoJjEaaQ0xhi2wD7uuJVJQ";	
				}else if(mid==78){
					window.location.href="http://mp.weixin.qq.com/s/28gpc3gW7byK6k3kQHqX8A";
				}else if(mid==79){
					window.location.href="http://mp.weixin.qq.com/s/Em3EJ6lo4V8eITXpPcA3LQ";
				}else if(mid==86){
					window.location.href="http://m.eqxiu.com/s/kg2hoy34?from=singlemessage&isappinstalled=0";
				}else if(mid==110){
					window.location.href="http://mp.weixin.qq.com/s/4Ool8tH0lvij5PE8j14QMA";
				}else if(mid==112){
					window.location.href="http://mp.weixin.qq.com/s/gQGtpj_taPUXddQNh_EJWA";
				}else if(mid==189){
					window.location.href="http://mp.weixin.qq.com/s/8hjgD4eu7fhQHx8mKK9TRA";
				}else if(mid==190){
					window.location.href="http://mp.weixin.qq.com/s/L6OoaaJmRD72NHsUtRdqig";
		       	}else if(mid==197){
					window.location.href="https://mp.weixin.qq.com/s/X34PcEoCP-GizVczTC73nA";
				}else if(mid==198){
					window.location.href="https://mp.weixin.qq.com/s/JEE5Yyx5ugzF8-WzrkVF4g";
				}else if(mid==225){
					window.location.href="https://mp.weixin.qq.com/s/f-N1W8U1Q3Py-vTC_TjR6Q";
				}else if(mid==239){
					window.location.href="https://mp.weixin.qq.com/s/9kW4VqWJB3P74zwZM1R2Lw";
				}else if(mid==240){
					window.location.href="https://mp.weixin.qq.com/s/mSdQgIyVYBkG_Ceorxcl2g";
				}else if(mid==245){
					window.location.href="https://mp.weixin.qq.com/s/ICAowITM_9n72BsBMxFZ8Q";
				}else if(mid==246){
					window.location.href="https://mp.weixin.qq.com/s/Jp9fBZXSK4lyoImTL92iqw";
				}else{
					this.$router.push({
						path:'/message',
						query:{
							messageId:mid
						}
					})
		    	}
		    },

		}
	}
</script>