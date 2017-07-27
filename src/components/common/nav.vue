<template>
	<ul class="nav_box">
		<li v-for='item in data' :key='item.id'>
			<img :src="item.imgurl" @click='changepage(item.url)'>
		</li>
	</ul>
</template>
<style scoped>
	.nav_box{width: 100%;height: 2.25rem;bottom: 0.0rem;border-top: 0.05rem solid #e9e9e9;border-top-style: inset; background-color: #F7F7F7;position: fixed;z-index: 10000;}
	.nav_box li{width: 25%;height: 2.25rem;text-align: center;}
	.nav_box img{width: 2.25rem;height: 2.25rem;display: inline-block;}

</style>
<script type="text/babel">
	export default{
		data(){
			return{
				data:[]
			}
		},
		created:function(){
			switch(this.navindex){
				case 1:
				this.data = [{imgurl:require('../../../static/images/common/nav_s1.png'),url:'/'},{imgurl:require('../../../static/images/common/nav_a2.png'),url:'/find'},{imgurl:require('../../../static/images/common/nav_a3.png'),url:'/order'},{imgurl:require('../../../static/images/common/nav_a4.png'),url:'/my'}]
				break;
				case 2:
				this.data = [{imgurl:require('../../../static/images/common/nav_a1.png'),url:'/'},{imgurl:require('../../../static/images/common/nav_s2.png'),url:'/find'},{imgurl:require('../../../static/images/common/nav_a3.png'),url:'/order'},{imgurl:require('../../../static/images/common/nav_a4.png'),url:'/my'}]
				break;
				case 3:
				this.data = [{imgurl:require('../../../static/images/common/nav_a1.png'),url:'/'},{imgurl:require('../../../static/images/common/nav_a2.png'),url:'/find'},{imgurl:require('../../../static/images/common/nav_s3.png'),url:'/order'},{imgurl:require('../../../static/images/common/nav_a4.png'),url:'/my'}]
				break;
				case 4:
				this.data = [{imgurl:require('../../../static/images/common/nav_a1.png'),url:'/'},{imgurl:require('../../../static/images/common/nav_a2.png'),url:'/find'},{imgurl:require('../../../static/images/common/nav_a3.png'),url:'/order'},{imgurl:require('../../../static/images/common/nav_s4.png'),url:'/my'}]
				break;
				default:
				break;
			}
		},
		props:{navindex:{type:Number,require:true}},
		methods:{
			changepage(path){
				this.$router.push(path)
			}
		}
	}
</script>