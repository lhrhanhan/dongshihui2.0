<template>
    <div class="wrap">
      <ul class="ss">
        <li v-for="i in thisdata">{{i.name}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "left-cata",
      data () {
        return {
          thisdata : ''
        }
      },
      mounted () {
          this.$request({
            type : 'GET',
            url : 'api/goodswap/allCtgy?',
            success : function (res) {
              this.thisdata = res.data.data
            }
          })
      }

    }
</script>

<style scoped>
  li {

    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 1.3rem;
  }

  .ss {
    overflow: auto;
    min-height: 100%;
    width: 100%;
  }

  .wrap {
    height: 1251px;
    position: fixed;
    width: 20%;
    max-width: 128px;
    top: 3.5rem;
    bottom: 4.5rem;
    float: left;
    background: #f0f0f0;
  }
</style>
