<template>
	<div style="width: 100%;height: 100vh;">
		<my-header :breakfast='true'></my-header>
		<img src="../../../../static/images/order/order1.png" style="width: 3.75rem;height: 3.75rem;" class="hv">
		<span class="hv" style="font-size: 0.6rem;color: #999999;">无早餐订单记录</span>
	</div>
</template>
<style scoped>
	
</style>
<script type="text/babel">
import header from '@/components/common/header'
	export default{
		data(){
			return{

			}
		},
		components:{
			myHeader:header
		}
	}
</script>