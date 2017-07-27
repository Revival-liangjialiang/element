<template>
	<div>
	<my-header :food_recommend='true'></my-header>
	<my-leftmove></my-leftmove>
	<router-view></router-view>
	<transition :name="transitionName">
<my-mainloading v-show='showLoading'></my-mainloading>
</transition>  
	</div>
</template>
<style scoped>
</style>
<script type="text/babel">
import header from '@/components/common/header'
import left_move from '@/components/find/child/food_recommend/left_move'
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
			myLeftmove:left_move,
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