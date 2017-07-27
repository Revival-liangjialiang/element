<template>
	<div class="setting">
		<my-header :setting='true'></my-header>
		<p style="margin-top: 0.25rem;" @touchstart='start_change("1")' @touchend='end_change("1")' id="1" @click="getData?$router.push('/security'):$router.push('/login')">账户与安全</p>
		<p style="margin-bottom: 0.5rem;border-top: none;" @touchstart='start_change("2")' @touchend='end_change("2")' id="2">通用</p>
		<p style="margin-bottom: 0.5rem;" @touchstart='start_change("3")' @touchend='end_change("3")' id="3">关于饿了么</p>
		<p style="text-align: center;font-size: 0.8rem; color: red;" @touchstart='start_change("4")' @touchend='end_change("4")' id="4" @click='getSessionStorage.data = "0";$router.push("/login")'>退出登录</p>
	</div>
</template>
<style scoped>
	.setting p{width: 100%;height: 2.15rem;padding-left: 0.5rem;line-height: 2.15rem;border-bottom: 0.05rem solid #e9e9e9;border-top: 0.05rem solid #e9e9e9; text-align: left; background-color: white;}
	:target{background-color: red !important;}
</style>
<script type="text/babel">
import header from '@/components/common/header'
import {getData,getSessionStorage} from '@/config/common'
	export default{
		data(){
			return{
				getSessionStorage:getSessionStorage(),
				getData:getData()
			}
		},
		components:{
			myHeader:header
		},
		mounted:function(){
			
		},
		methods:{
			start_change:function(id){
				document.getElementById(id).style.backgroundColor = 'rgba(0,0,0,0.1)'
				document.getElementById(id).style.color = 'white'
			},
			end_change:function(id){
				document.getElementById(id).style.backgroundColor = 'white'
				if(id!=='4'){
				document.getElementById(id).style.color = '#333333'
				}else{
				document.getElementById(id).style.color = 'red'	
				}
			}
		}
	}
</script>