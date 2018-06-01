<template>
  <div class="wrap">
    <div class="header">
      <div class="headerLeft" @click="back">
        <img src="../../assets/login/back.png" alt="">
      </div>
      <div class="headerCenter">
        <span>快速登录</span>
      </div>
      <div class="headerRight"></div>
    </div>
    <div class="content">
      <div class="tel">
        <input type="text" placeholder="手机号" ref="phone">
      </div>
      <div class="password">
        <input type="password" placeholder="密码" ref="pwd">
      </div>
    </div>
    <div class="footer">
      <input type="button" value="登录" @click="clogin">
    </div>

    <div class="last">
      <p class="last_left">忘记密码</p>
      <p class="last_right">注册</p>
    </div>
  </div>
</template>

<script>
    export default {
      name: "login",
      data () {
        return {
          isCookies : ''
        }
      },
      mounted () {
        if (this.isCookies.cnName != null) {
          document.cookie = 'token:'+ '38684B57F4B691182815377185C900FB'
        }
      },
      methods : {
        back () {
          this.$router.go(-1)
        },
        clogin () {
          let ph = ''
          let pw = ''
          ph = this.$refs.phone.value
          pw = this.$refs.pwd.value
          let myreg=/^[1][3,4,5,7,8][0-9]{9}$/
          if (!myreg.test(ph)) {
            alert('请输入正确的手机号')
            return false
          } else if (pw.length < 6) {
            alert('请输入长度为6位以上的密码')
            return false
          }
          else {
            this.$router.push({
              path : 'userCenter',
            })
            this.$request({
              type : 'GET',
              url : `api/user/login?userName=${ph}&passWord=38684B57F4B691182815377185C900FB`,
              success : function (res) {
                this.isCookies = res.data.data
                document.cookie = "token" + "=" + "38684B57F4B691182815377185C900FB" + "; " + "11";
              }
            })

          }
        }
      }
    }
</script>

<style scoped>
  .header{
    background: #fff;
    color: #000;
    border-bottom: 1px solid #e8e8e8;
    height: 44px;
    box-shadow: 0 2px 3px rgba(0,0,0,.12);
    overflow: hidden;
  }

  .headerLeft {
    width: 10%;
    text-align: center;
    padding-top: 7px;
    float: left;
  }

  .headerLeft img {
    width: 30px;
  }

  .headerCenter {
    float: left;
    width: 80%;
    text-align: center;
    padding-top: 10px;
  }

  .headerCenter span {
    font-size: 1.6rem;
  }

  .headerRight {
    float: left;
  }

  .content{
    padding-top: 50px;
    width: 80%;
    margin: 0 auto;
  }

  .tel {
    width: 100%;
  }

  .tel input {
    width: 100%;
    height: 48px;
    padding: 0 1rem;
    box-sizing: border-box;
    vertical-align: middle;
    font-size: 1.6rem;
    border: 1px solid black;
    outline: none;
  }

  .password{
    width: 100%;
    margin-top: 20px;
  }

  .password input {
    width: 100%;
    height: 48px;
    padding: 0 1rem;
    border: none;
    box-sizing: border-box;
    vertical-align: middle;
    font-size: 1.6rem;
    border: 1px solid black;
    outline: none;
  }

  .footer {
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
  }

  .footer input {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-size: 1.6rem;
    background: #000;
    border-radius: 3px;
    border: none;
    outline: none;
  }

  .last {
    margin: 0 auto;
    width: 80%;
    overflow: hidden;
  }

  .last_left {
    float: left;
    line-height: 50px;
    font-size: 1.2rem;
    color: #999;
  }

  .last_right {
    float: right;
    line-height: 50px;
    font-size: 1.2rem;
    color: #999;
  }

</style>
