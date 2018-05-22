<template>
    <div class="wrap">
      <ul>
        <li class="item" @click="clicked(index)" v-for="(i,index) in first">
          <div class="it-img">
            <img :src="i.img" alt="">
          </div>

          <div class="it-font">
            {{i.title}}
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "big-shopping-content",
      data () {
          return {
            first : '',
            jumpID : ''
          }
      },
      mounted () {
        this.$request({
          type : 'GET',
          url: 'api/adwap/loadAdsByPadid?padid=4&pageNo=1',
          success : function (res) {
            this.first = res.data.data
          }
        })
      },
      methods : {
         clicked (index) {
           this.jumpID = this.first[index].adid
           this.$router.push({
             path : 'secondHtml',
             query : {
               adiD : this.jumpID
             }
           })
         }
      }
    }
</script>

<style scoped>
  .wrap {
    margin-top: 44px;
  }

  .item {
    list-style: none;
    float: left;
    text-align: center;
    position: relative;
    background: #fff;
    width: 33%;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }

  .item img{
    width: 65%;
    height: 92.48px;
  }

  .it-font {
    height: 30px;
    line-height: 30px;
    font-size: 1.4rem;
  }
</style>
