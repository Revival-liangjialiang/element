<template>
	<div class="like_box">
		<img src="../../../static/images/order/like1.png">
		<ul class="like_box_ul">
			<li v-for='item in data' @click="$router.push('/shop')">
				<img :src="imgurls+item.imgurl">
				<p class="like_box_ul_text1">
					<span>{{item.title}}</span>
				</p>
				<p class="like_box_ul_text2">
					<span>月售{{item.count}}份</span>
					<span>{{item.praise}}</span>
				</p>
				<p class="like_box_ul_text3">
					<span>￥</span>
					<em>{{item.price}}</em>
					<span>{{item.reduce}}</span>
				</p>
				<p class="like_box_ul_text4">
					<i class="iconfont">&#xe688;</i>
					<span>{{item.name}}</span>
					<em>
						<i class="iconfont">&#xe628;</i>
					</em>
				</p>
			</li>
		</ul>
		<div class="clearfix bottom">----------&nbsp&nbsp木有更多啦 亲！&nbsp&nbsp----------</div>
	</div>
</template>
<style scoped>
	.like_box{margin-top: 0.5rem;background-color: white;}
	.like_box>img{width: 100%;height: 2.25rem;}
	.like_box_ul p{padding-left: 0.55rem;text-align: left;}
	.like_box_ul li{width: 7.5rem;height: 12.3rem;margin-left: 0.32rem;margin-bottom: 0.32rem; border: 0.05rem solid #f9f9f9;overflow: hidden; }
	.like_box_ul img{width: 7.5rem;height: 7.5rem;}
	.bottom{width: 100%;height: 3rem;padding-top: 0.5rem; font-size: 0.5rem;color: #999999; background-color: white;}
	.like_box_ul_text1{margin-top: 0.4rem;margin-bottom: 0.25rem;}
	.like_box_ul_text2{margin-bottom: 0.20rem;}
	.like_box_ul_text3{margin-bottom: 0.4rem;}
	.like_box_ul_text1 span{width: 5.85rem; font-size: 0.65rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap; color: black;}
	.like_box_ul_text2 span{font-size: 0.55rem; color: #333333;}
	.like_box_ul_text3>span:nth-child(1){font-size: 0.4rem;margin-right: -0.15rem; vertical-align: bottom; color: #ff4800;}
	.like_box_ul_text3>em{font-size: 0.7rem;vertical-align: bottom; color: #ff4800;}
	.like_box_ul_text3>span:nth-child(3){height: 0.75rem;border: 0.05rem solid red;padding-left: 0.03rem;padding-right: 0.03rem; border-radius: 0.05rem; font-size: 0.5rem;vertical-align: bottom; color: red;}
	.like_box_ul_text4 i{font-size: 0.6rem;vertical-align: baseline;  height: 0.6rem; color: #999999;}
		.like_box_ul_text4 span{width: 4.25rem; font-size: 0.5rem;height: 0.5rem;line-height: 0.5rem; vertical-align: middle;border-right:0.1rem solid #f9f9f9;padding-right: 0.15rem; text-overflow: ellipsis;white-space: nowrap;overflow: hidden; color: #999999;}
		.like_box_ul_text4>em>i{width: 1.6rem;text-align: center; vertical-align: middle;}
</style>
<script type="text/babel">
import {imgurls} from '../../config/address'
	export default{
		data(){
			return{
				imgurls:imgurls,
				data:[]
			}
		},
		created:function(){
			this.$http({
				method:'post',
				url:'like.php'
			}).then((response) => {
				this.data = response.data
			},(error) => {
				console.log('error at components/order/like.vue')
			})
		}
	}
</script>