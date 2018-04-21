<template>
    <div class="wrap">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="i in thisdata"><img class="sw-img" :src="i.img" alt=""></div>
        </div>

        <!-- 如果需要滚动条 -->

      </div>
    </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
    export default {
      name: "snowing",
      data () {
        return {
          thisdata: ''
        }
      },
      mounted () {
        new Swiper('.swiper-container', {
          direction : 'horizontal',
          speed: 300,
          autoplay: 3000,
          loop: true,
          autoplayDisableOnInteraction: false
        })

        this.$request({
          type: 'GET',
          url: 'api/adwap/listAllAdSlide?',
          success: function (res) {
            this.thisdata = res.data.data
            this.$nextTick(()=>{
              new Swiper('.swiper-container',{
                direction : 'horizontal',
                speed: 300,
                autoplay: 3000,
                loop: true,
                autoplayDisableOnInteraction: false
              })
            })
          }
        })
      }
    }
</script>

<style scoped>
  .swiper-container {
    width: 100%;
    height: 254px;
  }

  .sw-img {
    width: 100%;
    height: 100%;
  }
</style>
