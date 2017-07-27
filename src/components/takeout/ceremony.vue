
<template>
	<ul class="cer_box" v-if='data'>
		<li v-for='(item,index) in data' :key='item.id'>
			<div class="cer_box_left">
				<span>{{item.title}}</span>
				<p>{{item.label}}</p>
			</div>
			<img :src="imgs[index]">
		</li>
	</ul>
</template>
<style scoped>
	.cer_box{width: 100%;height: 3.4rem;margin-top: 0.5rem;}
	.cer_box li{width: 50%;height: 3.4rem;text-align: left;background-color: white;}
	.cer_box_left{width: auto;height: 1.5rem;top: 50%;margin-top: -0.75rem;padding-left: 0.6rem;display: inline-block; text-align: left;}
	.cer_box_left span{font-size: 0.65rem;color: #333333;}
	.cer_box_left p{font-size: 0.5rem;color: #999999;}
	.cer_box img{width: 3.0rem;height: 3.0rem;right: 0.25rem;top: 0.2rem; position: absolute;}
</style>
<script type="babel">
	export default{
		created:function(){
			this.$http({
				method:'GET',
				url:'cer.php'
			}).then((res) => {
				if(res.data!==''){
					this.data = res.data
				}
			},(err) => {
				console.log('error at cermony.vue')
			})
		},
		data(){
			return{
				data:[],
				imgs:[require('../../../static/images/takeout/c_03.png'),require('../../../static/images/takeout/c_05.png')]
			}
		}
	}
</script>