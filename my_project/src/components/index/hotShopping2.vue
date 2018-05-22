<template>
    <div class="wrap">
      <div class="wrap">
        <ul @click="isclick(index)" class="hot-Item" v-for="(i,index) in second">
          <li class="img-topImg"><img :src="i.img" alt=""></li>
          <li class="title">{{i.title}}</li>
          <li class="sub-title">{{i.subtitle}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "hot-shopping2",
      data () {
          return {
            second : '',
            jumpUrl : ''
          }
      },
      mounted () {
        this.$request({
          type: 'GET',
          url: 'api/adwap/loadAdsByPadid?padid=6&pageNo=2',
          success: function (res) {
            this.second = res.data.data
          }
        })
      },
      methods : {
          isclick (index) {
            this.jumpID = this.second[index].adid
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

  .img-topImg img {
    width: 100%;
  }

  .img-topImg {
    margin-bottom: 10px;
  }

  .hot-Item {
    padding-left: 1rem;
    padding-right: 1rem;
    border-top: .1rem solid #e0e0e0;
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: .1rem solid #e0e0e0;
  }

  .wrap {
    background-color: #fff;
    padding: 1.8rem 0;
    margin-bottom: 15px;
  }

  .p-title {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 20px;
  }
</style>
