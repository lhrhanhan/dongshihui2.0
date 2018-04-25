<template>
    <div class="wrap">
      <ul class="content" v-for="i in firstData">
        <li class="title">{{i.title}}</li>
        <li class="sub-title">{{i.summary}}</li>
        <li class="img-title"><img :src="i.img" alt=""></li>
      </ul>


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
        this.$request({
          type: 'GET',
          url: 'api/adwap/loadAds?adids=1%7C2%7C3%7C4%7C5',
          success: function (res) {
            this.firstData = res.data.data.slice(3,5)
            // console.log(this.firstData)
          }
        })
      }
    }
</script>

<style scoped>
  .wrap {
    background-color: #fff;
    padding: 1rem 0;
    overflow: hidden;
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
