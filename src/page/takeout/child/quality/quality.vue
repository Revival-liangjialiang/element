<template>
	<div class="quality">
		<div class="header" id="header"></div>
		<div class="header_show">
			<span @click='$router.go(-1)'>X</span>
			<em>品质优选</em>
		</div>
		<img src="../../../../../static/images/takeout/quality_background.png">
		<ul class="shop_list_container">
			<li v-for="item in data" @click="$router.push('/shop')">
				<div class="shop_top">
					<img :src="imgurls+item.header.img_url">
					<div class="shop_text">
						<p class="one">{{item.header.title}}</p>
						<p class="two">￥{{item.header.price1}}起送&nbsp/&nbsp配送费￥{{item.header.price2}}&nbsp/&nbsp评价<em>{{item.header.score}}</em>分</p>
						<p class="three"><em>减</em>满20减16，满30减17，满35减22，满60减30，满100减50</p>
					</div>
				</div>
				<div class="shop_content">
				<ul class="shop_content_child">
					<li v-for="child_item in item.content">
						<img :src="imgurls+child_item.img_url">
						<p>{{child_item.title}}</p>
						<em>￥{{child_item.price}}</em>
					</li>
				</ul>
				</div>
				<p class="type"><i class="iconfont">&#xe688;</i>热销好店</p>
			</li>
		</ul>
<transition :name="transitionName">
<my-mainloading v-show='showLoading'></my-mainloading>
</transition> 
	</div>
</template>
<style scoped>
	.header{width: 100%;height: 2.45rem;position: fixed;top: 0.0rem;left: 0.0rem;opacity: 0;z-index: 1; background-color: black;}
	.quality>img{width: 100%;height: 6.35rem;}
	.header_show{width: 100%;height: 2.45rem;top: 0.0rem;left: 0.0rem;line-height:2.45rem;text-align: left;z-index: 1; position: fixed;font-size: 0.7rem; color: white;}
	.header_show span{margin-left: 0.5rem;margin-right: 0.5rem; color: white}
	.shop_list_container{width: 100%;height: 11.95rem;text-align: left;}
	.shop_list_container li{width: 100%;height: 11.95rem;margin-bottom: 0.5rem;padding-top: 0.6rem;padding-left: 0.6rem;position: static; background-color: white;}
	.shop_top{width: 14.5rem;height: 2.85rem;margin-bottom: 0.6rem;}
	.shop_top img{width: 2.85rem;height: 2.85rem;vertical-align: top; display: inline-block;}
	.shop_text{width: 11.25rem;height: 2.85rem;padding-left: 0.5rem; display: inline-block;}
	.one{font-size: 0.75rem;font-weight: bold;color: black;}
	.two{ margin-top: 0.3rem;}
	.two,.three{font-size: 0.5rem;color: #999999;}
	.two em{color: red;}
	.three{width: 10.5rem; bottom: 0.0rem;left: 0.5rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap; position: absolute;}
	.shop_content{width: 15.5rem;height: 6.65rem;font-size: 0.0rem; overflow: scroll;}
	.shop_content::-webkit-scrollbar{width:0;height:0}  
	.shop_content_child{white-space: nowrap;position: static;}
	.shop_content_child li{width: 4.55rem;height: 6.65rem;margin-right: 0.5rem;margin-bottom: 0.0rem; padding-left: 0.0rem;padding-top: 0rem;position: static; vertical-align: top; float: none;display: inline-block; box-sizing: border-box;}
	.shop_content_child img{width: 4.55rem;height: 4.55rem;vertical-align: top;}
	.shop_content_child p{width: 3.75rem;font-size: 0.5rem;position: static; overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
	.shop_content_child em{font-size: 0.5rem;color: red;}
	.type i{height: 0.75rem; font-size: 0.5rem;display: inline-block; color: #999999}
	.type{overflow: hidden;font-size: 0.5rem;border-top: 0.05rem solid #e9e9e9;padding-top: 0.25rem; margin-right: 0.5rem; color: #999999}
</style>
<script type="text/babel">
import main_loading from '@/components/common/main_loading'
import {imgurls} from '@/config/address'
	export default{
		data(){
			return{
				header_obj:null,
				opacity_bv:false,
				showLoading:true,
				transitionName:'slide-left',
				data:[],
				imgurls:imgurls
			}
		},
		created:function(){
			this.$http({
				method:'get',
				url:'quality_content.php'
			}).then((res)=>{
				this.showLoading = false
				this.data = res.data
			},(err)=>{

			})
		},
  components:{
    myMainloading:main_loading
  },
		mounted:function(){	
		this.header = document.getElementById('header')	
		window.onscroll=function(){ 
		var top = document.documentElement.scrollTop||document.body.scrollTop
		if(top===0){
			this.header.style.opacity = 0
			this.opacity_bv = true
		}else if(20>top&&top>0){
			this.opacity_bv = true
			this.header.style.opacity = 0
		}else if(30>top&&top>20){
			this.opacity_bv = true
			this.header.style.opacity = 0.1
		}else if(40>top&&top>30){
			this.opacity_bv = true
			this.header.style.opacity = 0.2
		}else if(50>top&&top>40){
			this.opacity_bv = true
			this.header.style.opacity = 0.3
		}else if(60>top&&top>50){
			this.opacity_bv = true
			this.header.style.opacity = 0.4
		}else if(70>top&&top>60){
			this.opacity_bv = true
			this.header.style.opacity = 0.5
		}else if(80>top&&top>70){
			this.opacity_bv = true
			this.header.style.opacity = 0.6
		}else if(90>top&&top>80){
			this.opacity_bv = true
			this.header.style.opacity = 0.7
		}else if(100>top&&top>90){
			this.opacity_bv = true
			this.header.style.opacity = 0.8
		}else if(110>top&&top>100){
			this.opacity_bv = true
			this.header.style.opacity = 0.9
		}else if(120>top&&top>110){
			this.opacity_bv = true
			this.header.style.opacity = 1
		}else if(top>120&&this.opacity_bv){
			this.header.style.opacity = 1
			this.opacity_bv = false
		}
		} 
		},
		beforeDestroy:function(){
			window.onscroll = null
		}
	}
</script>