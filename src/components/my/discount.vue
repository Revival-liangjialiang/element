<template>
	<ul class="discount_box">
		<li>
			<p>
				<strong class="discount_box_title1">
					0.00
					<em>元</em>
				</strong>
				<span>钱包</span>
			</p>
		</li>
		<li>
			<p>
				<strong class="discount_box_title2">
					0
					<em>个</em>
				</strong>
				<span>优惠</span>
			</p>
		</li>
		<li>
			<p>
					<strong class="discount_box_title3">
					0
					<em>分</em>
				</strong>
				<span>积分</span>
			</p>
		</li>
	</ul>
</template>
<style scoped>
	.discount_box{width: 100%;height: 3.65rem;border-bottom: 0.01rem solid #ededed; text-align: center;}
	.discount_box li{width: 33.33%;height: 100%;box-sizing: border-box; overflow: hidden;background-color: white; }
	.discount_box>li:nth-child(2){border-left: 0.01rem solid #ededed;border-right: 0.01rem solid #ededed;}
	.discount_box p{height: 1.8rem;top: 50%;margin-top: -0.9rem;font-size: 0.7rem;line-height: 0.7rem; }
	.discount_box strong{font-size: 0.8rem;display: block; color: #ffa924}
	.discount_box span{font-size: 0.55rem; color: #333333;}
	.discount_box_title1 em{font-size: 0.45rem;}
	.discount_box_title2 em{font-size: 0.45rem;}
	.discount_box_title3 em{font-size: 0.45rem;}
	.discount_box_title2{color: #ff4018 !important;}
	.discount_box_title3{color: #43b200 !important;}
</style>
<script type="text/babel">
	export default{
		data(){
			return{

			}
		}
	}
</script>