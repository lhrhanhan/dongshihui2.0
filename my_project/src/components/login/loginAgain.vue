<template>
    <div class="wrap">
      <div class="top">
        <div class="top-black">

        </div>
        <img class="logo" src="http://dshui-test.oss-cn-hangzhou.aliyuncs.com/logo/logo.jpg?x-oss-process=style/160" alt="">
        <div class="info">
          <p class="username">小董
            <span class="user-grade">
              v 会员
            </span>
          </p>
        </div>
      </div>
      <div class="center">
        <p class="title">
          我的订单
          <span id="all">查看全部</span>
        </p>

        <div class="stautas">
          <div class="st-item">
            <div class="st-img"><img src="../../assets/login/daifukuan.png" alt=""></div>
            <div class="font">待付款</div>
          </div>
          <div class="st-item">
            <div class="st-img"><img src="../../assets/login/daifahuo.png" alt=""></div>
            <div class="font">待发货</div>
          </div>
          <div class="st-item">
            <div class="st-img"><img src="../../assets/login/daishouhuo.png" alt=""></div>
            <div class="font">待收货</div>
          </div>
          <div class="st-item">
            <div class="st-img"><img src="../../assets/login/daipingjia.png" alt=""></div>
            <div class="font">待评价</div>
          </div>
          <div class="st-item">
            <div class="st-img"><img src="../../assets/login/shouhou.png" alt=""></div>
            <div class="font">售后</div>
          </div>
        </div>

        <div class="component-adBanner">
          <img src="http://dshui-wap.oss-cn-hangzhou.aliyuncs.com/feedback/home.jpg" alt="">
        </div>
      </div>
      <div class="bottom">
        <p class="p-title">我的收藏
          <span id="p-all">查看更多</span>
        </p>
      </div>

      <div class="back-btn" @click="tuichu">
        退出
      </div>

      <bottomLogin></bottomLogin>
    </div>
</template>

<script>
  import bottomLogin from '../../components/index/bottom'

    export default {
        name: "login-again",
      components : {
        bottomLogin
      },
      data () {
          return {
            thisdata : '',
            loaclData : [{'name':  '待付款',imgUrl : '../../assets/login/daifukuan.png'},
              {'name' : '待发货',imgUrl:'../../assets/login/daifahuo.png'},
              {'name' : '待收货',imgUrl:'../../assets/login/daishouhuo.png'},
              {'name' : '待评价',imgUrl:'../../assets/login/daipingjia.png'},
              {'name' : '售后',imgUrl:'../../assets/login/shouhou.png'},
            ]
          }
      },
      mounted () {


        this.$request({
          type : 'GET',
          url : `api/mewap/qryUserInfo?token=8C1E5577C0B875E4A0D8269B307A8DF4`,
          success : function (res) {
            this.thisdata = res.data.data
            console.log(this.thisdata)
          }
        })
      },
      methods : {
        tuichu () {
          this.$router.push({
            path: 'login'
          })
        }
      }
    }
</script>

<style scoped>
  .back-btn {
    width: 92%;
    margin: 30px auto;
    background: #dedede;
    border-radius: 4px;
    color: #666;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
  }

  #p-all {
    float: right;
    vertical-align: top;
    font-size: 1.3rem;
    color: #999;
    font-weight: 400;
  }

  .p-title {
    padding: 0 10px;
    height: 44px;
    line-height: 44px;
    font-size: 1.6rem;
    font-weight: 700;
    color: #202020;
  }

  .bottom {
    background: #fff;
    overflow: hidden;
    padding: 0 0 10px;
  }

  .component-adBanner img {
    width: 100%;
  }

  .font{
    line-height: 34px;
  }

  .st-item {
    width: 20%;
    float: left;
    color: #666;
    text-align: center;
    position: relative;
    font-size: 1.3rem;
  }

  .stautas {
    width: 100%;
    height: 70px;
    padding: 8px 0;
  }

  #all {
    float: right;
    vertical-align: top;
    font-size: 1.3rem;
    color: #999;
    font-weight: 400;
  }

  .title {
    overflow: hidden;
    padding: 0 10px;
    height: 44px;
    line-height: 44px;
    font-size: 1.6rem;
    font-weight: 700;
    color: #202020;
  }

  .center {
    background: #fff;
  }

  .user-grade {
    display: inline-block;
    position: relative;
    color: #c59f51;
    font-size: 1.3rem;
    margin-left: 6px;
  }

  .username {

  }

  .logo {
    position: absolute;
    left: 10px;
    bottom: 13px;
    width: 65px;
    height: 65px;
    border-radius: 50%;
  }

  .info {
    position: absolute;
    bottom: 14px;
    color: #fff;
    margin-left: 88px;
    font-size: 1.7rem;
    font-weight: 700;
    height: 65px;
    line-height: 65px;
  }

  .top-black {
    height: 40px;
    background-color: black;

  }

  .top {
    box-shadow: 0 2px 6px 0 rgba(0,0,0,.05);
    background: linear-gradient(90deg,#000,#222);
    background-size: 100%;
    position: relative;
    height: 120px;
    margin-bottom: 20px;
  }
</style>
