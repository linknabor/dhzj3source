<style scoped>
.footer {width: 100%;height: 72px;position: fixed;bottom: 0;
  left: 50%;-webkit-transform: translate3d(-50%,0,0);transform: translate3d(-50%,0,0);
  overflow: hidden;background-color: #fff;border-top: #eceded;
  -webkit-box-shadow: 0 0 4px rgba(0,0,0,.2);box-shadow: 0 0 4px rgba(0,0,0,.2)}
.footer li {float: left;width: 33%;text-align: center;height: 100%}
.footer a {color: #777;font-size: 14px}
.footer a:hover,.footer a:focus {color: #666;font-size: 18px}
.footer a.active {color: #ff8a00}
.footer .nav-controller {position: relative;height: 100%;display: block;padding-top: 10px}
.footer .nav-controller i {display: block;font-size: 12px;margin-bottom: 0px; height:28px}
.footer_logo{background-position: 50% 0;background-size: 22px;
    background-repeat: no-repeat;}
.footer_wuye_selected{background-image: url('../assets/images/foot/footer_shequ_selected.png');}
.footer_zenzhi{background-image: url('../assets/images/foot/footer_zenzhi.png');}
.footer_person{background-image: url('../assets/images/foot/footer_wode.png');}
</style>

<template>
	<div class="index">
	    <footer class="footer">
		    <nav>
		        <ul>
		        	<li>
			            <a :href="config.footer.wuye" class="nav-controller active">
			              	<i class="footer_logo footer_wuye_selected"></i>社区
			            </a>
			        </li>
			        <li>
			            <a :href="config.footer.home" class="nav-controller">
			              <i class="footer_logo footer_zenzhi"></i>增值
			            </a>
			        </li>
			        <li>
			            <a :href="config.footer.person" class="nav-controller">
			              <i class="footer_logo footer_person"></i>我的
			            </a>
			        </li>
		        </ul>
		    </nav>
	    </footer>     	
	</div>
</template>

<script>
    
    export default{
             data() {
				 return {
					
				 }
			}
    }
</script>