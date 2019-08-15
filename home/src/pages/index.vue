<style scoped>
.home{font-family: PingFangSC-Regular;width: 100%;height:100%;
      background-color:#EEEEEE;font-size: 14px;text-align: center}
.swiper{width: 100%;}
.swiper img{width: 100%;}
.line{height:5px;width:100%;clear: both;background: #eeeeee;}
.line2{height:10px;width:100%;clear: both;background: #eeeeee;}
.week_sugg_img{width: 42%;padding-bottom: 39%;border-right: #eeeeee 1px solid;
 	background-size: 100%;background-repeat: none;margin: 0 0 0 3%;
 	background-image: url(../assets/images/index/grid.png);}
.week_sugg_img2{width: 94%;padding-bottom: 35.2%;background-size: 100%;
 	background-repeat: none;margin: 0 6% 0 0;} 
.week_sugg_img3{width: 94%;border-top: #eeeeee 1px solid;padding-bottom: 35.2%;
 	background-size: 100%;background-repeat: none;margin: 0 6% 0 0;}
.w40{box-sizing: border-box; -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box;}
.w30{width: 30%;box-sizing: border-box; -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box;}
.w60{width: 55%;box-sizing: border-box; -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box;}
.w100{width:100%}
.contain_weixiu{box-sizing: border-box;overflow: hidden;background: #EEEEEE;padding:5px;}
.icon_weixiu{box-sizing: border-box;padding: 5px;width: 33%;float:left;}
.device {
	width: 100%;
    /* height: 20%; */
    /* margin: 0px auto; */
    position: relative;
}
</style>
<template>
	<div  class="home">
		<!-- swiperData -->
		<div class="device">
		<swiper :options="swiperOption"  ref="mySwiper">
	      	<swiper-slide v-for="(item,index) in swiperData" :key="index">
		        <div class="swiper">
		        	<a :href="item.bannerUrl" style="display: block;">
		        		<img :src="item.picture" alt="">   
						<!-- <img src="../assets/images/common/footer_zenzhi_selected.png" alt=""> -->
		        	</a>   
		        </div> 
	      	</swiper-slide>
	      	<!-- <div class="swiper-pagination" slot="pagination"></div>     -->
	    </swiper>
		</div>
		<div class="line2">&nbsp;</div>
		<div style="overflow: hidden;">
			<div class=" fl w40 week_sugg_img" @click="gotoPage(data1.url)"></div>	
			<div class="fl w60">
				<div class="week_sugg_img2 fr" @click="gotoPage2()"
				 v-bind:style="{backgroundImage:'url(' + data2.img + ')'}">
				 </div>
				<div class="week_sugg_img3 fr" @click="gotoPage(data3.url)" 
				v-bind:style="{backgroundImage:'url(' + data3.img + ')'}">
				</div>
			</div>
		</div>
		<div class="line">&nbsp;</div>
		<div class="contain_weixiu">
			<img @click="gotoProject(1)" src="../assets/images/index/finance.png" class="icon_weixiu"/>
			<img @click="gotoProject(2)" src="../assets/images/index/hotel.png" class="icon_weixiu"/>
			<img @click="gotoProject(3)" src="../assets/images/index/travel.png" class="icon_weixiu"/>
			
		</div>
		<div style="width: 100%;height: 72px;background-color: #EEEEEE;"></div>
		<foot></foot>
	</div>
</template>
<script>
	let vm;
	import foot from '../components/footer.vue'
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	import '../assets/css/swiper.min.css'
	export default {
		components:{
			foot,
			swiper,
    		swiperSlide
		},
		data(){
			return {
				swiperOption:{
			        notNextTick:true,
			        // autoplay:false,
			        autoplay:{
			          disableOnInteraction:false,
			          delay:2000
			        },
			        speed:1000,
			        pagination: {
			          el: '.swiper-pagination',
			          clickable:false,
			        },
			        loop: true,			        
			    },
				swiperData:[],
				data1:'',
				data2:'',
				data3:'',
			}
		},
		beforeCreate(){//刷新页面
			
		},
		created(){
			vm=this;
			vm.common.checkRegisterStatus();
	  		this.initData()

		},
		watch:{
			
		},
		mounted(){
			// console.log(vm.config)
			// this.initSession4Test();
		},
		methods:{
			//模仿线上用户信息
			//105/747/384
		  	initSession4Test(){
		  		let _this = this;
				let url = '/initSession4Test/105';
				_this.receiveData.getData(_this,url,'Data',function(){
					// _this.tab();
					_this.initData();
				});
			},
			initData(){
				let _this = this;
				let url = '/pageconfig/daojia';
				_this.receiveData.getData(_this,url,'res',function(){
					console.log(_this.res);
					let res = _this.res;
					if (res.success == true) {
						_this.swiperData = res.result.banners;
						_this.data1 = res.result.jingxuan1;
						_this.data2 = res.result.jingxuan2;
						_this.data3 = res.result.jingxuan3;
					} else{
						if(res.message!==null){
							alert(res.message);
						}else{
							alert("页面获取信息错误，请稍后重试！");
						}
					}
					
				})
			},
			gotoPage(ele){
				
				if(ele == ''){
					this.$router.push({path:'/build'})
				}else{
					location.href = ele;
				}
			},
			gotoPage2(){
					this.$router.push({path:'/build'})
			},
			gotoProject(type){
				if(type=="2"){
	        		this.$router.push({path:'hotel'})
	        	}else if(type=="3"){
	        		location.href=vm.config.home_message.message;
	        	}else{
	        		// location.href="build.html";
	        		this.$router.push({path:'/build'})
	        		//alert("敬请期待！");
	        	}
			}
		}	
	}
</script>