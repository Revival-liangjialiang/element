<template>
	<div>
	<my-header :shoplist='true'></my-header>
	<my-nav></my-nav>
	</div>
</template>
<style scoped>
</style>
<script type="text/babel">
import header from '@/components/common/header'
import nav from '@/components/takeout/child/shop_list/nav'
	export default{
		data(){
			return{
			
			}
		},
		components:{
					myHeader:header,
					myNav:nav
				}
	}
</script>
