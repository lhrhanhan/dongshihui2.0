<template>
    <div class="wrap">
      <span class="content-wrapper">
        <div class="icon"><img src="../../assets/login/jingzi.png" alt=""></div>
        <input type="text" class="cw-input" placeholder="搜索你喜欢的宝贝">
      </span>
    </div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style scoped>
  .cw-input {
    width: 85%;
    height: 32px;
    line-height: 32px;
    border: none;
    vertical-align: middle;
    -webkit-appearance: none;
    font-size: 1.4rem;
    padding-left: 35px;
    outline: none;
  }

  .content-wrapper {
    width: 100%;
    height: 32px;
    background: #fff;
    position: relative;
  }

  .icon {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0;
    left: 15px;
    background: no-repeat;
    background-size: contain;
    vertical-align: middle;
  }

  .icon img {
    width: 100%;
  }

  .wrap {
    width: 100%;
    max-width: 640px;
    padding: 8px 0px;
    background: #000;
    position: fixed;
    top: 0;
    margin: 0 auto;
    z-index: 101;
    text-align: center;
    color: #fff;
  }
</style>
