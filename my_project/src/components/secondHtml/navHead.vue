<template>
    <div class="wrap">
      <div class="wrap-list">
        <div class="left" @click="back"><img src="../../assets/login/secBack.png" alt=""></div>
        <div class="center">{{thisdata.title}}</div>
        <div class="right"><img src="../../assets/login/change.png" alt=""></div>
      </div>

      <div class="bigImg">
        <img :src="thisdata.img" alt="">
      </div>

      <div class="logdesc">
        <p class="log-img">
          <img :src="thisdata.logo" alt="">
        </p>
        <p class="log-font">
          {{thisdata.summary}}
        </p>
      </div>

      <div class="content">
        <ul class="content-wrap">
          <li @click="clicked(index)" v-for="(i,index) in thislistdata" class="cw-list">
            <dl class="item">
              <dt>
                <img :src="i.img" alt="">
              </dt>

              <dd class="name">{{i.goods.name}}
              </dd>

              <dd class="price">
                <b>
                  {{i.goods.marketPrice/100}}
                </b>
                <span id="person">{{i.goods.salesVolume}}人付款</span>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "nav-head",
      data () {
        return {
          adID : this.$route.query.adiD,
          thisdata : '',
          thislistdata : '',
          thisUrlID : ''
        }
      },
      mounted () {
        this.$request({
          type : 'GET',
          url : `api/adwap/loadAd?adid=${this.adID}`,
          success : function (res) {
            this.thisdata = res.data.data
          }
        })

      },
      created (){
        this.$request({
          type : 'GET',
          url : `api/adwap/queryAdGoods?adid=${this.adID}&pageNo=1`,
          success : function (res) {
            this.thislistdata = res.data.data
          }
        })
      },
      methods :  {
        clicked (index) {
          this.thisUrlID = this.thislistdata[index].goodsId
          this.$router.push({
            path : 'productDetail',
            query : {
              thisPrID : this.thisUrlID
            }
          })
        },
        back () {
          this.$router.go(-1)
        }
      }
    }
</script>


<style scoped>


  .item {
    background: #fff;
    padding-bottom: 11px;
    font-size: 14px;
    color: #33383b;
    width: 100%;
  }

  .wrap {
    height: 1600px;
  }

  #person {
    color: #858585;
    line-height: 1.3rem;
    font-size: 1.3rem;
    margin-left: 4px;
  }

  b {
    font-weight: 400;
    padding-left: 4%;
  }

  .price {
    color: #000;
    font-size: 1.8rem;
    word-break: break-all;
    line-height: 25px;
    height: 25px;
  }

  .name {
    color: #000;
    margin-bottom: 5px;
    line-height: 1.6;
    height: 46px;
    font-size: 14px;
    width: 95%;
    padding-left: 4%;
    padding-top: 5px;
    margin-bottom: 16px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    display: -moz-box;
    -moz-line-clamp: 3;
    display: -ms-box;
    -ms-box-orient: vertical;
    -ms-line-clamp: 3;
    overflow: hidden;
    word-break: break-all;
  }

  dt img {
    width: 100%;
  }

  li {
    float: left;
    width: 47%;
    margin-left: 2%;
    margin-bottom: 2%;
    border-radius: 3px;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }

  .content {
    background-color: rgb(240,240,240);
    margin-top: 1rem;
    height: 100%;
  }

  .log-font {
    color: #333;
    font-size: 1.4rem;
    width: 80%;
    float: right;
    padding: 15px 15px 15px 6px;
    line-height: 18px;
  }

  .log-img {
    width: 20%;
    height: 100px;
    line-height: 100px;
    float: left;
    margin-left: 5px;
  }

  .log-img img {
    width: 60px;
    height: 85.72px;
    vertical-align: middle;
  }

  .logdesc {
    background: #fff;
    margin-top: 10px;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .bigImg {
    /*min-height: 693px;*/
    pointer-events: auto;
    margin-top: 44px;
  }

  .bigImg img {
    width: 100%;
    height: 300px;
    border: none;
    vertical-align: middle;
  }

  .left {
    text-align: left;
    position: relative;
    top: 5px;
    float: left;
  }

  .center {
    width: 80%;
    text-align: center;
    float: left;
    font-size: 1.6rem;
    color: #f5f5f5;
    text-align: center;
  }

  .right {
    text-align: right;
    float: right;
    position: relative;
    top: 5px;
  }

  .wrap-list {
    background: #000;
    color: #fff;
    height: 44px;
    line-height: 44px;
    /*text-align: center;*/
    width: 100%;
    max-width: 640px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    box-shadow: 0 -1px 0 rgba(0,0,0,.05), 0 0 10px rgba(0,0,0,.1);
  }


</style>
