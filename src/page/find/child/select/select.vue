<template>
	<div>
		<my-header :select="true"></my-header>
		<yd-slider autoplay="3000">
        <yd-slider-item>
            <a href="http://www.ydcss.com">
                <img src="../../../../../static/images/find/time_limit.png">
            </a>
        </yd-slider-item>
        <yd-slider-item>
            <a href="http://www.ydcss.com">
                <img src="../../../../../static/images/find/time_limit.png">
            </a>
        </yd-slider-item>
    </yd-slider>
    <div>
    <div class="left_move_box">
    	<ul>
    		<li v-for="(item,index) in data" @click="change(item);$router.push('/select')" :class="{active:item===current||(index==0&&current===null)}">{{item.title}}</li>
    	</ul>
    </div>
    <i class="iconfont bottom_arrow" @click="show_popup">
    		&#xe61d;
    	</i>
    	<div class="nav_popup" v-if='popup'>
    		<ul>
    			<li v-for="(item,index) in data" :class="{active:item===current||(index==0&&current===null)}" @click="popup_click(item)">{{item.title}}</li>
    		</ul>
    	</div>
    	<div class="pc" v-if='popup' @click='popup = !popup' @touchmove.prevent=''></div>
    </div>
   <router-view></router-view>
   <transition :name="transitionName">
<my-mainloading v-show='showLoading'></my-mainloading>
</transition>  
	</div>
</template>
<style scoped>
	.left_move_box{width: 100%;height: 1.7rem;display: inline-block;overflow: scroll;z-index:101;background-color: white;}
	.left_move_box ul{height: 1.7rem;padding-top: 0.3rem; white-space: nowrap;}
	.left_move_box ul li{height: 1.1rem; margin-left: 1.0rem;line-height: 1.1rem;font-size: 0.6rem; float: none;display: inline-block;}
	.left_move_box ul .active{border-bottom: 0.1rem solid red;color: red;}
	.nav_popup .active{color: red;}
	.left_move_box::-webkit-scrollbar{width: 0;height: 0;} 
	.bottom_arrow{width: 1.7rem;height: 1.1rem;top: 0.3rem;line-height: 1.1rem;border-left:0.05rem solid #f5f5f5;  font-size: 0.6rem; right: 0.0rem;display: inline-block; position: absolute;z-index: 101; color: #333333;background-color: white;}  
	.nav_popup{width: 16.0rem;height: 8.0rem;z-index: 101;left: 0.0rem; position: absolute; background-color: white;}
	.nav_popup li{width: 3.8rem;height: 1.15rem;line-height: 1.15rem; border-radius: 0.75rem;margin-left: 1.1rem;margin-top: 0.7rem;font-size: 0.6rem; background-color: #f5f5f5;}
</style>
<script type="text/babel">
import header from '@/components/common/header'
import main_loading from '@/components/common/main_loading'
	export default{
		data(){
			return{
				popup:false,
				current:null,
				data:[{title:'推荐'},{title:'居家'},{title:'俊男'},{title:'靓女'},{title:'就爱吃'},{title:'美妆'},{title:'数码'},{title:'运动'},{title:'图文'},{title:'母婴'}],
				showLoading:true,
        transitionName: 'slide-left'
			}
		},
		components:{
			myHeader:header,
			myMainloading:main_loading 
		},
		methods:{
			change:function(item){
				this.current = item				
			},
			show_popup:function(){
				this.popup = !this.popup
			},
			popup_click:function(item){
				this.current = item
				this.popup = !this.popup
			}
		},
        mounted:function(){
            document.body.scrollTop = 0
            setTimeout(()=>{
                this.showLoading = false
            },1000)
        }
	}
</script>