<template>
	<div>
		<my-header :message='true'></my-header>
		<span style="margin-top: 5.5rem;font-size: 0.6rem; color: #999999;">暂无消息</span>
	</div>
</template>
<style scoped></style>
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