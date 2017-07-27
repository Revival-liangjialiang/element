<template>
	<div class="recommend">
		<my-header :recommend="true"></my-header>
		<img src="../../../../../static/images/find/recommend1.png">
		<div class="share_box">
			<ul class="sahre_list">
				<li>
					<img src="../../../../../static/images/find/recommend2.png">
					<span>邀请微信好友</span>
				</li>
				<li>
					<img src="../../../../../static/images/find/recommend3.png">
					<span>邀请QQ好友</span>
				</li>
				<li>
					<img src="../../../../../static/images/find/recommend4.png">
					<span>面对面邀请</span>
				</li>
			</ul>
		</div>
		<ul class="data">
			<li>
				<p>累计收益</p>
				<em>0&nbsp<strong>元</strong></em>
			</li>
			<li>
				<p>成功邀请</p>
				<em>0&nbsp<strong>人</strong></em>
			</li>
		</ul>
		<span style="font-size: 0.6rem;margin-bottom:1.95rem;">-&nbsp收益明细&nbsp-</span>
		<div>
			<img src="../../../../../static/images/find/recommend5.png" style="width:1.75rem;display:inline-block;margin-bottom: 0.25rem;">
			<p style="font-size: 0.6rem;color: #999999;">还不赶紧去邀请好友</p>
		</div>
		<span style="margin-top: 6.2rem;margin-bottom: 1.7rem;font-size: 0.6rem;">查看活动规则></span>
		<transition :name="transitionName">
<my-mainloading v-show='showLoading'></my-mainloading>
</transition>  
	</div>
</template>
<style scoped>
	.recommend img{width: 100%;}
	.share_box{width: 100%;height: 5.3rem;background-color: white;}
	.sahre_list{width: 100%;height: 5.3rem;margin-left: -0.15rem;}
	.sahre_list li{width: 3.75rem;height: 100%;margin-left: 1.25rem;padding-top: 0.55rem; text-align: center;}
	.sahre_list img{width: 2.65rem;margin-bottom: 0.25rem; display: inline-block;}
	.sahre_list span{font-size: 0.6rem;}
	.data{width: 14.75rem;height: 2.85rem;border-bottom: 0.1rem solid #e9e9e9; margin-bottom: 0.5rem; margin-left: auto;margin-right: auto;}
	.data li{width: 50%;height: 1.6rem;top: 50%;transform: translate(0,-50%);}
	.data li:nth-child(1){border-right: 0.1rem solid #e9e9e9; border-right-style: dashed;}
	.data em{font-size: 0.8rem; color: red;}
	.data p,.data strong{font-size: 0.6rem;}
	.data li:nth-child(2) em{color: black;}
</style>
<script type="text/babel">
import main_loading from '@/components/common/main_loading'
import header from '@/components/common/header'
	export default{
		data(){
			return{
				 showLoading:true,
        transitionName: 'slide-left'
			}
		},
		components:{
			myHeader:header,
			 myMainloading:main_loading 
		},
        mounted:function(){
            setTimeout(()=>{
                this.showLoading = false
            },1000)
        }
	}
</script>