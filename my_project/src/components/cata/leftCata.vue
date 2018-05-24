<template>
  <div class="wrap">
    <div class="wr-left">
      <ul class="wr-content">
        <li @click="tab_list(index)" ref="wr_list" v-for="(i,index) in thisdata">
          {{i.name}}
        </li>
      </ul>
    </div>

    <div class="wr-right">
      <ul class="wrr-content">
        <li @click="isclick(indexOne)" v-for="(x,indexOne) in thisBigData">
          <div class="wl-img">
            <img :src="x.imgUrl" alt="">
          </div>
          <div class="wl-name">{{x.name}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    import Bus from '../../common/js/eventBus'
    export default {

      name: "left-cata",
      data () {
        return {
          thisdata : '',
          thisID : '4',
          thisBigData: '',
          thisThirdJumpID : ''
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
      },
      created () {
        this.$request({
          type : 'GET',
          url: 'api/goodswap/subCtgyList?parentId=4',
          success : function (res) {
            this.thisBigData = res.data.data
            // console.log(res.data.data)
          }
        })
      },
      methods : {
        isclick (indexOne) {
          this.thisThirdJumpID = this.thisBigData[indexOne].id
          this.$router.push({
            path : 'productlist',
            query : {
              jumpID : this.thisThirdJumpID
            }
          })
        },
        tab_list(index) {
          for (let a in this.thisdata) {
            this.$refs.wr_list[a].style.background = '#f0f0f0'
            this.$refs.wr_list[a].style.fontWeight = '600'
            this.$refs.wr_list[a].style.borderLeft = 'none'

          }
          this.$refs.wr_list[index].style.background = '#fff'
          this.$refs.wr_list[index].style.fontWeight = '400'
          this.$refs.wr_list[index].style.borderLeft = 2 + 'px solid #000'
          this.thisID = this.thisdata[index].id
          this.$request({
            type : 'GET',
            url: `api/goodswap/subCtgyList?parentId=${this.thisID}`,
            success : function (res) {
              this.thisBigData = res.data.data
              // console.log(res.data.data)
            }
          })
        }
      }
    }
</script>

<style scoped>
  .wrr-content {

  }

  .wl-img {
    height: 80px;
    text-align: center;
    margin: 0 auto;
  }

  .wl-img img {
    width: 100%;
  }

  .wl-name {
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 1.3rem;
    margin-top: 20px;
  }

  .wrr-content li{
    margin-right: 5px;
    width: 30.5%;
    list-style: none;
    float: left;
    text-align: center;
  }

  .wr-left {
    margin-top: 48px;
    width: 20%;
    max-width: 128px;
    top: 3.5rem;
    bottom: 4.5rem;
    float: left;
    background: #f0f0f0;

  }

  .wr-content li {
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 1.3rem;
  }

  .wr-right {
    background: #fff;
    width: 80%;
    max-width: 512px;
    top: 4rem;
    left: 20%;
    bottom: 5rem;
    float: right;
    margin-top: 50px;
    height: 1440px;
  }
</style>
