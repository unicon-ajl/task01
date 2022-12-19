<template>
  <div class="login-container">
    <!-- 顶部图片区域 -->
    <div class="top-img">
      <img src="../assets/images/xyd.png" alt="" />
      <van-icon name="cross" />
      <p class="top-text">使用用户名登录</p>
    </div>

    <!-- 登录表单 -->
    <div class="login-box">
      <van-form @submit="onSubmit">
        <div class="user-box">
          <p>用户名</p>
          <van-field
            class="field-box"
            name="用户名"
            placeholder="请输入您的用户"
          />
        </div>
        <div class="pwd-box">
          <p>密码</p>
          <van-field
            class="field-box"
            type="password"
            name="密码"
            placeholder="请输入密码"
          />
        </div>
        <div class="btn-box">
          <van-button round block type="info" native-type="submit">登录</van-button>
          <p>忘记密码</p>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'logIn',
  components: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="less">
// 顶部图片区域
.top-img {
  width: 100%;
  box-sizing: border-box;
  height: 220px;
  img {
    display: inline-block;
    width: 100%;
    height: 58.6667vw;
  }
  position: relative;
  z-index: 999;
}

.top-img > .van-icon-cross {
  position: absolute;
  top: 9.3333vw;
  left: 4vw;
  color: #ffffff;
}

.top-text {
  position: absolute;
  top: 37.8667vw;
  left: 10.9333vw;
  color: #bfcdf6;
  font-size: 4vw;
}

// 登录表单区域
.login-box {
  width: 100%;
  height: 122.9333vw;
  background-color: #ffffff;
  margin-top: -3.4667vw;
  position: relative;
  z-index: 1001;
  border-top-left-radius: 2.6667vw;
  border-top-right-radius: 2.6667vw;
  padding: 0 10.4vw;
  box-sizing: border-box;
  padding-top: 12.8vw;
  p {
    font-size: 5.0667vw;
    font-weight: bold;
    color: #333;
    margin-bottom: 3.7333vw;
  }
  .field-box {
    box-sizing: border-box;
  }
}

p {
  margin: 0;
}

.pwd-box {
  margin-top: 9.0667vw;
}

.van-cell {
  font-size: 4vw;
  padding: 0 0.2667vw 0;
  color: #c5c5c5;
}

/deep/ .van-field__body {
  border-bottom: 1px solid #c5c5c5;
}

// 按钮区域
.btn-box {
  margin-top: 16.5333vw;
  font-size: 4.2667vw;
  font-weight: bold;
  .van-button--info {
    width: 301px;
    height: 44px;
    background: linear-gradient(-45deg, #3979ff, #1778fb);
    box-shadow: 0px 4px 8px 0px rgba(114, 154, 241, 0.7);
  }
  p {
    color: #666666;
    font-weight: normal;
    font-size: 3.7333vw;
    margin-top: 6.9333vw;
    text-align: right;
  }
}
</style>
