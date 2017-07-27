<template>
	<div class="find_box" style="padding-bottom: 2.25rem;">
		<my-header :find='true'></my-header>
		<my-welfare></my-welfare>
		<my-recommend @success_callback='success_callback'></my-recommend>
		<my-Specialoffer></my-specialOffer>
		<my-everybody></my-everybody>
		<my-downcount></my-downcount>
		<my-select></my-select>
		<my-nav :navindex='2'></my-nav>
		<transition :name="transitionName">
<my-mainloading v-show='showLoading'></my-mainloading>
</transition>  
	</div>
</template>
<style scoped></style>
<script type="text/babel">
import header from '../../components/common/header'
import nav from '../../components/common/nav'
import welfare from '../../components/find/welfare'
import recommend from '../../components/find/recommend'
import special_offer from '../../components/find/special_offer'
import everybody from '../../components/find/everybody'
import down_count from '../../components/find/down_count'
import select from '../../components/find/select'
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
		myWelfare:welfare,
		myNav:nav,
		myRecommend:recommend,
		mySpecialoffer:special_offer,
		myEverybody:everybody,
		myDowncount:down_count,
		mySelect:select, 
        myMainloading:main_loading 
	},
	methods:{
		success_callback:function(){
			this.showLoading = false
		}
	}
}
</script>