<template>
    <div class="wrap">
      <router-link to="bigShopping"><ul class="content">
        <li class="title">我爱大牌</li>
        <li class="sub-title">殿堂级品牌推荐，你的私人品牌管家</li>
        <li class="img-title"><img src="http://dshui-wap.oss-cn-hangzhou.aliyuncs.com/other/%E6%88%91%E7%88%B1%E5%A4%A7%E7%89%8C.jpg" alt=""></li>
      </ul>
      </router-link>

      <router-link to="newShopping"><ul class="content">
        <li class="title">本周新品</li>
        <li class="sub-title">最新最热超值产品速递</li>
        <li class="img-title"><img src="http://tupian.dshui.cc/c5c0cf836cf54eaf902be17c573d5acd20180521.jpg" alt=""></li>
      </ul></router-link>
    </div>
</template>

<script>

    export default {
      name: "vipshow",
      data () {
          return {
            firstData : '',
          }
      },
      mounted () {

      }
    }
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  .wrap {
    background-color: #fff;
    padding: 1rem 0;
    overflow: hidden;
    margin-top: 20px;
  }

  .content {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  li {
    list-style: none;
  }
  .title {
    font-size: 1.6rem;
    color: #000;
    font-weight: 700;
  }

  .sub-title {
    font-size: 1.4rem;
    color: #858585;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .img-title {
    margin-top: 10px;
  }

  .img-title img {
    width: 100%;
  }
</style>
