<template>
	<ul class="shop_list">
		<li v-for="(item,index) in data" @click="$router.push('/welfare')">
			<img src="../../../../../static/images/find/selected2.png">
			<p class="circle">
				<span class="top"></span>
				<span class="bottom"></span>
			</p>
			<div class="shop_list_text ver">
				<p class="one">
					<img src="../../../../../static/images/find/selected3.png">
					<span>按摩护眼仪</span>
				</p>
				<p class="two">
					去眼袋 黑眼圈
				</p>
				<p class="three">已抢1785件</p>
				<p class="four">卷后价<strong>￥19.9</strong><em>￥69.9</em></p>
			</div>
			<div class="button_box line_left">
				<span>优惠劵</span>
				<em><span>￥</span>50</em>
				<button>领卷购买</button>
			</div>
		</li>
	</ul>
</template>
<style scoped>
	.shop_list{width: 100%;padding-left: 0.2rem;padding-right: 0.2rem;margin-top: 0.15rem;}
	.shop_list li{width: 100%;height: 5.25rem;padding: 0.4rem;border-radius: 0.35rem;margin-bottom: 0.25rem; text-align: left; overflow: hidden; background-color: white;}
	.shop_list img{width: 4.45rem;display: inline-block;}
	.circle{width: 0.5rem;height: 5.25rem;top: 0.0rem;right: 3.3rem; position: absolute;}
	.circle .top{width: 0.5rem;height: 0.5rem; top: -0.25rem;left: 0.0rem; border-radius: 50%; position: absolute; background-color: #f0f0f0;}
	.circle .bottom{width: 0.5rem;height: 0.5rem;left: 0.0rem;  bottom: -0.25rem;border-radius: 50%; position: absolute; background-color: #f5f5f5;}
	.shop_list_text{width: 6.75rem;height: 3.9rem;display: inline-block;vertical-align: top;}
	.shop_list_text .one img{width: 0.8rem;top: -0.05rem;position: relative; vertical-align: middle;}
	.shop_list_text .two{font-size: 0.6rem; color: #999999;}
	.shop_list_text .three{font-size: 0.6rem;margin-top: 0.5rem; color: #999999;}
	.shop_list_text .four{font-size: 0.6rem;color: red;}
	.shop_list_text .four em{font-size: 0.6rem;right: 0.25rem;bottom: 0.0rem; position: absolute; text-decoration: line-through; color: #999999;}
	.shop_list_text .four strong{color: red;}
	.button_box{width: 3.6rem;height: 3.5rem;right: 0.0rem;top: 0.85rem;text-align: center; position: absolute;}
	.button_box span{color: red;}
	.button_box em{font-size: 1rem;margin-top: 0.15rem;margin-bottom: 0.15rem; display: block;color: red;}
	.button_box button{border-radius: 0.5rem;padding: 0.25rem;font-size: 0.6rem; color: white; background-color: red;}
</style>
<script type="text/babel">
	export default{
		data(){
			return{
				data:[{},{},{},{},{},{},{}]
			}
		}
	}
</script>