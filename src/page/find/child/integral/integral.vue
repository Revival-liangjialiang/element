<template>
	<div>
		<my-header :integral='true'></my-header>
		<yd-slider autoplay="3000">
        <yd-slider-item>
            <a href="http://www.ydcss.com">
                <img src="http://localhost/element/img/integral1.png">
            </a>
        </yd-slider-item>
        <yd-slider-item>
            <a href="http://www.ydcss.com">
                <img src="http://localhost/element/img/integral1.png">
            </a>
        </yd-slider-item>
        <yd-slider-item>
            <a href="http://www.ydcss.com">
                <img src="http://localhost/element/img/integral1.png">
            </a>
        </yd-slider-item>
    </yd-slider>
    <ul class="min_nav">
    	<li>
    	<img src="../../../../../static/images/find/integral2.png">
    	积分
    	<em>0</em>
    	</li>
    	<li>
    	<img src="../../../../../static/images/find/integral3.png">
    	兑换记录
    	</li>
    </ul>
    <div class="max_nav">
    	<ul class="max_nav_ul">
    		<li>
    			<img src="../../../../../static/images/find/integral4.png">
    			<span>0元兑换</span>
    		</li>
    		<li>
    			<img src="../../../../../static/images/find/integral5.png">
    			<span>优惠礼券</span>
    		</li>
    		<li>
    			<img src="../../../../../static/images/find/integral6.png">
    			<span>今日新品</span>
    		</li>
    		<li>
    			<img src="../../../../../static/images/find/integral7.png">
    			<span>所有商品</span>
    		</li>
    		<li>
    			<img src="../../../../../static/images/find/integral8.png">
    			<span>食品饮料</span>
    		</li>
    		<li>
    			<img src="../../../../../static/images/find/integral9.png">
    			<span>数码家电</span>
    		</li>
    		<li>
    			<img src="../../../../../static/images/find/integral10.png">
    			<span>日常家居</span>
    		</li>
    		<li>
    			<img src="../../../../../static/images/find/integral11.png">
    			<span>个护美妆</span>
    		</li>
    	</ul>
    </div>
    <div class="commodity">
    	<div class="commodity_left">
    		<p>
    		<strong>"0"元购</strong>
    		<span>千兆无线路由</span>
    		</p>
    		<img src="../../../../../static/images/find/integral12.png">
    	</div>
    	<div class="commodity_right">
    		<div class="commodity_right_top">
    			<p>
    		<strong>数码前沿</strong>
    		<span>3c精选</span>
    		</p>
    		<img src="../../../../../static/images/find/integral13.png">
    		</div>
    		<div class="commodity_right_bottom">
    			<p>
    		<strong>限时新品</strong>
    		<span>OPPO R11</span>
    		</p>
    		<img src="../../../../../static/images/find/integral14.png">
    		</div>
    	</div>
    </div>
    <ul class="integral_list">
    	<li>
    		<p>PPTV会员免费送</p>
    		<p>599<em>&nbsp积分</em></p>
    		<img src="../../../../../static/images/find/integral15.png">
    	</li>
    	<li>
    		<p>黑胶折叠三折小黑伞</p>
    		<p>599<em>&nbsp积分</em></p>
    		<img src="../../../../../static/images/find/integral16.png">
    	</li>
    	<li>
    		<p>PPTV会员免费送</p>
    		<p>599<em>&nbsp积分</em></p>
    		<img src="../../../../../static/images/find/integral15.png">
    	</li>
    	<li>
    		<p>黑胶折叠三折小黑伞</p>
    		<p>599<em>&nbsp积分</em></p>
    		<img src="../../../../../static/images/find/integral16.png">
    	</li>
    	<li>
    		<p>PPTV会员免费送</p>
    		<p>599<em>&nbsp积分</em></p>
    		<img src="../../../../../static/images/find/integral15.png">
    	</li>
    	<li>
    		<p>黑胶折叠三折小黑伞</p>
    		<p>599<em>&nbsp积分</em></p>
    		<img src="../../../../../static/images/find/integral16.png">
    	</li>
    	<li>
    		<p>PPTV会员免费送</p>
    		<p>599<em>&nbsp积分</em></p>
    		<img src="../../../../../static/images/find/integral15.png">
    	</li>
    	<li>
    		<p>黑胶折叠三折小黑伞</p>
    		<p>599<em>&nbsp积分</em></p>
    		<img src="../../../../../static/images/find/integral16.png">
    	</li>
    </ul>
        <transition :name="transitionName">
<my-mainloading v-show='showLoading'></my-mainloading>
</transition>  
	</div>
	       
</template>
<style>
	.slider-pagination-item-active{background-color: white !important;}
	.min_nav{width: 16.0rem;height: 1.9rem;background-color: white;}
	.min_nav li{width: 8.0rem;height: 1.9rem;line-height: 1.9rem; position: relative;}
	.min_nav img{width: 0.75rem;height: 0.75rem;top: -0.07rem;position: relative; vertical-align: middle; display: inline-block;}
	.min_nav em{color: red;}
	.max_nav{width: 100%;height: 7.4rem;margin-top: 0.5rem;margin-bottom: 0.5rem; background-color: white;}
	.max_nav_ul{width: 100%;height: 100%;margin-left: -0.47rem;}
	.max_nav_ul li{width: 2.5rem;height: 50%;margin-left: 1.4rem;padding-top: 0.32rem;text-align: center;}
	.max_nav_ul img{width: 2.0rem;height: 2.0rem;display: inline-block;}
	.max_nav_ul span{font-size: 0.5rem;}
	.commodity{width: 100%;height: 5.4rem;background-color: white;}
	.commodity>div{width: 8.0rem;height: 100%;border-right: 0.05rem solid #f5f5f5;float: left; box-sizing: border-box;}
	.commodity_right>div{width: 100%;height: 50%;box-sizing: border-box;}
	.commodity_right_top{border-bottom: 0.05rem solid #f5f5f5;}
	.commodity p{text-align: left; top: 0.25rem; left: 0.25rem; position: absolute;}
	.commodity strong{display: block;}
	.commodity span{font-size: 0.6rem;color: #999999;}
	.commodity_left img{top: 0.85rem;right: 0.3rem; position: absolute;}
	.commodity_right img{width: 2.5rem;height: 2.5rem;top: 0.15rem; right: 0.5rem;position: absolute;}
	.integral_list{margin-top: 0.5rem;}
	.integral_list li{width: 50%;height: 7.35rem; border-right: 0.05rem solid #f5f5f5;border-bottom: 0.05rem solid #f5f5f5;padding: 0.6rem; box-sizing: border-box;background-color: white;}
	.integral_list p{font-size: 0.75rem;text-align: left;}
	.integral_list em{font-size: 0.6rem;color: red;}
	.integral_list img{width: 100%;}
</style>
<script type="text/babel">
import header from '@/components/common/header'
import main_loading from '@/components/common/main_loading'
	export default{
		data(){
			return{
                showLoading:true,
        transitionName: 'slide-left'
			}
		},
		components:{
			myHeader:header,
            myMainloading:main_loading 
		},
        mounted:function(){
            document.body.scrollTop = 0
            setTimeout(()=>{
                console.log("nonono")
                this.showLoading = false
            },1000)
        }
	}
</script>