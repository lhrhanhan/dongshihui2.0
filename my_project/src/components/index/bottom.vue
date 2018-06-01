<template>
    <div>
      <div class="wrap" >
        <div class="footerbar">
          <div class="footer" @click="home">
            <img src="../../assets/index/garyindex.png" alt="">
            <img class="footer_dis" src="../../assets/index/greenindex.png" alt="">
          </div>

          <div class="footer" @click="cata">
            <img src="../../assets/index/graycata.png" alt="">
            <img class="footer_dis" src="../../assets/index/greencata.png" alt="">
          </div>

          <div class="footer" @click="camaer">
            <img src="../../assets/index/graycamera.png" alt="">
            <img class="footer_dis" src="../../assets/index/greencamera.png" alt="">
          </div>

          <div class="footer" @click="shoppingCar">
            <img src="../../assets/index/garyshoppingCar.png" alt="">
            <img class="footer_dis" src="../../assets/index/greenshoppingCar.png" alt="">
          </div>

          <div class="footer" @click="login">
            <img src="../../assets/index/graylogin.png" alt="">
            <img class="footer_dis" src="../../assets/index/greenlogin.png" alt="">
          </div>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "bottom",
      data () {
          return {}
      },
      mounted () {},
      methods : {
        home () {
          this.$router.push({
            path : 'index',
          })
        },
        cata () {
          this.$router.push({
            path : 'catagory',
          })
        },
        camaer () {
          this.$router.push({
            path : 'discover',
          })
        },
        shoppingCar () {
          this.$router.push({
            path : 'shoppingCar',
          })
        },
        login () {
          this.$router.push({
            path : 'login',
          })
        }

      }
    }
</script>

<style scoped>
  .footerbar{
    width: 100%;
    height: 44px;
    min-width: 319px;
    margin: 0 auto;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    background-color: #000!important;
    box-shadow: 0 2px 6px rgba(0,0,0,.12);
    overflow: hidden;
  }

  .footer{
    width: 20%;
    float: left;
    text-align: center;
    margin-top: 9px;
  }

  .footer img {
    width: 30%;
  }

  .footer_dis {
    display: none;
  }
</style>
