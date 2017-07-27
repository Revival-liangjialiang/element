<template>
	<ul class="package_box">
		<li v-for="(item,index) in data" :class="{active:index%2===0}">
			<img src="../../../../../static/images/find/package.png">
			<em class="ell">拿破仑猪扒局饭+打拧</em>
			<span class="ell">黄边港式茶餐厅(黄边店)</span>
			<strong>￥50</strong>
		</li>
	</ul>
</template>
<style scoped>
	.package_box{width: 100%;margin-top: 0.5rem;}
	.package_box li{width: 50%;height: 9.0rem;padding:0.5rem;margin-bottom: 0.5rem;text-align: left; box-sizing: border-box; background-color: white;}
	.package_box .active{border-right:0.05rem solid #e9e9e9;}
	.package_box img{width: 100%;}
	.package_box em{width: 6.75rem;margin-top: 0.15rem;margin-bottom: 0.25rem; display: inline-block;}
	.package_box span{width: 6.75rem; font-size: 0.6rem;color: #999999;}
	.package_box strong{font-weight: bold; color: red;}
</style>
<script type="text/babel">
	export default{
		data(){
			return{
				data:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
			}
		}
	}
</script>