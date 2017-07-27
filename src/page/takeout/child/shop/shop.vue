<template>
    <div class="shop">
    <img src="../../../../../static/images/takeout/shop1.png" class="shop_background" id="shop_background">
    <div class="header_cover" id="header"></div>
	<div class="header_box">
		<div class="header_box_child">
			<i class="iconfont shoplist_icon" @click='$router.go(-1)'>&#xe622;</i>
			<i class="iconfont header_box_child_notice" @click="$router.push('/cart')">&#xe61e;</i>
			<i class="iconfont header_box_child_setting">&#xe68b;</i>
		</div>
	</div>
	<div class="shop_info">
		<img src="../../../../../static/images/takeout/shop1.png">
		<div class="shop_info_text">
			<p class="shop_info_text_name">窑鸡王（嘉禾望岗店）</p>
			<p class="shop_info_two">商家配送&nbsp|&nbsp平均29分钟&nbsp|&nbsp配送费￥9</p>
			<p class="shop_info_three">公告：欢迎光临，用餐高峰期请提前下单，谢谢</p>
			<i class="iconfont right_arrow">&#xe623;</i>
		</div>
	</div>
	<ul class="shop_nav">
		<li v-for='(item,index) in nav_data' :class='{active:nav_status===item||(index===0&&nav_status===null)}' @click='changNavStyle(item,item.path)'>{{item.title}}<em v-if='item.score'>（{{item.score}}分）</em></li>
	</ul>
	<transition :name="transitionName">
	<router-view class="router"></router-view>
	</transition>
    </div>
</template>
<style scoped>
	.shop{width: 16.0rem;height: auto}
    .header_box{width: 100%;height: 2.5rem;top: 0.0rem;left: 0.0rem;overflow: hidden;background-color: transparent !important; position: fixed;z-index: 1;}
    .header_cover{width: 100%;height: 2.5rem;top: 0.0rem;left: 0.0rem; position: fixed;opacity: 0;z-index: 1; background-color: #2395ff;}
    .header_box_child_notice,.header_box_child_setting{font-size: 0.85rem;right: 2.35rem;position: absolute;}
	.header_box_child{width: 100%;height: 0.85rem;top: 0.8rem;padding-left: 0.7rem;padding-right: 0.7rem;text-align: left;}
	.header_box_child_setting{font-size: 0.93rem; right: 0.7rem;}
	.shop_background{width: 16.0rem;height: 6.6rem;-webkit-filter: blur(15px); }
	.shop_info{width: 100%;height: 3.65rem;top: 2.45rem; position: absolute;}
	.shop_info img{width: 3.65rem;height: 3.65rem;display: inline-block;}
	.shop_info_text{width: 11.1rem;height: 3.1rem;padding-left: 0.5rem; display: inline-block;vertical-align: top;top: 50%;transform: translate(0,-50%);text-align: left;}
	.header_box_child i{height: 0.7rem;}
	.shop_info_text_name{width: 10.75rem;font-size: 0.7rem;margin-bottom: 0.25rem; white-space: nowrap;text-overflow: ellipsis;overflow: hidden;color: white;}
	.shop_info_two,.shop_info_three{font-size: 0.5rem !important; color: rgba(255,255,255,0.8) !important}
	.shop_info_three{width: 10.75rem; margin-top: 0.5rem; white-space: nowrap;text-overflow: ellipsis;overflow: hidden;}
	.shop_nav{width: 100%;height: 2.15rem;background-color: white;}
	.right_arrow{height: 0.75rem;font-size: 0.7rem; top: 0.8rem;right: 0.5rem; position: absolute;}
	.shop_nav>li{width: 8.0rem;height: 2.15rem; line-height: 2.15rem;font-size: 0.6rem;border-bottom: 0.1rem solid white;}
	.shop_nav .active{border-bottom: 0.1rem solid #2796fd;color: #2796fd;}
	.shop_nav em{color: #ff8841;}
</style>
<script type="text/babel">
import header from '@/components/common/header'
import main_loading from '@/components/common/main_loading'
	export default{
		data(){
			return{
				header:null,
				nav_data:[{title:'商品',path:'/shop/'},{title:'评价',score:'4.5',path:'/shop/evaluate'}],
				nav_status:null,
				showLoading:true,
                transitionName: 'slide-left'
			}
		},
		methods:{
			changNavStyle:function(item,path) {
				this.$router.push(path)
				this.nav_status = item
			}
		},
		beforeDestroy:function(){
			window.onscroll = null
		},
		mounted:() => {
		this.header = document.getElementById('header')  
        window.onscroll=function(){   
        var top = document.documentElement.scrollTop||document.body.scrollTop  
        if(top===0){  
            this.header.style.opacity = 0  
        }else if(20>top&&top>0){  
            this.header.style.opacity = 0  
        }else if(30>top&&top>20){  
            this.header.style.opacity = 0.1  
        }else if(40>top&&top>30){  
            this.header.style.opacity = 0.2  
        }else if(50>top&&top>40){  
            this.header.style.opacity = 0.3  
        }else if(60>top&&top>50){  
            this.header.style.opacity = 0.4  
        }else if(70>top&&top>60){  
            this.header.style.opacity = 0.5  
        }else if(80>top&&top>70){  
            this.header.style.opacity = 0.6  
        }else if(90>top&&top>80){  
            this.header.style.opacity = 0.7  
        }else if(100>top&&top>90){  
            this.header.style.opacity = 0.8  
        }else if(110>top&&top>100){  
            this.header.style.opacity = 0.9  
        }else if(120>top&&top>110){  
            this.header.style.opacity = 1  
        }else if(top>120){
            this.header.style.opacity = 1  
        }  
        }   
		},
		components:{
			myHeader:header,
			myMainloading:main_loading
		}
	}
</script>