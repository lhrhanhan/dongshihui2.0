<template>
  <div class="wrap">
    <div class="list" @click="clicked(index)" v-for="(i,index) in thisdata">
      <div class="wrap-left">
        <div class="wl-img">
          <img :src="i.imgUrl" alt="">
          <span class="empty" v-if="i.inventory == '0'">已售空</span>
        </div>
      </div>

      <div class="wrap-right">
        <div class="wr-content">
          <p class="name">{{i.name}}</p>
          <p class="price">￥{{i.marketPrice/100}}
            <span class="person">{{i.salesVolume}}人付款</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "third-content",
    data () {
      return {
        thisdata : '',
        second : '',
        third : '',
        thisUrlID : '',
        thisUrlEn : this.$route.query.thisEnid
      }
    },
    mounted () {

      this.$request({
        type : 'GET',
        url : `api/sec/goods?kw=${this.thisUrlEn}&sort=&pageNo=1`,
        success : function (res) {
          this.thisdata = res.data.data
        }
      })
    },
    methods : {
      clicked (index) {
        this.thisUrlID = this.thisdata[index].id
        this.$router.push({
          path : 'productDetail',
          query : {
            thisPrID : this.thisUrlID
          }
        })
      }
    }
  }
</script>

<style scoped>
  .person {

    color: #858585;
    line-height: 1.3rem;
    font-size: 1.3rem;
  }

  .price {
    margin-top: 8px;
    color: #000;
    font-size: 1.8rem;
    word-break: break-all;
  }

  .name {
    color: #000;
    line-height: 20px;
    font-size: 14px;
    overflow: hidden;
  }

  .wr-content {
    padding: 10px 0 0 10px;
  }

  .wrap-right {
    float: left;
    width: 69.6%;
    position: relative;
    overflow: hidden;
    margin-top: 15px;
  }

  .empty {
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
    font-size: 14px;
  }

  .wrap-left {
    width: 25%;
    float: left;
    border-radius: .3rem .3rem 0 0;
    margin-left: 15px;
    margin-top: 10px;
  }

  .wl-img img {
    width: 100%;
  }

  .wl-img {
    position: relative;
    overflow: hidden;
  }

  .wrap {
    margin-top: 88px;
  }

  .list {
    width: 100%;
    overflow: hidden;
  }


</style>
