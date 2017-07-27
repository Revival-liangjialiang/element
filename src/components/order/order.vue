<template>
	<div class="order_box">
		<p class="order_box_text">
			<strong>我的订单</strong>
			<span @click="$router.push('/full_order')">全部订单></span>
		</p>
		<div class="order_box_child2">
			<img src="../../../static/images/order/order1.png">
			<p>
				<strong>近三个月无外卖订单记录</strong>
				<span>查看三个月前的订单></span>
			</p>
		</div>
	</div>
</template>
<style scoped>
	.order_box{width: 100%;height: 9.8rem;background-color: white;}
	.order_box_text{padding-top: 0.55rem;padding-left: 0.7rem;padding-right: 0.7rem; text-align: left;}
	.order_box_text strong{font-size: 0.7rem;color: #333333;}
	.order_box_text span{font-size: 0.6rem;float: right; color: #2395ff;}
	.order_box_child2{width: 100%;height: 5.1rem;margin-top: 1.55rem;}
	.order_box_child2 img{width: 2.5rem;height: 2.5rem;margin-bottom: 1.0rem; margin-left: auto;margin-right: auto;}
	.order_box_child2 strong{font-size: 0.7rem;display: block; color: #333333;}
	.order_box_child2 span{font-size: 0.5rem;color: #999999;}
</style>
<script type="text/babel">
	export default{
		data(){
			return{

			}
		}
	}
</script>