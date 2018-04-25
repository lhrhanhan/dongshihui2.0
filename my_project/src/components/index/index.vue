<template>
  <div>
    <botBottom></botBottom>
    <div class="wrap">
      <seaSearch></seaSearch>
      <snoSnow class="lunbo"></snoSnow>
      <naNav></naNav>
      <xiaotu></xiaotu>
      <recommend></recommend>
      <vipshow></vipshow>
      <hotShopping></hotShopping>
      <hotShopping2 class="move"></hotShopping2>
      <div class="backTop" @click="backTop">
        <img src="../../assets/index/bakcUP.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import botBottom from './bottom'
  import seaSearch from './search'
  import snoSnow from './snowing'
  import naNav from './nav'
  import xiaotu from './xiaotu'
  import recommend from './recommend'
  import vipshow from './vipshow'
  import hotShopping from './hotShopping'
  import hotShopping2 from './hotShopping2'

  export default {
    name: "index",
    data () {
      return {
        isShow : true
      }
    },
    components : {
      botBottom,
      seaSearch,
      snoSnow,
      naNav,
      xiaotu,
      recommend,
      vipshow,
      hotShopping,
      hotShopping2
    },
    data () {
      return {
      }
    },
    methods : {
      backTop () {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      },
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        // if (scrollTop >= 1000) {
        //   console.log('sb')
        //   this.$refs.isShow.display = 'block'
        // } else {
        //   // console.log('mb')
        //   this.$refs.isShow.display = 'none'
        // }
      }
    },
    mounted () {
      window.addEventListener('scroll',this.handleScroll)
    }
  }
</script>

<style scoped>
  .backTop img {
    margin-top: 5px;
  }

  .backTop {
    position: fixed;
    z-index: 9;
    bottom: 70px;
    right: 15px;
    width: 40px;
    height: 40px;
    background: #000;
    color: #fff;
    text-align: center;
    box-sizing: border-box;
    font-size: 0;
  }

  .wrap {
    background-color: #ccc;
  }

  .lunbo {
    margin-top: 2px;
  }

  .move {
    margin-top: -40px;
  }
</style>
