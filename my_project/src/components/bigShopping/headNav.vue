<template>
  <div class="wrap">
    <span class="left">
      <img src="../../assets/login/secBack.png" alt="">
    </span>

    <span class="center">
      我爱大牌
    </span>
  </div>
</template>

<script>
    export default {
        name: "head-nav"
    }
</script>

<style scoped>
  .center {
    font-size: 1.6rem;
  }

  .left {
    position: absolute;
    left: 10px;
    height: 44px;
    text-align: left;
    width: 44px;
    top: 5px;
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
</style>
