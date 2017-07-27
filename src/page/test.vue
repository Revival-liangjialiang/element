<template>
	<div>
	<div style="height: 5.0rem;background-color: red;"></div>
		<mt-loadmore :bottom-method="loadBottom"
                     :bottom-all-loaded="allUseLoad()" :bottomPullText='bottomText'
                     ref="loadmore">
          <div v-for='item in data' style="height: 5.0rem;">
           {{item.name}}
          </div>
        </mt-loadmore>
	</div>
</template>
<script type="text/babel">
	export default{
		data(){
			return{
				data: [{name:"name1"},{name:"name1"},{name:"name1"},{name:"name1"},{name:"name1"},{name:"name1"},{name:"name1"},{name:"name1"},{name:"name1"},{name:"name1"},{name:"name1"},{name:"name1"},{name:"name1"},{name:"name1"},{name:"name1"},{name:"name1"},{name:"name1"}],
        pageNo: 1,
        allLoaded: false,
        bottomText: '上拉加载更多',
        totalCount: ''
			}
		},
		methods:{
			loadBottom() {
				console.log('加载')
        this.pageNo += 1;
        if (this.pageNo == this.totalGetCount) {
          this.allLoaded = true;
        }
        setTimeout(() => {
         this.allLoaded = true
        }, 1500);
      },
      allUseLoad:function(){
      	console.log('不知所云')
      	return false
      }
		}
	}
</script>