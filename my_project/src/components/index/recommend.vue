<template>
    <div class="wrap">
      <p v-for="i in threeData"><img :src="i.img" alt=""></p>
    </div>
</template>

<script>
    export default {
        name: "recommend",
      data () {
          return {
            threeData
          }
      },
      mounted () {
        this.$request({
          type: 'GET',
          url: 'api/adwap/loadAds?adids=1%7C2%7C3%7C4%7C5',
          success: function (res) {
            this.threeData = res.data.data.slice(0,3)
          }
        })
      }
    }
</script>

<style scoped>
  .wrap {
    width: 100%;
    background: #fff;
    overflow: hidden;
  }

  .wrap p {
    width: 33.3%;
    float: left;
    border-right: 1px solid #f0f0f0;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
  }

  .wrap p img {
    width: 100%;
  }
</style>
