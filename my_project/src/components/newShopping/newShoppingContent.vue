<template>
  <div class="wrap">
    <div class="item">
      换新推荐
    </div>

    <div class="content">
      <li class="list-style" v-for="i in first">
        <dl>
          <dt>
            <div class="img"><img :src="i.imgUrl" alt="">
              <div class="sale-out" v-if="i.salesVolume == 0">
                <span>已售空</span>
              </div>
            </div>

            <div class="newstag" v-if="i.tag !== ''">
              <p>今日<br>
                 新品

              </p>
            </div>
          </dt>
          <dd class="name">{{i.name}}
          </dd>
          <dd class="price">
            <b>￥{{i.marketPrice/100}}
            </b>
            <span id="person">{{i.salesVolume}}人付款</span>
          </dd>
        </dl>
      </li>
    </div>
  </div>
</template>

<script>
    export default {
        name: "new-shopping-content",
      data () {
          return {
            first : ''
          }
      },
      mounted () {
        this.$request({
          type : 'GET',
          url: 'api/goodswap/weeknew?pageNo=1',
          success : function (res) {
            this.first = res.data.data
            console.log(this.first)
          }
        })
      }
    }
</script>

<style scoped>
  .content {
    margin-top: 20px;

  }

  #person {
    color: #858585;
    line-height: 1.3rem;
    font-size: 1.3rem;
    margin-left: 4px;
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

  .newstag {
    position: absolute;
    width: 38px;
    height: 38px;
    background: #ff0;
    color: #000;
    border-radius: 50%;
    font-size: .9rem;
    left: 2px;
    top: 2px;
    padding-top: 6px;
    text-align: center;
  }

  .sale-out {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;
    margin-left: -40px;
    margin-top: -40px;
    background: rgba(0,0,0,.5);
    border-radius: 50%;
    color: #fff;
    line-height: 80px;
    text-align: center;
    z-index: 100;
  }

  dt {
    width: 100%;
    text-align: center;

    border-radius: .3rem .3rem 0 0;
    position: relative;
    overflow: hidden;
  }

  .img {
    position: relative;
  }

  .img img {
    width: 100%;
  }

  dl {
    background: #fff;
    padding-bottom: 11px;
    font-size: 14px;
    color: #33383b;
    width: 100%;
  }

  .list-style {
    float: left;
    width: 47%;
    margin-left: 2%;
    margin-bottom: 2%;
    border-radius: 3px;
  }

  .item {
    width: 100%;
    height: 40px;
    background: #000;
    text-align: center;
    line-height: 40px;
    color: #fff647;
    font-size: 14px;

    margin-top: 15px;
  }

  li {
    list-style: none;
  }

  .wrap {
    background-color: #f5f5f5;
  }
</style>
