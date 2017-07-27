<template>
	<div class="delicious">
		<my-header :delicious='true'></my-header>
		<img src="../../../../../static/images/find/delicious1.png">
		<div style="width: 100%;height: 1.25rem;">
		<img src="../../../../../static/images/find/delicious2.png">
		<span style="width: 100%;height: 100%;top: 0.0rem;left: 0.0rem; position: absolute;" :class='{press:bv1}' @touchstart='press' @touchend='bounce("/well")'></span>
		</div>
		<img src="../../../../../static/images/find/delicious3.png">
		<img src="../../../../../static/images/find/delicious4.png">
		<img src="../../../../../static/images/find/delicious5.png">
		<img src="../../../../../static/images/find/delicious6.png">
		<div style="width: 100%;height: 1.4rem;">
		<img src="../../../../../static/images/find/delicious7.png">
		<span style="width: 100%;height: 100%;top: 0.0rem;left: 0.0rem; position: absolute;" :class='{press:bv1}' @touchstart='press' @touchend='bounce("/well")'></span>
		</div>
		<img src="../../../../../static/images/find/delicious8.png">
		<transition :name="transitionName">
<my-mainloading v-show='showLoading'></my-mainloading>
</transition>  
	</div>
</template>
<style scoped>
	.delicious img{width: 100%;}
	.press{background-color: rgba(0,0,0,0.3);}
</style>
<script type="text/babel">
import main_loading from '@/components/common/main_loading'
import header from '@/components/common/header'
	export default{
		data(){
			return{
				bv1:false,
				 showLoading:true,
        transitionName: 'slide-left'
			}
		},
		components:{
			myHeader:header,
			myMainloading:main_loading 
		},
        mounted:function(){
            setTimeout(()=>{
                this.showLoading = false
            },1000)
        },
		methods:{
			press:function(){
				this.bv1 = true
			},
			bounce:function(path){
				this.bv1 = false
				this.$router.push(path)
			}
		}
	}
</script>