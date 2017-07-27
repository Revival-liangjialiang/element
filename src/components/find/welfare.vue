<template>
	<div class="welfare_box">
		<div class="welfare_box_top">
			<div class="welfare_box_top_left" @click="jump('/integral')">
				<p class="welfare_box_top_left_text">
					<strong>积分商城</strong>
					<span>0元好物在这里</span>
				</p>
				<img src="../../../static/images/find/find_01.png">
			</div>
			<div class="welfare_box_top_right">
			<div class="welfare_box_top_right_top" @click="jump('/delicious')">
				<p class="welfare_box_top_right_text">
					<strong>美味爆料</strong>
					<span>想吃点零食点我点我</span>
					<img src="../../../static/images/find/find_03.png">
				</p>
				</div>
				<div class="welfare_box_top_right_bottom" @click="jump('/recommend')">
				<p class="welfare_box_top_right_text">
					<strong>推荐有奖</strong>
					<span>5元现金拿不停</span>
					<img src="../../../static/images/find/find_04.png">
				</p>
				</div>
			</div>
		</div>
		<div class="welfare_box_bottom">
			<div class="welfare_box_bottom_left">
				<p class="welfare_box_top_right_text" @click="jump('/flow')">
					<strong>免费流量</strong>
					<span>每月最高500m</span>
					<img src="../../../static/images/find/find_02.png">
				</p>
			</div>
			<div class="welfare_box_bottom_right">
				<p class="welfare_box_top_right_text" @click="jump('/red')">
					<strong>有红包快抢</strong>
					<span>红包福利领不停</span>
					<img src="../../../static/images/find/find_05.png">
				</p>
			</div>
		</div>
		<img src="../../../static/images/find/find_06.png" @click="$router.push('/activity')">
	</div>
</template>
<style scoprd>
	.welfare_box{width: 100%;height: 11.1rem;}
	.welfare_box_top{width: 100%;height: 7.35rem;}
	.welfare_box_top_left{width: 7.95rem;height: 100%;padding-top: 0.95rem; background-color: white;}
	.welfare_box_top_left_text,.welfare_box_top_right_text{width: 100%;height: 2.1rem;padding-left: 0.7rem;text-align: left;}
	.welfare_box_top_left_text strong,.welfare_box_top_right_text strong{font-size: 0.75rem; display: block;color: #ffa127;}
	.welfare_box_top_left_text span,.welfare_box_top_right_text span{font-size: 0.5rem; display: block;color: #999999;}
	.welfare_box_top_left img{width: 3.3rem;height: 3.3rem;margin-left: 1.95rem;}
	.welfare_box_top_right{width: 7.95rem;height: 100%;top: 0.0rem; right: 0.0rem; position: absolute;}
	.welfare_box_top_right div{height: 3.64rem;padding-top: 0.95rem; background-color: white;}
	.welfare_box_bottom{width: 100%;height: 3.65rem; position: absolute;bottom: 0.0rem;}
	.welfare_box_top_right_text strong{color: #f46c4e}
	.welfare_box_top_right_text img{width: 2.1rem;height: 2.1rem; top:0.0rem; right: 0.7rem; position: absolute;}
	.welfare_box_top_right_top{margin-bottom: 0.08rem;}
	.welfare_box_top_right_bottom strong{color: #31b1e4}
	.welfare_box_bottom_left,.welfare_box_bottom_right{width: 7.95rem;height: 100%;padding-top: 0.9rem; background-color: white;}
	.welfare_box_bottom_right{top: 0.0rem; right: 0.0rem; position: absolute;}
	.welfare_box>img{width: 100%;height: 3.75rem;margin-top: 4.1rem;margin-bottom: 0.35rem;}
	.welfare_box_bottom strong{color: #f74876;}
	.welfare_box_bottom_right strong{color: #a4d02c;}
</style>
<script type="text/babel">
	export default{
		data(){
			return{

			}
		},
		methods:{
			jump:function(path){
				this.$router.push(path)
			}
		},
		mounted:function(){
			document.body.scrollTop = 0
		}
	}
</script>