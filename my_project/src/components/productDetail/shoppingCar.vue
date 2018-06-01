<template>
    <div class="wrap">
      <div class="header">
        <span class="header-center">购物车</span>
        <span class="header-right"><img src="../../assets/login/dele.png" alt=""></span>
      </div>

      <div class="content">
        <div class="cell-warpper" v-for="i in thisData">
          <li class="cl-item">
            <div class="left-wrapper">
              <div class="left-icon">
                <input type="checkbox" checked="true">
              </div>
              <div class="img-wrapper">
                <img :src="i.imgUrl" alt="">
              </div>
            </div>
            <div class="right-wrapper">
              <p class="rw-name">
                <span class="rwn-title">{{i.name}}</span>
              </p>

              <div class="bottom-wrapper">
                <div class="bw-price" ref="price">￥{{i.totalPrice/100}}</div>

                <span class="sle-font">
                  <span class="reduce">-</span>
                  <input type="number" class="num" :value="i.goodsNum">
                  <span class="add">+</span>
                </span>
              </div>
            </div>
          </li>
        </div>
      </div>

      <div class="bottom">
        <div class="left">
          <span class="zi">
            <input class="jiesuan" type="checkbox" checked="true">
            全选
          </span>
        </div>
        <div class="right">
          <span class="totalMoney">总计￥{{this.totalPrice}}</span>
          <div class="jiesuan-btn">去结算</div>
        </div>
      </div>
      <shoppingCarBottom></shoppingCarBottom>
    </div>
</template>

<script>
  import shoppingCarBottom from '../../components/index/bottom'
    export default {
        name: "shopping-car",
      components : {
        shoppingCarBottom
      },
      data () {
          return {
            thisData : '',
            totalPrice : 0,
            price : '',
            num : ''
          }
      },
      mounted () {
        this.$request({
          type : 'GET',
          url : `api/goodswap/qryGoodsByCart?token=0A5EF47152511E6E7328FCA0212597F4&cart=%7B%22133%22%3A%7B%22goodsId%22%3A%22133%22%2C%22skuId%22%3A0%2C%22goodsNum%22%3A2%2C%22isSelected%22%3Atrue%7D%2C%22163%22%3A%7B%22goodsId%22%3A%22163%22%2C%22skuId%22%3A0%2C%22goodsNum%22%3A1%2C%22isSelected%22%3Atrue%7D%2C%227586_23894%22%3A%7B%22goodsId%22%3A%227586%22%2C%22skuId%22%3A23894%2C%22goodsNum%22%3A1%2C%22isSelected%22%3Atrue%7D%2C%228101_26837%22%3A%7B%22goodsId%22%3A%228101%22%2C%22skuId%22%3A26837%2C%22goodsNum%22%3A1%2C%22isSelected%22%3Atrue%7D%7D`,
          success : function (res) {
            this.thisData = res.data.data.goodsList
            this.price = res.data.data.totalPrice

            for (let i in this.thisData) {
              let shuliang = this.thisData[i].goodsNum
              let price = parseInt(this.thisData[i].totalPrice)
              this.totalPrice += price*shuliang/100
            }
          }
        })


      },
      methods : {

      },
      computed : {
          // reduce : function () {
          //
          // }
      }
    }
</script>

<style scoped>
  .totalMoney {
    color: #fb3180;
    margin-right: 5px;
  }

  .jiesuan-btn {
    display: inline-block;
    width: 100px;
    height: 35px;
    line-height: 35px;
    background: #000;
    border-radius: 3px;
    color: #fff;
    text-align: center;
  }

  .zi {

    font-size: 14px;
    font-style: normal;
  }

  .jiesuan {
    position: relative;
    top: 5px;
    width: 22px;
    height: 22px;
    background-color: black;
    outline: none;
  }

  .left {
    display: inline-block;
    padding-left: 10px;
  }

  .right {
    float: right;
    font-size: 1.6rem;
    margin-right: 10px;
  }

  .bottom {
    position: fixed;
    bottom: 44px;
    max-width: 640px;
    width: 100%;
    height: 44px;
    line-height: 44px;
    background: #fff;
    border-top: 1px solid #eee;
    z-index: 11;
  }

  .add {
    display: inline-block;
    width: 25px;
    height: 25px;
    line-height: 25px;
    border-radius: 50%;
    border: 1px solid #e8e8e8;
    text-align: center;
  }

  .num {
    border: none;
    outline: none;
    width: 30px;
    text-align: center;
    font-size: 1.5rem;
    -webkit-APPearance: none;
  }

  .reduce {
    display: inline-block;
    width: 25px;
    height: 25px;
    line-height: 25px;
    border-radius: 50%;
    border: 1px solid #e8e8e8;
    text-align: center;
  }

  .sle-font {
    float: right;
    color: #000;
  }

  .bw-price {
    float: left;
    color: #000;
    font-size: 1.5rem;
  }

  .bottom-wrapper {
    margin-top: 10px;
    overflow: hidden;
    height: 24px;
    line-height: 24px;
    font-size: 1.4rem;
  }

  .rwn-title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 1.4rem;
    line-height: 22px;
  }

  .rw-name {
    text-align: left;
  }

  .img-wrapper {
    margin-left: 5px;
    display: inline-block;
    position: relative;
    width: 70px;
    height: 70px;
    top: 15px;
  }

  .img-wrapper img {
    width: 80%;
    position: relative;
    top: 10px;
  }

  .left-icon input {
    outline: none;
  }

  .left-icon {
    float: left;
    height: 100px;
  }

  .left-wrapper {
    overflow: hidden;
    float: left;
    height: 100px;
    line-height: 100px;
  }

  .right-wrapper {
    margin-top: 20px;
    overflow: hidden;
    width: 72%;
    float: left;
    height: 100px;
  }

  li {
    list-style: none;
  }

  .cl-item {
    overflow: hidden;
    width: 100%;
    padding: 5px 10px;
    background: #fff;
    height: 110px;
  }

  .cell-warpper {
    position: relative;
    width: 100%;
    padding: 0 10px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 16px;
    line-height: 1;
    min-height: inherit;
    overflow: hidden;
  }

  .content {
    margin-top: 44px;
    background-color: #fff;
    min-height: 48px;
    display: block;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    color: inherit;
    border-bottom: .5px solid #e8e8e8;
  }

  .header-right {
    right: 10px;
    position: absolute;
    height: 44px;
    text-align: right;
    font-size: 1.5rem;
  }

  .header-right img {
    width: 24px;
    position: relative;
    top: 5px;
  }

  .header-center {
    font-size: 1.6rem;
  }

  .header {
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
