<template>
 <!-- :class="{emptybg:orders.length==0}" -->
   <div class="oper" >
       <div :class="{emptybg:orders.length==0}"></div>
        <div class="statusBar">
            <div class="statusTitle" :class="{current:status==1}" @click="changeStatus(1)">可接单</div>
            <div class="statusTitle" :class="{current:status==2}" @click="changeStatus(2)">已接单</div>
            <div class="statusTitle" :class="{current:status==3}" @click="changeStatus(3)">已完成</div>
        </div>
        <div style="width:100%;height:40px;">&nbsp;</div>
        <div class="ov pr15 lite-divider" style="color:#3b3937"  v-for="(item,i) in orders" @click="gotoDetail(i)">
            <img class="icon-repair fl" :src="item.typeImg"/>
            <div class="ov ptb15">
                <span class="fl fs15" style="color: #000">{{item.typeName}}</span>
                <span class="fr fs12" style="color: #999;"><i class="icon time-icon"></i>{{item.time}}</span>
            </div>
            <div class="comment ov  pb15">
                <span class="fl fs15" style="font-size: 16px;color: #666;max-width: 120px;height:30px;line-height:30px; overflow: hidden;">{{item.projectName}}</span>
                <span class="fr fs12 status-font">{{item.statusStr}}</span>
            </div>
        </div>
   </div>
</template>

<script>
let vm;
import btn1 from '../../assets/images/img/btn1.png';
import btn2 from '../../assets/images/img/btn2.png';
import btn3 from '../../assets/images/img/btn3.png';
import btn4 from '../../assets/images/img/btn4.png';
import btn5 from '../../assets/images/img/btn5.png';
import btn6 from '../../assets/images/img/btn6.png';
import btn7 from '../../assets/images/img/icon_btn_jiadian.png';
export default {
   data () {
       return {
           orders:[],
           status:1,
           typeConfig:{
                1:["浴室维修",btn1],
                2:["厨房维修",btn2],
                3:["客厅卧室维修",btn3],
                4:["强弱电维修",btn4],
                5:["门窗维修",btn5],
                6:["其它维修",btn6],
                7:["家电",btn7]
                    },
       };
   },
   created() {
       vm=this;
       
   },
   mounted() {
        vm.common.checkRegisterStatus()
       vm.query();
   },

   methods: {
       query() {
            vm.receiveData.getData(vm,'operator/repair/query/'+vm.status,'res',function(){
                if(vm.res.success){
                    vm.orders=vm.res.result;
                    for(var i in vm.orders)  {
                        vm.orders[i].typeName = vm.typeConfig[vm.orders[i].repairType][0];
                        vm.orders[i].typeImg = vm.typeConfig[vm.orders[i].repairType][1];
                    }
                }   
                });
       },
       //点击导航
       changeStatus(s) {
           if(vm.status !=s) {
              vm.status=s;
              vm.query();
           }
       },
       gotoDetail(i) {
           vm.$router.push({path:'/operatorOrdersDetail',query:{ordersID:vm.orders[i].id}})
       }
   },

}
</script>

<style  scoped>
  .emptybg {
    height:100%;
    width:100%;
    position: fixed;
    	background: url(../../assets/images/img/bg_weixiudan.jpg) no-repeat;
        	background-size: 100%;
}
.oper {
    background: #fffff8;
    margin: 0;
    height: auto;
}

.statusBar {
    width: 100%;
    background: #fff8ee;
    height: 40px;
    position: fixed;
}
.statusTitle {
    height: 40px;
    line-height: 40px;
    float: left;
    width: 33%;
    text-align: center;
    font-size: 15px;
}
.current {
    color: #ff8a00;
    border-bottom: 1px solid #ff8a00;
}

.ov {
    overflow: hidden;
    padding: 1px;
}
.lite-divider {
    border-bottom: 1px solid #d4cfc8;
    padding-right: 15px;
}
.myrepair .pr15 {
    padding-right: 15px;
}
.icon-repair {
    height: 60px;
    width: 60px;
    margin: 15px 15px;
    padding: 3%;
    border: 1px solid #31a8e6;
    border-radius: 3px;
}
.ptb15 {
    padding: 15px 0;
}
.fs15 {
    font-size: 15px;
}
.fs12 {
    font-size: 12px;
}
.icon {
    background-size: 13px;
    width: 13px;
    height: 13px;
    margin-right: 5px;
    vertical-align: bottom;
}
.time-icon {
    background-image: url(../../assets/images/img/icon_time_gray.png);
}
.icon {
    display: inline-block;
    /* width: 25px;
    height: 25px; */
    background-repeat: no-repeat;
}
.comment {
    margin-top: 5%;
    line-height: 20px;
}
.pb15 {
    padding-bottom: 15px;
}
.status-font {
    color: #FF8A00;
    background: #eee;
    padding: 5px 10px;
    border-radius: 3px;
}
</style>