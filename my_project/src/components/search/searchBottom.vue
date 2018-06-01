<template>
    <div class="wrap">
      <div class="bottom">
        <ul class="content">
          <li class="left" @click="back">
            <img src="../../assets/login/secBack.png" alt="">
          </li>
          <li class="search">
            <img src="../../assets/login/jingzi.png" alt="">
            <input type="text" placeholder="搜索你喜欢的宝贝" ref="searchContent">
          </li>
          <li class="right" @click="search">搜索</li>
        </ul>
      </div>

      <div class="search-wrapper">
        <div class="search-content">
          <ul class="tag-list">
            <div class="ta-title">热门搜索
              <span id="change" @click="change">换一批</span>
            </div>

            <div class="label-list">
              <span class="hot-list" v-for="i in first">{{i.title}}</span>
            </div>
          </ul>

          <ul class="history-list">
            <div class="hl-title">历史搜索</div>
            <div class="hl-list">
              <p class="no-history">历史记录为空</p>
            </div>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "search-bottom",
      data () {
          return {
            first : '',
            second : '',
            third : '',
            fourth: '',
            fifth : '',
            num : 0
          }
      },
      mounted (){
        this.$request({
          type : 'GET',
          url: 'api/sec/hotsec?',
          success : function (res) {
            this.first = res.data.data.slice(0,12)
            console.log(this.first)
          }
        })
      },
      methods : {
          change () {
            this.num += 1
            this.$request({
              type : 'GET',
              url: 'api/sec/hotsec?',
              success : function (res) {
                let temp2 = 12*this.num-1
                let temp = 12 * this.num
                this.first = res.data.data.slice(this.num,temp)
              }
            })
          },
        search () {
          let a = this.$refs.searchContent.value
          let UrlID = encodeURI(a)
          this.$router.push({
            path : 'searchThird',
            query : {
              thisEnid : UrlID
            }
          })
        },
        back() {
          alert('s')
        }
      }

    }
</script>

<style scoped>
  .no-history {
    color: #858585;
    text-align: center;
    margin-top: 20px;
    font-size: 1.2rem;
  }

  .hl-list {

    color: #858585;
    text-align: center;
    margin-top: 20px;
    font-size: 1.2rem;
  }

  .hl-title {
    margin-left: 15px;
    margin-bottom: 1.5rem;
    font-size: 14px;
    position: relative;
    color: #858585;
  }

  .history-list {
    padding-top: 4.8%;
    border-top: .1rem solid #e0e0e0;
  }

  .hot-list {
    height: 28px;
    min-width: 5.3rem;
    max-width: 100%;
    display: inline-block;
    line-height: 2.8rem;
    padding: 0 1rem;
    box-sizing: border-box;
    background: #f0f0f0;
    color: #000;
    margin: 0 1rem 1rem 0;
    font-size: 1.2rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
  }

  .label-list {
    font-size: 0;
    max-height: 10.4rem;
    overflow: hidden;
  }

  .ta-title {
    position: relative;
    color: #858585;
    font-size: 14px;
  }

  #change {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 1.3rem;
    color: #858585;
    display: block;
  }

  .ta-title {
    margin-bottom: 10px;
    position: relative;
    color: #858585;
  }

  .tag-list {
    margin-bottom: 1.5rem;
    padding: 0 2.67%;
  }

  .search-wrapper {
    background: #fff;
    position: fixed;
    z-index: 99;
    left: 0;
    top: 44px;
    width: 100%;
    height: 100%;
    max-width: 640px;
    margin: 0 auto;
  }

  .search-content {
    padding-top: 4.8%;
  }

  .search input {
    width: 90%;
    margin-top: -1px;
    height: 32px;
    line-height: 32px;
    padding-left: 1.3rem;
    font-size: 1.4rem;
    border: none;
    color: #000;
    text-align: left;
    vertical-align: middle;
    -webkit-appearance: none;
    background: transparent;
    outline: none;
  }

  .search img {
    width: 16px;
    position: absolute;
    top: 8px;
    left: 10px;
  }

  .left img {
    position: relative;
    top: 5px;
  }

  .right {
    width: 10%;
  }

  .search {
    width: 76%;
    top: 6.5px;
    padding-left: .5rem;
    height: 32px;
    line-height: 32px;
    background: #fff;
    position: relative;
  }

  .left {
    position: relative;
    width: 12%;
  }

  li {
    height: 44px;
    line-height: 44px;
    float: left;
    font-size: 1.5rem;
    list-style: none;
  }

  .content {
    height: 44px;
    background: #010101;
    text-align: center;
    color: #fff;
  }

  .bottom {
    position: fixed;
    z-index: 110;
    left: 0;
    top: 0;
    width: 100%;
    max-width: 640px;
  }
</style>
