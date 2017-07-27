<template>
	<div>
		<my-header :select_address='true'></my-header>
		<my-seach></my-seach>
		<my-bottom></my-bottom>
	</div>
</template>
<style scoped></style>
<script type="text/babel">
import header from '@/components/common/header'
import seach from '@/components/takeout/child/select_address/seach'
import bottom from '@/components/takeout/child/select_address/bottom'
export default{
	data(){
		return{

		}
	},
	components:{
		myHeader:header,
		mySeach:seach,
		myBottom:bottom
	}
}
</script>