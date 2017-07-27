<template>
	<div class="everybody_box">
		<img src="../../../static/images/find/every.png">
		<div class="everybody_box_child2">
			<div class="everybody_box_user">
				<img src="../../../static/images/find/findthree_07.png">
				<div>
					<span>匿名用户</span>
					<strong>三天前吃过</strong>
					<em>不错哦，味道，速度也挺快的</em>
				</div>
			</div>
		</div>
		<div class="everybody_box_child3">
			<div class="everybody_box_child3_top">
				<p>
					<i class="iconfont">&#xe688;</i>
					<span>喜引力避风糖</span>
					<strong>评价4.9分/月售400单</strong>
				</p>
				<img v-if='data.length' :src="imgurls+data[0].imgurl">
			</div>
			<div class="everybody_box_child3_bottom">
				<p>
					<span>实付</span>
					<strong>￥17.76</strong>
					<button>跟一单</button>
				</p>
			</div>
		</div>
		<span>查看跟多></span>
	</div>
</template>
<style scoped>
	.everybody_box{width: 100%;height: 16.65rem;overflow: hidden; background-color: white;}
	.everybody_box img{width: 100%;height: 3.0rem;}
	.everybody_box_child2{width: 100%;height: 3.1rem;padding-top: 0.45rem;}
	.everybody_box_user{text-align: left;}
	.everybody_box_user img{width: 1.35rem;height: 1.35rem;display: inline-block;vertical-align: top; margin-left: 0.65rem;margin-right: 0.6rem; border-radius: 50%;}
	.everybody_box_user span{font-size: 0.5rem;color: black;}
	.everybody_box_user strong{font-size: 0.45rem;display: block; color: #999999;}
	.everybody_box_user em{font-size: 0.5rem;color: #333333;}
	.everybody_box_user div{text-align: left; display: inline-block;}
	.everybody_box_child3{width: 13.2rem;height: 8.1rem;margin-left: 2.3rem; background-color: #f3f3f3;}
	.everybody_box_child3_top p{height: 1rem;}
	.everybody_box_child3_top{width: 100%;height: 5.75rem;padding-left: 0.35rem;text-align: left; background-color: #f9f9f9;}
	.everybody_box_child3_bottom{width: 100%;height: 2.25rem;bottom: 0.0rem;padding-left: 0.35rem;padding-top: 0.55rem;text-align: left; position: absolute; background-color: #fcfcfc;}
	.everybody_box_child3_top i{font-size: 0.45rem; color: #333333;}
	.everybody_box_child3_top span{font-size: 0.45rem; color: #333333;}
	.everybody_box_child3_top strong{margin-top: 0.15rem;display: inline-block; float: right; font-size: 0.45rem; color: #999999;}
	.everybody_box_child3_top img{width: 4.05rem;height: 4.05rem;}
	.everybody_box_child3_bottom span{font-size: 0.6rem;color: #333333;}
	.everybody_box_child3_bottom strong{font-size: 0.7rem;color: #ff6102;}
	.everybody_box_child3_bottom button{width: 3.35rem;height: 1.35rem;right: 1.05rem;border: 1px solid #7fbaf0;border-radius: 0.15rem; font-size: 0.7rem;position: absolute; color: #7fbaf0;}
	.everybody_box>span{font-size: 0.55rem;margin-top: 0.25rem; color: #999999}
</style>
<script type="text/babel">
import {imgurls} from '../../config/address'
	export default{
		data(){
			return{
				data:[],
				imgurls:imgurls
			}
		},
		created:function(){
			this.$http({
				method:'post',
				url:'every.php'
			}).then((response) => {
				this.data = response.data
			},(error) => {
				console.log('error at components/find/everybody.vue')
			})
		}
	}
</script>
