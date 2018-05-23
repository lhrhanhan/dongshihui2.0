<template>
  <div class="newWrap">
    <div class="wrap">
      <span class="left"><img src="../../assets/login/secBack.png" alt=""></span>
      <span class="center">本周新品</span>
    </div>

    <div class="item-head">
      特别推荐
    </div>

    <div class="compontent-weekNewsItem">
      <img v-for="i in first" :src="i.img" alt="">
    </div>


  </div>
</template>

<script>
    export default {
        name: "nav-head",
      data () {
          return {
            first : ''
          }
      },
      mounted () {
        this.$request({
          type : 'GET',
          url: 'api/adwap/queryAdGoods?adid=5&pageNo=1',
          success : function (res) {
            this.first = res.data.data

          }
        })
      }
    }
</script>

<style scoped>
  .compontent-weekNewsItem img{
    width: 100%;
    margin-top: 8px;
  }

  .item-head {
    margin-top: 44px;
    width: 100%;
    height: 40px;
    background: #000;
    text-align: center;
    line-height: 40px;
    color: #fff647;
    font-size: 14px;
    margin-bottom: 15px;
  }

  .left {
    position: absolute;
    left: 10px;
    height: 44px;
    text-align: left;
    width: 44px;
    top: 5px;
  }

  .center {
    font-size: 1.6rem;
  }

  .wrap {
    background: #000;
    color: #fff;
    height: 44px;
    line-height: 44px;
    text-align: center;
    width: 100%;
    max-width: 640px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    box-shadow: 0 -1px 0 rgba(0,0,0,.05), 0 0 10px rgba(0,0,0,.1);
  }

  .newWrap {
    background-color: rgb(45,45,45);
  }
</style>
