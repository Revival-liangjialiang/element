<template>
<div>
	<ul class="list_box">
		<li @touchstart='startStyle("change1")' @touchend='endStyle("change1")' id="change1" @click='getData()?$router.push("/select_address"):$router.push("/login")'>
			<img  src="../../../static/images/my/my1.png">
			<span>收货地址</span>
		</li>
		<li class="clear_line" style="margin-bottom: 0.5rem;" @touchstart='startStyle("change2")' @touchend='endStyle("change2")' id="change2">
			<img src="../../../static/images/my/my2.png">
			<span>我的收藏</span>
		</li>
		<li @touchstart='startStyle("change3")' @touchend='endStyle("change3")' id="change3">
			<img src="../../../static/images/my/my3.png">
			<span>积分商城</span>
			<em>0元好物在这里</em>
		</li>
		<li class="clear_line" @touchstart='startStyle("change4")' @touchend='endStyle("change4")' id="change4">
			<img src="../../../static/images/my/my4.png">
			<span>饿了么会员卡</span>
			<em>未开通</em>
		</li>
		<li class="clear_line" @touchstart='startStyle("change5")' @touchend='endStyle("change5")' id="change5">
			<img src="../../../static/images/my/my5.png">
			<span>每日精选</span>
			<em>1元起秒杀</em>
		</li>
		<li class="clear_line" @touchstart='startStyle("change6")' @touchend='endStyle("change6")' id="change6">
			<img src="../../../static/images/my/my6.png">
			<span>免费流量</span>
			<em>每日最高500M</em>
		</li>
		<li style="margin-bottom: 0.5rem;margin-top:0.5rem;" @touchstart='startStyle("change7")' @touchend='endStyle("change7")' id="change7">
			<img src="../../../static/images/my/my7.png">
			<span>玩游戏领红包</span>
			<p>大红包任性领</p>
		</li>
		<li @touchstart='startStyle("change8")' @touchend='endStyle("change8")' id="change8">
			<img src="../../../static/images/my/my8.png">
			<span>服务中心</span>
		</li>
		<li class="clear_line" @touchstart='startStyle("change9")' @touchend='endStyle("change9")' id="change9">
			<img src="../../../static/images/my/my9.png">
			<span>欢迎评分</span>
		</li>
		<li class="clear_line" @touchstart='startStyle("change10")' @touchend='endStyle("change10")' id="change10">
			<img src="../../../static/images/my/my10.png">
			<span>加盟合作</span>
		</li>
	</ul>
	</div>
</template>
<style scoped>
	.list_box span{left: 2.25rem;top: 0.6rem; position: absolute;}
	.list_box{margin-top: 0.5rem;}
	.list_box li{width: 100%;height: 2.2rem;text-align: left;float: none !important; border-top: 0.05rem solid #ededed;border-bottom: 0.05rem solid #ededed; background-color: white;}
	.clear_line{border-top: none !important;}
	.list_box img{width: 1.1rem;height: 1.1rem;top: 0.55rem; margin-left: 0.55rem;position: relative;}
	.list_box em,.list_box p{font-size: 0.5rem;padding-right: 0.25rem;top: 0.8rem; right: 0.25rem; position: absolute; color: #999999;}
	.list_box p{font-size: 0.45rem !important;color: white;top: 0.6rem; border-radius: 0.1rem;padding: 0.2rem; background-color: red;}
</style>
<script type="text/babel">
import {getData} from '@/config/common'
	export default{
		data(){
			return{
				data:[{}],
				getData:getData
			}
		},
		methods:{
			startStyle:function(index){
			document.getElementById(index).style.backgroundColor='#ededed'
			},
			endStyle:function(index){
			document.getElementById(index).style.backgroundColor='white'
			}
		}
	}
</script>