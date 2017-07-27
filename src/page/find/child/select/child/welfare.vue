<template>
	<div>
		<my-header :welfare='true'></my-header>
	</div>
</template>
<style scoped></style>
<script type="text/babel">
import header from '@/components/common/header'
	export default{
		data(){
			return{

			}
		},components:{
			myHeader:header
		}
	}
</script>