<template>
	<div class="classification">
		<my-header :classification="true"></my-header>
		<ul class="classification_nav">
			<li v-for="(item,index) in imglist" :class="{active:item===current_obj||(index===0&&current_obj===null)}" @click='select(item,pathlist[index].path)'>
				<img :src="item===current_obj||(index===0&&current_obj===null)?seleimg[index].imgurl:item.imgurl" class="hor">
				<span>{{item.title}}</span>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>
<style scoped>
	.classification_nav{width: 100%;height: 3.0rem;}
	.classification_nav li{width: 25%;height: 3.0rem;padding-top: 0.5rem; box-sizing: border-box;}
	.classification_nav img{width: 1.15rem;margin-bottom: 0.15rem;}
	.classification_nav span{font-size: 0.6rem;}
	.classification_nav .active{border-bottom: 0.1rem solid #2395ff;}
	.classification_nav .active span{color: #2395ff;}
</style>
<script type="text/babel">
import header from '@/components/common/header'
	export default{
		data(){
			return{
				current_obj:null,
				imglist:[{title:'角色',imgurl:require("../../../../../../../static/images/find/cla_1.png")},{title:'策略',imgurl:require("../../../../../../../static/images/find/cla_2.png")},{title:'竞技',imgurl:require("../../../../../../../static/images/find/cla_3.png")},{title:'休闲',imgurl:require("../../../../../../../static/images/find/cla_4.png")}],
				seleimg:[{imgurl:require("../../../../../../../static/images/find/cla1.png")},{imgurl:require("../../../../../../../static/images/find/cla2.png")},{imgurl:require("../../../../../../../static/images/find/cla3.png")},{imgurl:require("../../../../../../../static/images/find/cla4.png")}],
				pathlist:[{path:'/classification/game'},{path:'/classification/game'},{path:'/classification/game'},{path:'/classification/game'}]
			}
		},
		components:{
			myHeader:header
		},
		methods:{
			select:function(item,path){
				this.current_obj = item
				this.$router.push(path)
			}
		}
	}
</script>