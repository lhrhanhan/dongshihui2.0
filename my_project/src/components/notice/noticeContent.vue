<template>
    <div class="warp">
     <div class="enent" v-for="(i,index) in first" @click="clicked(index)">
        <div class="eventList">
          <img :src="i.img" alt="">
        </div>
        <div class="title">{{i.title}}</div>
        <div class="time">{{i.uptime}}</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "notice-content",
      data () {
          return {
            first : '',
            thisUrl : ''
          }
      },
      mounted () {
        this.$request({
          type : 'GET',
          url: 'api/newswap/listNews?pageNo=1',
          success : function (res) {
            this.first = res.data.data
            console.log(this.first)
          }
        })
      },
      methods : {
        clicked (index) {
          this.thisUrl = this.first[index].url
          window.location.href = this.thisUrl

        }
      }
    }
</script>

<style scoped>
  .time {
    float: left;
    text-align: right;
    width: 45%;
    font-size: 11px;
    line-height: 48px;
    color: #999;
  }

  .title {
    float: left;
    font-size: 11px;
    line-height: 48px;
    color: #333;
    width: 40%;
  }

  .eventList img{
    width: 69%;

  }

  .eventList {
    width: 15%;
    float: left;
  }

  .warp {
    margin-top: 44px;
    width: 100%;
    height: 736px;

  }

  .enent {
    margin-top: 15px;
    overflow: hidden;
    box-sizing: border-box;
    height: 70px;
    width: 100%;
    padding: 10px 7px 10px 10px;
    background: #fff;
  }
</style>
