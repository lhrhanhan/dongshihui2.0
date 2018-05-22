<template>
    <div class="wrap">
      <ul class="wrap-list">
        <li class="list-item" v-for="i in thisDiscoverData">
          <div class="top-wapper">
            <img :src="i.tpcauthor.headpic" alt="">
            <p class="top-font">
              <span class="name">{{i.tpcauthor.nickname}}</span><span class="time">{{i.uptime}}</span>
            </p>
          </div>

          <h2>
            <span class="notice-tip">{{i.title}}</span>
          </h2>

          <p class="recommended-content">{{i.content}}</p>

          <div>
            <div class="img-list">
              <img v-for="x in i.tpcpicList" class="is-img" :src="x.picurl" alt="">
            </div>
          </div>

          <div class="summary">
            <span class="sum-img"><img :src="i.rpicurl" alt=""></span>
            <p class="sum-font"><span>{{i.rtitle}}</span></p>
          </div>

          <div class="praise-share">
            <p class="praise">
              <span class="zan"><img src="../../assets/index/zan.png" alt=""></span><span class="zan-shuliang">{{i.tpczan.zan}}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "dis-content",
      data () {
        return {
          thisDiscoverData : '',
          thisDiscoverImg : ''
        }
      },
      mounted () {
          this.$request({
            type : 'GET',
            url : 'api/tpcwap/list?pageNo=1&token=1749E36AE0953C71B2B848744D74',
            success : function (res) {
              this.thisDiscoverData = res.data.data
            }
          })
      }
    }
</script>

<style scoped>
  li {
    margin-top: 10px;
  }

  .is-img {
    width: 126px;
    margin-left: 5px;
  }

  .zan img {
    position: relative;
    top: 7px;
  }

  .zan {
    font-family: iconfont;
    font-size: 16px;
    font-style: normal;
  }

  .zan-shuliang {
    margin-left: .3rem;
    display: inline-block;
    position: relative;
    font-size: 1.6rem;
  }

  .praise {
    text-align: right;
  }

  .praise-share {
    margin-top: 1rem;
    border-top: 1px solid #e8e8e8;
    font-size: 1.4rem;
    text-align: right;
    padding: .5rem .5rem .5rem 1rem;
  }

  .sum-font span {
    font-size: 1.4rem;
    font-weight: 600;
  }

  .sum-font {
    margin: 0 1rem 0 5rem;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 3.5rem;
  }
  .sum-img img{
    width: 35px;
    height: 35px;
  }

  .sum-img {
    display: block;
    width: 3.5rem;
    height: 3.5rem;
    background: no-repeat 50%;
    background-size: cover;
    margin-left: .8rem;
    float: left;
  }

  .summary {
    display: block;
    margin-top: .5rem;
    overflow: hidden;
    background: #f0f0f0;
    padding: .5rem 0;
  }

  .img-list span {
    display: block;
    width: 32%;
    margin: .35rem 2% 0 0;
    float: left;
    background: no-repeat 50%;
    position: relative;
    overflow: hidden;
    background-size: cover;
  }

  .img-list {
    margin: 0px 0%;
    width: 100%;
  }

  .recommended-content {
    font-size: 1.4rem;
    margin-top: .5rem;
    color: #4d4d4d;
    width: 100%;
    word-wrap: break-word;
    overflow: hidden;
    line-height: 20px;
  }

  .notice-tip {
    font-size: 1.1rem;
    line-height: 1.5rem;
    color: red;
    padding: 0 .3rem;
    border: 1px solid red;
    margin: 2px 4px 0 0;
    float: left;
    text-align: center;
    overflow: hidden;
  }

  h2 {
    width: 100%;
    font-weight: 500;
    color: #000;
    line-height: 2rem;
    height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: .8rem;
  }

  .name {
    display: block;
    font-size: 1.6rem;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .time {
    display: block;
    font-size: 1.2rem;
    color: #858585;
  }

  .top-font {
    position: absolute;
    top: 0;
    left: 4.5rem;
    width: 51%;
    line-height: 2rem;
    height: 2rem;
  }

  .top-wapper img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  .top-wapper {
    position: relative;
    height: 4rem;
  }

  .list-item {
    position: relative;
    background: #fff;
    padding: 1rem 1rem 0;
  }

  .wrap {
    margin-top: 45px;
    margin-bottom: 60px;
  }
</style>
