<template>
    <div class="wrap">
      <img class="icon" src="../../assets/login/jingzi.png" alt="">
      <input class="ss" type="search" placeholder="搜索喜欢的宝贝">
    </div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style scoped>


  .icon {
    width: 16px;
    line-height: 24px;
    background: no-repeat;
    background-size: contain;
    vertical-align: middle;
    position: absolute;
    top: 34%;
    left: 7%;
  }

  .ss {
    width: 95%;
    height: 32px;
    line-height: 32px;
    border: none;
    vertical-align: middle;
    -webkit-appearance: none;
    font-size: 1.4rem;
    padding-left: 9%;
    outline: none;
  }

  .wrap {

    position: relative;
    width: 100%;
    padding: 8px 3px;
    background: #000;
    top: 0;
    margin: 0 auto;
    z-index: 101;
    text-align: center;
    color: #fff;
  }
</style>
