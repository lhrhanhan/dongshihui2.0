<template>
  <div class="wrap">
    <ul class="content">
      <li class="left">
        <img src="../../assets/login/secBack.png" alt="">
      </li>
      <li class="center">
        <img src="../../assets/login/jingzi.png" alt="">
        <span class="search">搜索</span>
      </li>
      <li class="right"></li>
    </ul>

    <div class="tab-wapper">
      <span>默认</span>
      <span>销量</span>
      <span>价格</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "third-head"
    }
</script>

<style scoped>
  .tab-wapper span{
    width: 33%;
    display: inline-block;
    font-size: 1.4rem;
    vertical-align: top;
    border-right: 1px solid rgb(222,222,222);
  }

  .tab-wapper {
    position: fixed;
    z-index: 110;
    left: 0;
    top: 44px;
    width: 100%;
    max-width: 640px;
    height: 44px;
    line-height: 44px;
    background: #fff;
    font-size: 0;
    text-align: center;
    border-bottom: .5px solid #e8e8e8;
    color: #858585;
    box-sizing: border-box;
  }

  .search {
    color: black;
    margin-left: 25px;
  }

  .left {
    width: 12%;
  }

  .left img {
    position: relative;
    top: 5px;
  }

  .right {
    width: 12%;
  }

  .center {
    width: 76%;
    top: 6.5px;
    padding-left: .5rem;
    height: 32px;
    line-height: 32px;
    background: #fff;
    position: relative;
    text-align: left;
  }

  .center img {
    position: absolute;
    top:7px;
    left: 10px;
    width: 16px;

  }

  li {
    height: 44px;
    line-height: 44px;
    float: left;
    font-size: 1.5rem;
    list-style: none;
  }

  .content {
    height: 44px;
    background: #010101;
    text-align: center;
    color: #fff;
  }
</style>
