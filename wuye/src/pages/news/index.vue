<template>
   <div>
        <div class="ov" style="color:#3b3937;">
            <div class="comment ov p15 fs20">{{message.title}}</div>
             <div class="ov pb15 lite-divider" style="  margin-left: 15px;margin-right:15px">
	            <span class="fl fs12" style="color:#888">
                <i class="icon time-icon"></i>{{message.publishDate}}
                </span>
	            <span class="fr fs12">
                <i class="icon" ></i>
                {{message.fromSite}}
                </span>
	        </div>
             <div class="msg_content"  v-html="message.content"></div>
        </div>
   </div>
</template>

<script>
let vm;
export default {
   data () {
       return {
           messageId:this.$route.query.messageId,
           message:{},
           // title:'资讯信息'
       };
   },
   created() {
       vm=this;
   },
   mounted() {
       this.common.checkRegisterStatus();
       vm.query();

   },
   methods: {
       query() {
           if(vm.messageId ==null || vm.messageId == "") {
               vm.queryMessage();
           }else {
               vm.showMessage();
           }
       },
       queryMessage() {
           let url="/getmessages";
            vm.receiveData.getData(vm,url,'data',function(){
                if(vm.data.success) {
                  if(vm.data.result !=null) {
                    vm.message=vm.data.result;
                    }else {
                        alert('信息未发布');
                       window.location.href=vm.config.footer.home;
                    }
                }else {
                    alert("页面获取信息错误，请稍后重试！");
                }
            })
       },
       showMessage() {
           let url="/messageDetail/"+vm.messageId;
             vm.receiveData.getData(vm,url,'data',function(){
                 if(vm.data.success) {
                      if(vm.data.result !=null) {
                            vm.message=vm.data.result;
                          
                        }
                 }else {
                      alert("加载消息失败！");
                 }
                
            })
       }
   },
   components: {},
   computed: {},
}
</script>

<style  scoped>
.ov {
    overflow: hidden;
    padding: 1px;
}
.comment {
            margin-top: 5px;
            line-height: 20px;
        }
.p15 {
    padding:15px;
}      
.fs20 {
    font-size:20px;
} 
 .pb15 {
     padding-bottom: 15px;
 }
 .lite-divider {
 	border-bottom: 1px solid #d4cfc8;
 	padding-left: 15px;
}
.fs12 {
    font-size:12px;
}
.ov .icon {
    background-size: 13px;
    width: 13px;
    height: 13px;
    margin-right: 5px;
     vertical-align: bottom;
     display:inline-block;
}
.time-icon {
	background: url("../../assets/images/index/icon_time_gray.png") no-repeat;
}
.msg_content{
    margin-left:5%;
    width: 90%;
    clear: both;
    font-size: 14px;
    overflow: scroll;
}
</style>