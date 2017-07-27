<template>
	<div style="margin-bottom: 2.7rem;">
		<my-header :my='true'></my-header>
		<my-user></my-user>
		<my-discount></my-discount>
		<my-list></my-list>
		<my-nav :navindex='4'></my-nav>
		<transition :name="transitionName">
<my-mainloading v-show='showLoading'></my-mainloading>
</transition> 
	</div>
</template>
<script type="text/babel">
import main_loading from '@/components/common/main_loading'
import header from '@/components/common/header'
import user from '@/components/my/user'
import discount from '@/components/my/discount'
import nav from '@/components/common/nav'
import list from '@/components/my/list'
	export default{
		data(){
			return{
				showLoading:true,
        transitionName: 'slide-left'
			}
		},
		components:{
				myHeader:header,
				myNav:nav,
				myUser:user,
				myDiscount:discount,
				myList:list,
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