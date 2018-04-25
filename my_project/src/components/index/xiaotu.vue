<template>
    <div class="wrap">
      <div class="Buy-wapper">
        <img :src="xiaotu.imgUrl" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: "xiaotu",
      data () {
          return {
            xiaotu: ''
          }
      },
      mounted () {
        this.$request({
          type: 'GET',
          url: 'api/activityWap/one?token=',
          success: function (res) {
            this.xiaotu = res.data.data
          }
        })
      }
    }
</script>

<style scoped>
  .Buy-wapper {
    position: relative;
    width: 100%;
    background: #fff;
    box-shadow: 0 2px 3px rgba(0,0,0,.12);
    height: 115px;
  }

  .Buy-wapper img {
    width: 100%;
  }
</style>
