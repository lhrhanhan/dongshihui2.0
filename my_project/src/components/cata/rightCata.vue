<template>
    <div class="wrap">
      <ul class="content">
        <li class="list" v-for="i in thisBigData">
          <div class="list-img"><img :src="i.imgUrl" alt=""></div>
          <div class="list-p">{{i.name}}</div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "right-cata",
      data () {
        return {
          thisBigData : ''
        }
      },
      mounted () {
          this.$request({
            type : 'GET',
            url: 'api/goodswap/subCtgyList?parentId=4',
            success : function (res) {
              this.thisBigData = res.data.data
            }
          })
      }

    }
</script>

<style scoped>
  .list-p {
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 1.3rem;

  }
  .list-img img{
    width: 100%;
    height: 101px;
  }

  .list-img {
    display: block;
    height: 100%;
    margin: 0 auto;
  }

  .list{
    margin-right: 5px;
    width: 30.5%;
    list-style: none;
    float: left;
    text-align: center;
  }

  li {
    list-style: none;
  }

  .wrap {
    background: #fff;
    width: 80%;
    max-width: 512px;
    top: 4rem;
    left: 20%;
    bottom: 5rem;
    float: right;
  }
</style>
