<template>
	<ul class="shop_list">
		<li v-for="item in data" @click="$router.push('/shop')">
			<p class="shop_list_text">
				<img src="../../../../../static/images/takeout/header.png">
				<em>周承凉皮（鹤龙店）</em>
				<span>￥20起送&nbsp/&nbsp配送费￥5</span>
			</p>
			<ul class="shop_list_child" v-for="(child_item,idnex) in item.child">
				<li :class="{active:idnex===0}">
				<img src="../../../../../static/images/find/food.png">
				<em>酸辣粉</em>
				<span>￥12</span>
				<button class="hor" @click="$router.push('/shop')">去看看</button>
				</li>
			</ul>
		</li>
	</ul>
</template>
<style scoped>
	.shop_list{width: 100%;height: auto;margin-top: 0.5rem; padding-left: 0.5rem;padding-right: 0.5rem;}
	.shop_list>li{width: 100%;height: 10.6rem;padding-top: 0.5rem;padding-left: 0.5rem;padding-right: 0.5rem; border-radius: 0.5rem; margin-bottom: 0.5rem; background-color: white;}
	.shop_list_text{ text-align: left;}
	.shop_list_text img{width: 1.05rem;height: 1.05rem;margin-right: 0.25rem; display: inline-block;vertical-align: bottom; border-radius: 50%;}
	.shop_list_text span{font-size: 0.6rem;bottom: 0.0rem; right: 0rem;position: absolute; vertical-align: bottom; color: #999999;}
	.shop_list_text>em{font-size: 0.65rem;font-weight: bold; color: black;}
	.shop_list_child{text-align: left; margin-top: 0.5rem;}
	.shop_list_child li{width: 4.5rem;height: 8.15rem;margin-left: 0.25rem;}
	.shop_list_child .active{margin-left:0.0rem;}
	.shop_list_child img{width: 100%;margin-bottom: 0.1rem;}
	.shop_list_child em{font-size: 0.6rem;color: black;}
	.shop_list_child span{font-size: 0.6rem;margin-top: 0.2rem;margin-bottom: 0.2rem; display: block;color: red;}
	.shop_list_child button{width: 95%;height: 1.2rem;font-size: 0.6rem;color: red;border: 0.05rem solid red;border-radius: 0.15rem;}
</style>
<script type="text/babel">
	export default{
		data(){
			return{
				data:[{title:'item1',child:[{title:'child1'},{title:'child2'},{title:'child3'}]},{title:'item2',child:[{title:'child1'},{title:'child2'},{title:'child3'}]},{title:'item3',child:[{title:'child1'},{title:'child2'},{title:'child3'}]}]
			}
		}
	}
</script>