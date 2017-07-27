<template>
	<div style="margin-bottom: 2.5rem;">
		<my-header :order='true'></my-header>
		<my-order></my-order>
		<my-nearby></my-nearby>
		<my-like></my-like>
		<my-nav :navindex='3'></my-nav>
		<transition :name="transitionName">
<my-mainloading v-show='showLoading'></my-mainloading>
</transition> 
	</div>
</template>
<script type="text/babel">
import main_loading from '@/components/common/main_loading'
import header from '@/components/common/header'
import order from '@/components/order/order'
import nearby from '@/components/order/nearby'
import nav from '@/components/common/nav'
import like from '@/components/order/like'
	export default{
		data(){
			return{
				showLoading:true,
        transitionName: 'slide-left'
			}
		},
		components:{
					myNav:nav,
					myOrder:order,
					myHeader:header,
					myNearby:nearby,
					myLike:like,
					myMainloading:main_loading 
				},
        mounted:function(){
            document.body.scrollTop = 0
            setTimeout(()=>{
                this.showLoading = false
            },1000)
        }
	}
</script>