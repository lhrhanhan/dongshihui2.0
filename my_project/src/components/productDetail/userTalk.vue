<template>
    <div class="wrap">
      <div class="headBar">
        <span class="left" @click="back"><img src="../../assets/login/secBack.png" alt=""></span>
        <span class="center">评价({{num}})</span>
      </div>

      <div class="content">
        <div class="content-list" v-for="i in thisdata">
          <div class="cell-wrapper">
            <li class="clear">
              <div class="leftImg">
                <div class="comment-avatar"><img :src="i.avator" alt=""></div>
              </div>

              <div class="commit-info">
                <p class="col-100">
                  <span class="name">{{i.userName}}</span>
                  <span class="star">★★★★★</span>
                </p>

                <p class="col-88">{{i.createTime}}</p>

                <p class="talk">{{i.content}}</p>

                <div class="uesrImg" v-for="x in i.pictures">
                  <img :src="x" alt="">
                </div>
              </div>
            </li>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "user-talk",
      data () {
          return {
            thisdata : '',
            num : '',
            thisUserID : this.$route.query.thisUserID
          }
      },
      mounted () {
        this.$request({
          type : 'GET',
          url : `api/goodswap/queryComment?goodsId=${this.thisUserID}&pageNo=1`,
          success : function (res) {
            this.thisdata = res.data.data
            this.num = res.data.total_count
          }
        })
      },
      methods : {
        back () {
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>
  .uesrImg {
    width: 80%;
    margin-top: 12px;
  }

  .uesrImg img {
    width: 32%;
  }

  .talk {
    margin-top: 5px;
    word-wrap: break-word;
    clear: both;
    line-height: 23px;
    text-align: left;
    font-size: 1.4rem;
    color: #4d4d4d;
  }

  .col-88 {
    margin-top: 5px;
    word-wrap: break-word;
    clear: both;
    line-height: 23px;
    text-align: left;
    color: #888;
    font-size: 1.2rem;
  }

  .star {
    float: right;
  }

  .commit-info {
    float: right;
    width: 89%;
    padding-top: 1.68%;
    color: #4d4d4d;
  }

  .col-100 {
    line-height: 23px;
    text-align: left;
    clear: left;
    top: -20px;
  }

  .name {
    font-size: 1.4rem;
  }

  .comment-avatar {
    float: left;
    width: 37.4px;
  }

  .comment-avatar img{
    width: 100%;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    background: no-repeat 50%;
    background-size: cover;
    position: relative;
    overflow: hidden;
  }

  li {
    list-style: none;
  }

  .clear {
    width: 100%;
    padding: 10px 0;
  }

  .cell-wrapper {
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

  .content-list {
    background-color: #fff;
    min-height: 48px;
    display: block;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    color: inherit;
    border-bottom: .5px solid #e8e8e8;
  }

  .content {
    margin-top: 44px;
  }

  .center {
    font-size: 1.6rem;
  }

  span {
    display: inline-block;
  }

  .left {
    position: absolute;
    left: 10px;
    top: 5px;
    height: 44px;
    text-align: left;
    width: 44px;
  }

  .wrap {
    height: 100%;
    background: #fff;
    overflow: hidden;
    padding: 0 10px;
  }

  .headBar {
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
