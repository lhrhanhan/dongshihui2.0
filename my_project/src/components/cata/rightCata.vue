<template>
    <div class="wrap">
      <ul class="wr-ul">
        <li class="active-list" @click="isclick" v-for="(i,index) in thisBigData">
          <div class="act-img"><img :src="i.imgUrl" alt=""></div>
          <div class="acl-name">{{i.name}}</div>
        </li>
      </ul>
    </div>
</template>

<script>
    import Bus from '../../common/js/eventBus'
    export default {
        name: "right-cata",
      data () {
        return {
          thisBigData : '',
          thisLeftID : '4'
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
      },
      methods : {
        isclick (index) {
            alert('s')
        }
      }
    }
</script>

<style scoped>
  .wrap {
    margin-top: 30px;
    /*position: fixed;*/
    background: #fff;
    width: 80%;
    max-width: 512px;
    top: 4rem;
    left: 20%;
    bottom: 5rem;
    float: right;
  }

  .wr-ul {
    overflow: hidden;
  }

  .wr-ul li {
    margin-right: 5px;
    width: 30.5%;
    list-style: none;
    float: left;
    text-align: center;
  }

  .act-img {
    height: 80px;
    text-align: center;
    margin: 0 auto;
  }

  .act-img img {
    width: 100%;
  }

  .acl-name {
    margin-top: 20px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 1.3rem;
  }
</style>
