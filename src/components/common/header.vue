<template>
	<div class="header_box">
		<div class="header_box_child">
			<i class="iconfont shoplist_icon" v-if='shoplist||full_order' @click='back'>&#xe622;</i>
			<i class="iconfont shoplist_icon" v-if='select_address||new_address||shop||message||setting||security|modify_username||setting_password||login||register||cart' @click='back'>&#xe622;</i>
			<i class="iconfont shoplist_seach_icon" v-if='shoplist'>&#xe60a;</i>
			<span v-if='shoplist'>美食</span>
			<span v-if='select_address'>选择收货地址</span>
			<span v-if='new_address'>新增地址</span>
			<span v-if='find'>发现</span>
			<span v-if='order'>订单</span>
			<span v-if='my'>我的</span>
			<span v-if='cart'>购物车</span>
			<span v-if='message'>消息中心</span>
			<span v-if='setting'>设置</span>
			<span v-if='security'>账户与安全</span>
			<span v-if='modify_username'>用户名</span>
			<span v-if='setting_password'>设置密码</span>
			<span v-if='login'>登录</span>
			<span v-if='register'>注册</span>
			<span v-if='time_limit'></span>
			<span v-if='integral||delicious||well||recommend||red||notice||package||classification||redmy||activity||payment||food_recommend||time_limit||select||welfare||breakfast' @click='back'>X</span>
			<span v-if='integral'>&nbsp&nbsp&nbsp积分兑换</span>
			<span v-if='delicious'>&nbsp&nbsp&nbsp名厨亮社</span>
			<span v-if='well'>&nbsp&nbsp&nbsp叫外卖上饿了么-饿了么</span>
			<span v-if='recommend'>&nbsp&nbsp&nbsp推荐有奖</span>
			<span v-if='red'>&nbsp&nbsp&nbsp饿了么游戏中心</span>
			<span v-if='activity'>&nbsp&nbsp&nbsp一元霸王餐</span>
			<span v-if='notice'>&nbsp&nbsp&nbsp通知中心</span>
			<span v-if='package'>&nbsp&nbsp&nbsp游戏礼包</span>
			<span v-if='classification'>&nbsp&nbsp&nbsp游戏分类</span>
			<span v-if='redmy'>&nbsp&nbsp&nbsp我的游戏</span>
			<span v-if='payment'>&nbsp&nbsp&nbsp在线支付</span>
			<span v-if='food_recommend'>&nbsp&nbsp&nbsp美食推荐</span>
			<span v-if='time_limit'>&nbsp&nbsp&nbsp iPhone&nbsp7&nbsp32G</span>
			<span v-if='select'>&nbsp&nbsp&nbsp精选好货</span>
			<span v-if='welfare'>&nbsp&nbsp&nbsp粉丝福利购</span>
			<span v-if='breakfast'>&nbsp&nbsp&nbsp饿了么早餐</span>
			<span v-if='full_order'>&nbsp全部订单</span>
			<i class="iconfont header_box_child_notice" v-if='my' @click="$router.push('/message')">&#xe685;</i>
			<i class="iconfont header_box_child_notice" v-if='shop'>&#xe61e;</i>
			<i class="iconfont header_box_child_setting" v-if='my' @click="$router.push('/setting')">&#xe687;</i>
			<i class="iconfont header_box_child_setting" v-if='shop'>&#xe68b;</i>
			<em v-if='order' @click="$router.push('/breakfast')">早餐</em>
			<em v-if='select_address' @click='getData() ? $router.push("/login") : jump()'>新增地址</em>
			<em v-if='activity' @click="share">分享</em>
		</div>
	</div>
</template>
<style scoped>
	.header_box{width: 100%;height: 2.5rem;background-color: #2395ff;}
	.header_box_child{width: 100%;height: 0.85rem;top: 0.8rem;padding-left: 0.7rem;padding-right: 0.7rem;text-align: left;}
	.header_box_child span{font-size: 0.77rem;line-height: 0.77rem;font-weight: 550; color: white;}
	.header_box_child_notice,.header_box_child_setting{font-size: 0.85rem;right: 2.35rem;position: absolute;}
	.header_box_child_setting{font-size: 0.93rem; right: 0.7rem;}
	.header_box_child em{font-size: 0.67rem;padding-top: 0.15rem; line-height: 0.67rem;font-weight: 550; font-style: normal; float: right; color: white;}
	.shoplist_icon{margin-right: 0.5rem}
	.shoplist_seach_icon{height: 0.7rem; float: right;}
</style>
<script type="text/babel">
import {getData} from '@/config/common'
	export default{
		data(){
			return{
				
			}
		},
		props:{
			find:{
				type:Boolean,
				default:false
			},
			notice:{
				type:Boolean,
				default:false
			},
			setting:{
				type:Boolean,
				default:false
			},
			breakfast:{
				type:Boolean,
				default:false
			},
			order:{
				type:Boolean,
				default:false
			},
			my:{
				type:Boolean,
				default:false
			},
			shoplist:{
				type:Boolean,
				default:false
			},
			select_address:{
				type:Boolean,
				default:false
			},
			new_address:{
				type:Boolean,
				default:false
			},
			shop:{
				type:Boolean,
				default:false
			},
			integral:{
				type:Boolean,
				default:false
			},
			delicious:{
				type:Boolean,
				default:false
			},
			well:{
				type:Boolean,
				default:false
			},
			recommend:{
				type:Boolean,
				default:false
			},
			red:{
				type:Boolean,
				default:false
			},
			notice:{
				type:Boolean,
				default:false
			},
			redmy:{
				type:Boolean,
				default:false
			},
			classification:{
				type:Boolean,
				default:false
			},
			package:{
				type:Boolean,
				default:false
			},
			activity:{
				type:Boolean,
				default:false
			},
			payment:{
				type:Boolean,
				default:false
			},
			food_recommend:{
				type:Boolean,
				default:false
			},
			time_limit:{
				type:Boolean,
				default:false
			},
			select:{
				type:Boolean,
				default:false
			},
			welfare:{
				type:Boolean,
				default:false
			},
			breakfast:{
				type:Boolean,
				default:false
			},
			full_order:{
				type:Boolean,
				default:false
			},
			message:{
				type:Boolean,
				default:false
			},
			setting:{
				type:Boolean,
				default:false
			},
			security:{
				type:Boolean,
				default:false
			},
			modify_username:{
				type:Boolean,
				default:false
			},
			setting_password:{
				type:Boolean,
				default:false
			},
			login:{
				type:Boolean,
				default:false
			},
			register:{
				type:Boolean,
				default:false
			},
			cart:{
				type:Boolean,
				default:false
			}
		},
	methods:{
		back(){
			this.$router.go(-1)
		},
		jump(){
			this.$router.push('/new_address')
		},
		share:function(){
				this.$emit('share')
			},
			getData:function(){
				return getData() === 0 ? 1 : 0
			}
	}
}
</script>