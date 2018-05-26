<template>
    <div class="wrap">
      <div class="wrap-left">
        <li class="wl-img"><img src="../../assets/login/erji.png" alt=""></li>
        <li class="wl-img"><img src="../../assets/login/shouchang.png" alt=""></li>
        <li class="wl-img"><img src="../../assets/login/gouw.png" alt=""></li>
        <li class="wl-font">
          加入购物车
        </li>
      </div>

      <div class="buy">
        立即购买
      </div>
    </div>
</template>

<script>
    export default {
        name: "product-bottom"
    }
</script>

<style scoped>
  .buy {
    width: 26%;
    background: #000;
    color: #fff;
    font-weight: 700;
    font-size: 1.4rem;
    height: 50px;
    line-height: 50px;
    vertical-align: top;
    float: left;
    box-sizing: border-box;
  }

  .wl-font {
    width: 34.13513513513514%;
    background: #efefef;
    color: #333;
    font-size: 1.4rem;
    font-weight: 700;
  }

  .wl-img {
    width: 21.62162162162%;
    background: #fff;
    color: #000;
    position: relative;
    top: 8px;
    height: 40px;
    line-height: 40px;
    margin-top: 5px;
    border-right: 1px solid rgb(220,220,220);
  }

  .wl-img img {
    width: 25px;
  }

  li {
    list-style: none;
    float: left;
  }

  .wrap-left {
    overflow: hidden;
    float: left;
    width: 74%;
    border-top: 1px solid #e8e8e8;
    box-sizing: border-box;
  }

  .wrap {
    position: fixed;
    z-index: 99;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    margin: 0 auto;
    max-width: 640px;
    line-height: 50px;
    background: #fff;
    text-align: center;
    font-size: 1.5rem;
    overflow: hidden;
  }
</style>
