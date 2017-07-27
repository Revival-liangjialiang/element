<template>
	<div>
		<my-header :cart="true"></my-header>
		<div class="cart" v-for="item in data">
			<p>
				<span>{{item.shop_name}}&nbsp<i class="iconfont">&#xe60d;</i></span>
				<i class="iconfont" style="float: right;color: #999999;" @click="delete_cart(item.commodity_id)">&#xe645;</i>
			</p>
			<div class="cart_child2">
				<img :src="imgurls+item.img_url" class="ver">
				<p class="ver">
					<em>{{item.title}}</em>
					<span style="font-size: 0.6rem; position: absolute;left: 0.5rem;bottom: 0.0rem;color: #999999;">x{{item.commodity_count}}</span>
					<strong style="position: absolute;right: 0.0rem;bottom: 0.0rem;color: red;">￥36.5</strong>
				</p>
			</div>
		</div>
			<div class="cart_child3">
				<span style="font-size: 0.6rem; color: #999999;">已享受满减，优惠<em>15</em>元</span>
				<p>
					<span>合计</span>
					<em>￥{{price}}</em>
					<button>去结算</button>
				</p>
			</div>
	<transition :name="transitionName">
<my-mainloading v-show='showLoading'></my-mainloading>
</transition> 
	</div>
</template>
<style scoped>
	.cart{width: 100%;text-align: left;margin-bottom: 0.5rem; background-color: white;}
	.cart>p{width: 100%;height: 2.05rem;line-height: 2.05rem;padding-left: 0.5rem;padding-right: 0.5rem;  border-bottom: 0.05rem solid #e9e9e9;}
	.cart i{font-size: 0.6rem; color: #333333;}
	.cart_child2{width: 100%;height: 3.2rem;padding-left: 0.5rem;padding-right: 0.5rem;}
	.cart_child2 img{width: 2.1rem;height: 2.1rem; display: inline-block}
	.cart_child2 p{width: 12.7rem; height: 2.05rem;padding-left: 0.5rem; display: inline-block;vertical-align: top;}
	.cart_child3{width: 100%;height: 2.05rem;padding-left: 0.5rem;padding-right: 0.5rem;text-align: left; line-height: 2.05rem;border-top: 0.05rem solid #e9e9e9;border-bottom: 0.05rem solid #e9e9e9; background-color: white;}
	.cart_child3 p{float: right}
	.cart_child3 em{color: red;}
	.cart_child3 button{width: 2.5rem;height: 1.5rem;font-size: 0.6rem;border-radius: 0.25rem;margin-left: 0.25rem; color: white; background-color: #58d178;}
</style>
<script type="text/babel">
import main_loading from '@/components/common/main_loading'
import header from '@/components/common/header'
import {imgurls} from '@/config/address'
import {getData} from '@/config/common'
	export default{
		data(){
			return{
				data:[],
				imgurls:imgurls,
				price:0,
				showLoading:true,
				transitionName:'slide-left'
			}
		},
		created:function(){
			this.$http({
				method:'get',
				url:'get_cart.php',
				params:{
					user_id:getData().user_id
				}
			}).then((res)=>{
				this.showLoading = false
				this.data = res.data
				this.calculate_price()
			},(err)=>{

			})
		},
		components:{
			myHeader:header,
			myMainloading:main_loading
		},
		methods:{
			calculate_price:function(){
				for(var a = 0;a<this.data.length;a++){
					this.price+=this.data[a].commodity_count*36.5
				}
			},
			delete_cart:function(id){
				this.showLoading = true
				this.$http({
					method:'get',
					url:'delete_cart.php',
					params:{
						user_id:getData().user_id,
						commodity_id:id
					}
				}).then((res)=>{
					if(res.data.state===1){
						this.data = res.data.content
						this.showLoading = false
					}
				},(err)=>{
					console.log('err at cart.vue err = '+err)
				})
			}
		}
	}
</script>