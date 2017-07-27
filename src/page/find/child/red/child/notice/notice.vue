<template>
	<div class="notice">
		<my-header :notice="true"></my-header>
		<img src="../../../../../../../static/images/find/notice.png" class="hor">
		<span style="color: #999999;">暂无游戏通知</span>
		<button class="hor" @click="$router.go(-1)">返回首页</button>
	</div>
</template>
<style scoped>
	.notice img{width: 6.15rem;margin-top: 8.85rem;margin-bottom: 0.5rem;}
	.notice button{width: 4.15rem;height: 2.0rem;border-radius:0.15rem;margin-top: 0.5rem; color: white;display: block; background-color: #56d176;}
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