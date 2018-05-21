<template>
    <div class="wrap">
      <ul class="item">
        <li class="icon-wapper">
          <img src="../../assets/index/newthings.png" alt="">
        </li>
        <li>全部</li>
      </ul>
      <ul class="item">
        <li class="icon-wapper">
          <img src="../../assets/index/dazhe.png" alt="">
        </li>
        <li>新品</li>
      </ul>
      <ul class="item">
        <li class="icon-wapper">
          <img src="../../assets/index/huikui.png" alt="">
        </li>
        <li>清货</li>
      </ul>
      <ul class="item">
        <li class="icon-wapper">
          <img src="../../assets/index/allthings.png" alt="">
        </li>
        <li>回馈</li>
      </ul>
      <ul class="item">
        <li class="icon-wapper">
          <img src="../../assets/index/daofu.png" alt="">
        </li>
        <li @click="ss">付邮</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "nav",
      data () {
          return {

          }
      },
      mounted () {
        
      }
    }
</script>

<style scoped>


  li{
    list-style: none;
  }

  .wrap {
    background: #fff;
    overflow: hidden;
    position: relative;
    z-index: 1;
    padding: 10px 0;
    font-size: 1.5rem;
    color: #333;
  }

  .item {
    text-align: center;
    width: 20%;
    float: left;
  }
</style>
