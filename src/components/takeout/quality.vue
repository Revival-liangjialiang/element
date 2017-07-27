<template>
	<div class="quality_box">
		<div class="quality_child1">
			<div class="quality_child1_text">
				<span>- 品质优选 -</span>
				<p>更多<i class="iconfont quality_child1_text_i">&#xe623;</i></p>
			</div>
		</div>
		<div class="quality_child2">
		<ul class="quality_child2_ul">
			<li v-for='item in data' :key='item.id' @click='jump("/quality")'>
				<img :src="imgurls+item.url">
				<span>{{item.title}}</span>
				<p :class='{red:"热销好店" === item.label,blue:"大牌精选" === item.label}'>{{item.label}}</p>
			</li>
		</ul>
		</div>
	</div>
</template>
<style scoped>
	.quality_box{width: 100%;height: 13.0rem; margin-top: 0.5rem;background-color: white;}
	.quality_child1{width: 100%;height: 2.0rem;padding-top: 0.7rem; }
	.quality_child2{width: 100%;height: 10.95rem;text-align: center;}
	.quality_child2 ul{width: 14.6rem;height: 10.95rem;margin-left: -0.94rem; display: inline-block; }
	.quality_child1_text{width: 100%;height: 0.7rem; position: relative;}
	.quality_child1_text span{font-size: 0.7rem;line-height: 0.7rem; color: #333333;}
	.quality_child1_text p{height: 0.5rem; bottom: 0.1rem; right: 0.0rem;font-size: 0.5rem; line-height: 0.7rem; position: absolute;}
	.quality_child1_text_i{ font-size: 0.5rem;margin-right: 0.5rem; color: #333333;}
	.quality_child2_ul li{width: 2.7rem;height: 5.475rem;margin-left: 0.94rem;}
	.quality_child2_ul img{width: 100%;height: 2.7rem; border-radius: 0.15rem;} 
	.quality_child2_ul span{width: 2.25rem; margin-top: 0.2rem; font-size: 0.5rem;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
	.quality_child2_ul p{margin-top: 0.2rem;border-radius: 0.35rem;padding: 0.1rem; font-size: 0.40rem;}
	.quality_child2_ul .red{border:0.03rem solid red;color: red;}
	.quality_child2_ul .blue{border:0.03rem solid #66D9EF;color: #66D9EF;}
</style>
<script type="text/babel">
import {imgurls} from '@/config/address'
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
        	url:'quality.php'
        }).then((response) => {
        	console.log('品质优选 = '+response)
		this.data = response.data
		this.request_success()
        },(response) => {
        	console.log('品质优选error = '+response)
        })
		},
		methods:{
			jump(path){
				this.$router.push(path)
			},
			request_success:function(){
				console.log('ok')
				this.$emit('request_success')
			}
		}
	}
</script>