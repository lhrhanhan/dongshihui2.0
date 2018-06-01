<template>
  <div class="wrap">
    <div class="search">
      <li class="left">
        <img src="../../assets/login/whitelogin.png" alt="">
      </li>
      <li class="center" @click="sear">
        <router-link to="search">
        <i><img class="jz" src="../../assets/login/jingzi.png" alt=""></i>
        <div class="input">搜索喜欢的宝贝</div>
        </router-link>
      </li>
      <li class="right">
        <div class="contentRight">
          <img src="../../assets/login/msg.png" alt="">
        </div>
      </li>
    </div>
  </div>
</template>

<script>
  export default {
    name: "search"
  }
</script>

<style scoped>
  .right {
    width: 10%;
    float: right;
  }

  .contentRight {
    position: relative;
    top: 8px;
  }

  .right img {
    width: 50%;

  }

  .center i {
    width: 16px;
    height: 28px;
    line-height: 24px;
    background: no-repeat;
    background-size: contain;
    vertical-align: middle;
  }

  .jz {
    width: 16px;
  }

  .input {
    margin-top: 1px;
    display: inline-block;
    width: 85%;
    color: #999;
    text-align: left;
    height: 32px;
    line-height: 32px;
    font-size: 1.4rem;
  }

  .center {
    width: 76%;
    top: 6.5px;
    padding-left: .5rem;
    height: 32px;
    line-height: 32px;
    background: #fff;
    position: relative;
  }

  .left img{
    margin-top: 8px;
    width: 50%;
  }

  .search {
    height: 44px;
    background: #010101;
    text-align: center;
    color: #fff;
  }

  li {
    height: 44px;
    line-height: 44px;
    float: left;
    font-size: 1.5rem;
    list-style: none;
  }

  .left {
    width: 12%;
  }

</style>
