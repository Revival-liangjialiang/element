<template>
	<div>
		<my-header :full_order='true'></my-header>
		<ul class="full_order">
			<li v-for="(item,index) in data" :class="{active:current===item||(index===0&&current===null)}" @click="change(item,item.path)">{{item.title}}</li>
		</ul>
		<router-view></router-view>
	</div>
</template>
<style scoped>
	.full_order{width: 100%;height: 1.85rem;border-bottom: 0.05rem solid #f5f5f5; background-color: white;}
	.full_order li{width: 50%;height: 1.85rem;line-height: 1.85rem; box-sizing: border-box;}
	.full_order .active{border-bottom: 0.1rem solid #2395ff;color: #2395ff;}
</style>
<script type="text/babel">
import header from '@/components/common/header'
	export default{
		data(){
			return{
				current:null,
				data:[{title:'外卖',path:'/full_order'},{title:'早餐',path:'/full_order/breakfast'}]
			}
		},
		components:{
			myHeader:header
		},
		methods:{
			change:function(item,path){
				this.current = item
				this.$router.push(path)
			}
		}
	}
</script>