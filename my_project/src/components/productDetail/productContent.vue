<template>
    <div class="wrap">
      <div class="ban" v-if="ban">
        <div class="sku-dialog">
          <div class="sku-header">
            <div class="sh-left" v-if="thisspecifications == 'null'">
              <img :src="smallGoodsImg" alt="">
            </div>

            <div class="sh-left" v-if="thisspecifications != 'null'">
              <img :src="soloImg" alt="">
            </div>
            <div class="sh-center">
              <div class="sh-price">￥{{price/100}}</div>
              <div class="kucun">库存{{sales}}件</div>
              <div class="size" v-if="changeColor == '' && changeSize == '' ">请选择规格/数量</div>
              <div class="disSize" v-if="changeColor != '' || changeSize != '' ">{{chooseChicun}}:{{changeColor}},{{chosicsSizeColor}}:{{changeSize}}, x {{numCount}}</div>
              <div class="disSize" v-if="changeColor == '' && changeSize == ''">已选：数量 * {{numCount}}</div>
            </div>
            <div class="sh-right" @click="close">
              x
            </div>

            <div class="clearBoth"></div>
          </div>

          <div class="sku-info">
            <ul class="sl-item">
              <li class="sl-title">{{chosicsSizeColor}}</li>
              <li class="sl-sublist">
                <p class="sl-btn" @click="sltcolor(indexl)" ref="blackColor" v-for="(l,indexl) in chosiceSize">{{l.content}}</p>
              </li>
            </ul>

            <ul class="chima">
              <li class="cima-title">尺码</li>
              <li class="cima-list">
                <p class="cml-content" @click="sltChicun(indexo)" ref="chicun" v-for="(o,indexo) in chosicsXl">{{o.content}}</p>
              </li>
            </ul>

            <div class="item-count">
              <span class="ic-item">
                购买数量
              </span>

                <div class="ic-right">
                <span class="jian" @click="clickjian">-</span>
                <span class="neirong">{{numCount}}</span>
                <span class="jia" @click="clickjia">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="swiper-container" >
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="i in first" v-if="i != null">
            <img :src="i.urls" alt="">
          </div>

          <div class="navImg" v-if="i == null">
            <img :src="soloImg" alt="">
          </div>
        </div>
      </div>

      <div class="info-wrapper">
        <div class="productName">
          {{title.name}}
        </div>

        <div class="price">
          <div class="curPrice">
            ￥{{price/100}}
          </div>
        </div>

        <p class="saleInfo">
          <span class="salesVolume">销量:&nbsp;{{cunhuo}}</span>
          <span class="inventory">库存:&nbsp;{{sales}}</span>
        </p>

        <p class="slectSku" @click="speice">
          <span class="choice" v-if="changeColor != '' || changeSize != ''">已选：  {{chooseChicun}}:{{changeColor}},{{chosicsSizeColor}}:{{changeSize}}, x {{numCount}}</span>
          <span class="sc-u" v-if="changeColor == '' || changeSize == ''">请选择规格/数量</span>
        </p>

        <div class="componts-logDesc" v-if="logoFont != ''">
          <p class="th1"><img :src="logoUrl" alt=""></p>
          <p class="th2">{{logoFont}}</p>
        </div>

        <div class="user-talk">
          <div class="header">
            <div class="header-left">用户评价({{userNum}}+)</div>
            <div class="header-right">全部</div>
          </div>
          <ul class="comment-list">
            <div class="cell-wrapper" v-for="x in userInfo">
              <li class="clear">
                <div class="leftImg">
                  <img :src="x.avator" alt="">
                </div>

                <div class="comment-info">
                  <p class="name">
                    {{x.userName}}
                    <span class="five">★★★★★</span>
                  </p>
                  <p class="time">
                    {{x.createTime}}
                  </p>
                  <p class="ctalk">{{x.content}}</p>
                </div>
              </li>
            </div>
          </ul>
        </div>

        <dl class="goods-info">
          <dt class="mb-10">商品信息</dt>
          <dd class="mb-11" v-for="a in exid">
            <span class="gi-title">{{a.k}}</span>
            <span class="gi-contenr">{{a.v}}</span>
          </dd>
        </dl>

        <div class="detail-img" v-html="fewImg">

        </div>
      </div>
    </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css';
    export default {
        name: "product-content",
      data () {
          return {
            ban : false,
            thisdata : '',
            first : '',
            soloImg : '',
            title : '',
            price : '',
            sales : '',
            cunhuo : '',
            logoUrl : '',
            logoFont : '',
            userNum : '',
            userInfo : '',
            exid : '',
            fewImg : '',
            numCount : '1',
            chosiceSize : '',
            chosicsSizeColor : '',
            chosicsXl: '',
            smallGoodsImg : '',
            chooseChicun : '',
            changeColor : '',
            changeSize : '',
            thisspecifications : ''
          }
      },
      mounted () {
        new Swiper('.swiper-container', {
          direction : 'horizontal',
          speed: 300,
          autoplay: 3000,
          loop: true,
          autoplayDisableOnInteraction: false
        })
        this.$request({
          type: 'GET',
          url: 'api/goodswap/goodsDetail?goodsId=7124&token=',
          success: function (res) {
            this.thisdata = res.data.data
            this.first = res.data.data.pictures
            this.soloImg = res.data.data.goods.imgUrl
            this.title = res.data.data.goods
            this.price = res.data.data.goods.marketPrice
            this.sales = res.data.data.goods.inventory
            this.cunhuo = res.data.data.goods.salesVolume
            this.logoUrl = res.data.data.describe.imgUrl
            this.logoFont = res.data.data.describe.describe
            this.userNum = res.data.data.comment.commentNum
            this.userInfo = res.data.data.comment.comments.slice(0,2)
            this.exid = res.data.data.explain
            this.fewImg = res.data.data.goods.details.slice(3,res.data.data.goods.details.length-4)
            this.chosiceSize = res.data.data.goods.specifications[0].goodsSpecifications
            this.chosicsSizeColor = res.data.data.goods.specifications[0].name
            this.chosicsXl = res.data.data.goods.specifications[1].goodsSpecifications
            this.smallGoodsImg = res.data.data.goods.specifications[0].goodsSpecifications[0].imgUrl
            this.chooseChicun = res.data.data.goods.specifications[1].name
            this.thisspecifications = res.data.data.goods.specifications

            console.log(this.smallGoodsImg)
            this.$nextTick(()=>{
              new Swiper('.swiper-container',{
                direction : 'horizontal',
                speed: 300,
                autoplay: 3000,
                loop: true,
                autoplayDisableOnInteraction: false
              })
            })
          }
        })
      },
      methods : {
        sltChicun (indexo) {
          for (let i in this.chosicsXl) {
            this.$refs.chicun[i].style.color = ''
            this.$refs.chicun[i].style.backgroundColor = '#efefef'
          }
          this.$refs.chicun[indexo].style.color = '#fff'
          this.$refs.chicun[indexo].style.backgroundColor = '#000'

          this.changeColor = this.$refs.chicun[indexo].innerText
        },
        sltcolor (indexl) {
          this.smallGoodsImg = this.chosiceSize[indexl].imgUrl
          for (let i in this.chosiceSize) {
            this.$refs.blackColor[i].style.color = ''
            this.$refs.blackColor[i].style.backgroundColor = '#efefef'
          }
          this.$refs.blackColor[indexl].style.color = '#fff'
          this.$refs.blackColor[indexl].style.backgroundColor = '#000'
          this.changeSize = this.$refs.blackColor[indexl].innerText
        },
        close () {
          this.ban = false
        },
        speice () {
          this.ban = true
        },
        clickjian () {
          if (this.numCount < 2) {
            this.numCount == 1
          } else {
            this.numCount --
          }
        },
        clickjia () {
          this.numCount ++
        }
      }
    }
