<template>
  <div class="wrap">
    <p class="p-title">超值热卖</p>

    <ul class="hot-Item" @click="clicked(index)" v-for="(i,index) in first">
      <li class="img-topImg"><img :src="i.img" alt=""></li>
      <li class="title">{{i.title}}</li>
      <li class="sub-title">{{i.subtitle}}</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "hot-shopping",
      data () {
          return {
            first : '',
            jumpID : ''
          }
      },
      mounted () {
          this.$request({
            type : 'GET',
            url: 'api/adwap/loadAdsByPadid?padid=6&pageNo=1',
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
  }

  .p-title {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 20px;
  }
</style>
