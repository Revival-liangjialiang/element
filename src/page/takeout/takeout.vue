<template>
<div>
<my-header></my-header>
<my-bnner></my-bnner>
<my-quality @request_success="showLoading = false"></my-quality>
<my-ceremony></my-ceremony>
<my-recommend></my-recommend>
<my-nav :navindex='1'></my-nav>
<transition :name="transitionName">
<my-mainloading v-show='showLoading'></my-mainloading>
</transition>  
</div>
</template>
<style type="text/css">
</style>
<script type="text/babel">
import my_header from '../../components/takeout/header'
import my_bnner from '../../components/takeout/bnner'
import my_four from '../../components/takeout/four'
import my_quality from '../../components/takeout/quality'
import my_ceremony from '../../components/takeout/ceremony'
import my_recommend from '../../components/takeout/recommend'
import my_nav from '../../components/common/nav'
import main_loading from '@/components/common/main_loading'
    export default {
        data(){
            return{
                showLoading:true,
                transitionName: 'slide-left' 
            }
        },
        components:{
            myHeader:my_header,
            myBnner:my_bnner,
            myFour:my_four,
            myQuality:my_quality,
            myCeremony:my_ceremony,
            myRecommend:my_recommend,
            myNav:my_nav,
            myMainloading:main_loading
        },
        mounted:function(){
            document.body.scrollTop = 0
        }
    }
</script>