</script>

<style scoped>
  .disSize {
    box-sizing: border-box;
    color: #666;
    font-size: 14px;
    line-height: 20px;
  }

  .cima-list span {
    display: inline-block;
  }

  .jia {
    font-size: 20px;
    color: #858585;
  }

  .neirong {
    width: 30px;
    text-align: center;
    font-size: 1.5rem;
    margin-right: 40px;
  }

  .jian {
    font-size: 20px;
    color: #858585;
    margin-right: 40px;
  }

  .ic-right {
    float: right;
  }

  .ic-item {
    color: #000;
    margin-bottom: 10px;
    font-size: 14px;
  }

  .item-count {
    padding-right: 20px;

  }

  .cml-content {
    float: left;
    width: 60px;
    height: 32px;
    line-height: 32px;
    color: #333;
    background: #efefef;
    border-radius: 4px;
    text-align: center;
    box-sizing: border-box;
    padding: 0 10px;
    margin: 0 10px 10px 0;
  }

  .cima-list {
    overflow: hidden;
  }

  .cima-title {
    color: #000;
    margin-bottom: 10px;
    font-size: 14px;
  }

  .chima {
    padding: 10px 0 1px;
  }

  .sl-sublist {
    overflow: hidden;
  }

  .sl-btn {
    float: left;
    width: 60px;
    height: 32px;
    line-height: 32px;
    color: #333;
    background: #efefef;
    border-radius: 4px;
    text-align: center;
    box-sizing: border-box;
    padding: 0 10px;
    margin: 0 10px 10px 0;
  }

  li {
    list-style: none;
    font-size: 14px;
  }

  .sl-title {
    color: #000;
    margin-bottom: 10px;
  }

  .sku-info {
    margin-left: 15px;
  }

  .clearBoth {
    clear: both;
  }

  .sh-right {
    float: right;
    font-size: 1.4rem;
    color: #000;
    content: "\E65E";
    font-weight: 600;
  }

  .size {
    box-sizing: border-box;
    color: #666;
    font-size: 14px;
    line-height: 20px;
  }

  .kucun {
    color: #666;
    font-size: 14px;
    line-height: 29px;
  }

  .sh-center {
    float: left;
    margin-left: 25%;
    padding-left: 10px;
    padding-top: 2px;
  }

  .sh-price {
    color: red;
    font-size: 2.2rem;
  }

  .sh-left img {
    z-index: 150;
    width: 24.15%;
    min-width: 75px;
    max-width: 105px;
    position: absolute;
    top: -20px;
    left: 10px;
  }

  .sh-left {
    width: 30%;
  }

  .sku-header {
    position: relative;
    padding: 5px 15px 10px;
  }

  .sku-dialog {
    position: absolute;
    width: 100%;
    height: 330px;
    background-color: #fff;
    bottom: 44px;
  }

  .ban {
    background: rgba(0,0,0,.5);
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
  }

  .navImg img{
    width: 100%;
  }

  .detail-img >>> img{
    width: 100%;
  }

  .detail-img {
    width: 100%;
    margin-top: 1rem;
  }

  .gi-contenr {
    padding-left: 10px;
    display: inline-block;
    width: 68%;
    line-height: 30px;
  }

  .mb-11 {
    padding: 0 10px;
    vertical-align: top;
    line-height: 1.8;
  }

  .mb-10 {
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    border-bottom: 1px solid #f0f0f0;
  }

  .goods-info {
    padding: 0 0 12px;
    background: #fff;
    margin-top: 10px;

  }

  .ctalk {
    clear: both;
    line-height: 23px;
    text-align: left;
    margin-top: 5px;
    word-wrap: break-word;
    font-size: 1.4rem;
  }

  .time {
    color: #888;
    font-size: 1.2rem;
    clear: both;
    line-height: 23px;
    text-align: left;
    margin-top: 5px;
    word-wrap: break-word;
  }

  .five {
    display: inline-block;
    float: right;
    text-align: right;
  }

  .name {
    margin-top: 10px;
    margin-left: 5px;
    overflow: hidden;
    font-size: 1.4rem;
  }

  .comment-info {
    float: right;
    width: 89%;
    padding-top: 1.68%;
    color: #4d4d4d;
  }

  .leftImg img {
    width: 37.4px;
    height: 37.4px;
    border-radius: 50%;
  }

  .leftImg {
    width: 10%;
    float: left;
    height: 50px;
    clear: both;
  }

  .clear {
    border-bottom: 1px solid #d9d9d9;
    list-style: none;
    width: 100%;
    padding: 10px 0;
  }

  .cell-wrapper {
    position: relative;
    width: 100%;
    padding: 0 10px;
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    font-size: 16px;
    line-height: 1;
    min-height: inherit;
    overflow: hidden;
  }

  .comment-list {
    background-color: #fff;
    min-height: 48px;
    display: block;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    color: inherit;
    border-bottom: .5px solid #e8e8e8;
  }

  .header-left {
    line-height: 40px;
    float: left;
  }

  .header-right {
    float: right;
    color: #999;
    font-size: 1.3rem;
  }

  .header {
    overflow: hidden;
    position: relative;
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    border-bottom: 1px solid #e8e8e8;
  }

  .user-talk {
    margin-top: 10px;
    background: #fff;
    padding: 0 10px 3px;
  }

  .th1 img{
    width: 60px;
    height: 85.72px;
  }

  .th1 {
    width: 20%;
    height: 100px;
    line-height: 100px;
    float: left;
  }

  .th2 {
    height: 100px;
    color: #333;
    font-size: 1.4rem;
    width: 74%;
    float: left;
    padding: 15px 15px 15px 6px;
    line-height: 32px;
    box-sizing: border-box;
  }

  .componts-logDesc {
    overflow: hidden;
    background: #fff;
    /*padding: 0 10px;*/
    width: 100%;
    margin-top: 10px;
  }

  .wrap {
    background-color: #f0f0f0;

  }

  .sc-u {
    color: black;
  }

  .choice {
    margin-right: 5px;
    color: black;
  }

  .slectSku {
    margin-top: 10px;
    position: relative;
    background: #fff;
    padding: 0 10px;
    height: 44px;
    line-height: 44px;
  }

  .saleInfo {
    border-top: 1px solid #e8e8e8;
    background: #fff;
    padding-left: 10px;
    height: 35px;
    line-height: 35px;
    font-size: 1.3rem;
    color: #666;
  }

  .curPrice {
    vertical-align: top;
    font-size: 2.2rem;
    color: #000;
    margin-right: 5px;
  }

  .price {
    background-color: #fff;
    position: relative;
    padding: 10px 10px 5px;
    line-height: 25px;
    height: 25px;
  }

  .productName {
    position: relative;
    padding: 10px 10px 5px;
    line-height: 25px;
    font-size: 1.5rem;
    color: #333;
    background-color: #fff;
  }

  .wrap {
    margin-top: 44px;
  }

  .swiper-slide img{
    width: 100%;
  }

  .info-wrapper {
    word-break: break-all;
    font-size: 1.4rem;
  }
</style>
