<template>
	<div class="my">
		<my-header :redmy="true"></my-header>
		<span class="hv" style="color: #999999;">暂无游戏</span>
	</div>
</template>
<style scoped>
	.my{width: 100%;height: 100vh;}
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