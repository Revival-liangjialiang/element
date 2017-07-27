<template>
	<div class="over">
		<img src="../../../../../static/images/find/act2.png">
		<p  class="hor">你没有参与本期活动，立即参与领取红包吧</p>
		<div class="over_banner">
			<img src="../../../../../static/images/find/act3.png">
			<p class="ver banner_child">
		<yd-rollnotice autoplay="2000" class="banner_box" :height="my_height">
        <yd-rollnotice-item>
        	<div class="banner_text">
        	<img src="../../../../../static/images/takeout/header.png" class="ver">
        	<div class="ver">
        		<p>
        			<span>13025****436</span>
        			<span style="color: #999999;">5秒前</span>
        		</p>
        		<p>
        			中奖<em style="color: red;">20</em>元
        		</p>
        	</div>
        	</div>
        </yd-rollnotice-item>
    	</yd-rollnotice>
			</p>
			<i class="iconfont over_banner_right_arrow">&#xe623;</i>
		</div>
		<div class="user_list">
			<p>
				<span>本期参与人</span>
				<em>2017-07-04&nbsp09:06:54&nbsp开始</em>
			</p>
			<ul class="user_list_ul">
				<li>
					<img src="../../../../../static/images/takeout/header.png" class="ver">
					<div>
						<p class="ver">
							<em>3***4</em>
							<span>2017-07-04&nbsp09:06:54</span>
						</p>
					</div>
				</li>
					<li>
					<img src="../../../../../static/images/takeout/header.png" class="ver">
					<div>
						<p class="ver">
							<em>3***4</em>
							<span>2017-07-04&nbsp09:06:54</span>
						</p>
					</div>
				</li>
					<li>
					<img src="../../../../../static/images/takeout/header.png" class="ver">
					<div>
						<p class="ver">
							<em>3***4</em>
							<span>2017-07-04&nbsp09:06:54</span>
						</p>
					</div>
				</li>
				<li>
					<img src="../../../../../static/images/takeout/header.png" class="ver">
					<div>
						<p class="ver">
							<em>3***4</em>
							<span>2017-07-04&nbsp09:06:54</span>
						</p>
					</div>
				</li>
				<li>
					<img src="../../../../../static/images/takeout/header.png" class="ver">
					<div>
						<p class="ver">
							<em>3***4</em>
							<span>2017-07-04&nbsp09:06:54</span>
						</p>
					</div>
				</li>
				<li>
					<img src="../../../../../static/images/takeout/header.png" class="ver">
					<div>
						<p class="ver">
							<em>3***4</em>
							<span>2017-07-04&nbsp09:06:54</span>
						</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="fixed_box shadow_top">
			<button class="hv" @click="join">立即参与</button>
		</div>
	</div>
</template>
<style scoped>
	.over{margin-bottom: 2.75rem;}
	.over>img{width: 100%;}
	.over>p{width: 15.15rem;height: 2.15rem;line-height: 2.15rem; border-radius: 0.25rem;margin-top: 0.5rem; text-align: center; color: #999999;background-color: white;}
	.over_banner{width: 100%;height: 2.85rem;margin-top:0.5rem; background-color: white;}
	.over_banner>p{width: 11.3rem;height: 1.9rem;display: inline-block;}
	.over_banner>img{width: 4.7rem;float: left;}
	.banner_child img{width: 1.4rem;height: 1.4rem;border-radius: 50%;}
	.banner_text{height: 1.9rem; }
	.banner_text p{font-size: 0.6rem; }
	.banner_text div{display: inline-block;}
	.banner_text img{display: inline-block !important;vertical-align: top;}
	.banner_text span{font-size: 0.6rem;}
	.over_banner_right_arrow{height: 0.75rem;top: 1.17rem; right: 0.5rem;overflow: hidden; position: absolute; color: #999999;}
	.fixed_box{width: 100%;height: 2.6rem;position: fixed;bottom: 0.0rem;left: 0.0rem; background-color: white;}
	.fixed_box button{width: 15.3rem;height: 1.95rem;border-radius: 0.15rem;font-size: 0.65rem; color: white;font-weight: bold; background-color: #2395ff;}
	.user_list{width: 100%;height: auto;padding-left: 0.5rem;padding-right: 0.5rem;margin-top: 0.5rem; background-color: white;}
	.user_list>p{width: 100%;height: 1.9rem;line-height: 1.9rem;border-bottom: 0.05rem solid #f5f5f5;background-color: white;}
	.user_list>p>em{font-size: 0.6rem; float: right;color: #999999;}
	.user_list_ul{width: 100%;}
	.user_list_ul li{width: 100%;height: 2.65rem;float: none;}
	.user_list_ul div{width: 12.75rem;height: 2.65rem;border-bottom: 0.05rem solid #f5f5f5;float: right; box-sizing: border-box;}
	.user_list_ul img{width: 1.35rem;height: 1.35rem;border-radius: 50%; display: inline-block;}
	.user_list_ul em{display: block;}
	.user_list_ul span{color: #999999;}
</style>
<script type="text/babel">
	export default{
		create:function(){
			
		},
		data(){
			return{
				my_height:0
			}
		},
		mounted:function(){
			setTimeout(() => {
				this.my_height = Math.round(parseInt(document.documentElement.style.fontSize) * 1.9)
			},100)
		},
		updated:function(){
		},
		methods:{
			join:function(){
				this.$emit('join')
			}
		}
	}
</script>