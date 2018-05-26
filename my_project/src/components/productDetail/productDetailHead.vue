<template>
  <div class="wrap">
    <div class="left">
      <img src="../../assets/login/back.png" alt="">
    </div>
    <div class="center">商品详情</div>
    <div class="right"><img src="../../assets/login/fenxiang.png" alt=""></div>
  </div>
</template>

<script>
    export default {
        name: "product-detail-head"
    }
</script>

<style scoped>
  .right img {
    width: 22px;
    position: relative;
    top: 10px;
  }

  .left {
    height: 44px;
    width: 10%;
    text-align: center;
    position: relative;
    top: 5px;
  }

  .center {
    width: 80%;
    text-align: center;
    font-size: 16px;
    line-height:44px;
  }

  .right {
    width: 10%;
    text-align: center;
  }

  .wrap {
    width: 100%;
    height: 44px;
    overflow: hidden;
    background: #fff;
    color: #000;
    border-bottom: 1px solid #e8e8e8;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 98;
  }

  .wrap div{
    float: left;
  }
</style>
