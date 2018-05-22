<template>
    <div class="wrap">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(i,index) in thisdata"><img @click="clicked(index)" class="sw-img" :src="i.img" alt=""></div>
        </div>
      </div>

      <div class="footer">
        <div class="ftLeft">
          NOTICE
        </div>

        <div class="ftcenter">
             |
        </div>

        <div class="ftRight">
          DSHUI   |    声  明
        </div>
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
          thisdata: '',
          jumpUrl : ''
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
      },
      methods : {
        clicked (index) {
          this.jumpUrl = this.thisdata[index].rule.adid
          this.$router.push({
            path : 'secondHtml',
            query : {
              adiD : this.jumpUrl
            }
          })
        }
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

  .footer {
    height: 40px;
    position: relative;
    background: #fff;
    overflow: hidden;
    padding: 10px;
  }

  .ftLeft {
    font-weight: 700;
    font-size: 1.6em;
    float: left;
  }

  .ftcenter {
    float: left;
    font-size: 14px;
    color: #000;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 10px;
  }

  .ftRight {
    color: #000;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    float: left;
    font-size: 1.6em;
    margin-left: 25px;

  }
</style>
