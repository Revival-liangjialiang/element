<template>
  <div>
    <div class="special_header">
      <span @click="$router.go(-1)">X</span> &nbsp&nbsp&nbsp&nbsp天天特价
    </div>
    <div class="special_header_cover" id="special_header_cover"></div>
    <img src="../../../../../static/images/find/special_background.png" style="width: 100%;height: 6.6rem;">
    <div class="cover_box" id="cover_box">
      <ul class="left_move" id="left_move">
        <li v-for="(item,index) in move_data" @click="select(item,item.path)" :class="{active:item===select_obj||(index===0&&select_obj===null)}">
          {{item.title}}
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<style lang="scss" scoped>
.special_header {
  width: 100%;
  height: 2.5rem;
  top: 0.0rem;
  left: 0.0rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  text-align: left;
  z-index: 10;
  position: fixed;
  color: white;
  span {
    font-size: 0.7rem;
    line-height: 2.5rem;
    color: white;
  }
}

.special_header_cover {
  width: 100%;
  height: 2.5rem;
  top: 0.0rem;
  left: 0.0rem;
  z-index: 9;
  opacity: 0;
  position: fixed;
  background-color: black;
}

.cover_box {
  width: 16.0rem;
  height: 2.0rem;
  overflow: scroll;
  z-index: 10;
  background-color: white;
}

.cover_box::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.left_move {
  width: auto;
  height: 2.0rem;
  padding-top: 0.45rem;
  left: 0.0rem;
  white-space: nowrap;
  position: absolute;
  li {
    width: 3.35rem;
    height: 1.2rem;
    margin-left: 0.45rem;
    font-size: 0.6rem;
    line-height: 1.2rem;
    border-radius: 0.8rem;
    border: 0.05rem solid #e9e9e9;
    display: inline-block;
    float: none;
  }
  .active {
    border-color: #56aeff;
    color: #56aeff;
  }
}

</style>
<script type="text/babel">
export default {
  data() {
    return {
      header: null,
      scroll_top_switch: false,
      cover_box: null,
      left_move: null,
      select_obj: null,
      scroll_shop: 0,
      left_move_child_set: null,
      move_data: [{ title: '专属推荐', path: '/special' }, { title: '狂野食肉', path: '/special' }, { title: '膳食平衡', path: '/special' }, { title: '风味小吃', path: '/special' }, { title: '实惠套餐', path: '/special' }, { title: '特色面食', path: '/special' }]
    }
  },
  mounted: function() {
    setTimeout(() => {
      this.scroll_shop = parseInt(document.documentElement.style.fontSize) * 4.1
    }, 100)
    this.header = document.getElementById('special_header_cover')
    this.cover_box = document.getElementById('cover_box')
    this.left_move = $('.left_move')
    this.left_move_child_set = this.left_move.children('li')
    for (var a = 0; a < this.left_move_child_set.length; a++) {
      this.left_move_child_set.eq(a).click(function() {
        if (this.offsetLeft > document.body.clientWidth / 2) {
          $('.cover_box').animate({ scrollLeft: (this.offsetLeft - document.body.clientWidth / 2) + this.offsetWidth / 2 + 'px' }, 350);
        } else {
          $('.cover_box').animate({ scrollLeft: '0px' }, 500);
        }
      })
    }
    window.onscroll = () => {
      var top = document.documentElement.scrollTop || document.body.scrollTop
      if (top > this.scroll_shop && this.scroll_top_switch) {
        this.scroll_top_switch = false
        this.cover_box.style.position = 'fixed'
        this.cover_box.style.top = '2.5rem'
        this.cover_box.style.left = '0rem'
      } else if (top < this.scroll_shop && !this.scroll_top_switch) {
        this.scroll_top_switch = true
        this.cover_box.style.position = 'relative'
        this.cover_box.style.top = '0rem'
        this.cover_box.style.left = '0rem'
      }

      if (top === 0) {
        this.header.style.opacity = 0
      } else if (20 > top && top > 0) {
        this.header.style.opacity = 0
      } else if (30 > top && top > 20) {
        this.header.style.opacity = 0.1
      } else if (40 > top && top > 30) {
        this.header.style.opacity = 0.2
      } else if (50 > top && top > 40) {
        this.header.style.opacity = 0.3
      } else if (60 > top && top > 50) {
        this.header.style.opacity = 0.4
      } else if (70 > top && top > 60) {
        this.header.style.opacity = 0.5
      } else if (80 > top && top > 70) {
        this.header.style.opacity = 0.6
      } else if (90 > top && top > 80) {
        this.header.style.opacity = 0.7
      } else if (100 > top && top > 90) {
        this.header.style.opacity = 0.8
      } else if (110 > top && top > 100) {
        this.header.style.opacity = 0.9
      } else if (120 > top && top > 110) {
        this.header.style.opacity = 1
      } else if (top > 120) {
        this.header.style.opacity = 1
      }
    }
  },
  methods: {
    select: function(item, path) {
      this.select_obj = item
      this.$router.push(path)
    }
  }
}

</script>
