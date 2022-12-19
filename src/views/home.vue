<template>
  <div class="home-container">
    <!-- 底部导航栏 -->
    <Tabbar></Tabbar>
    <!-- 顶部今日账单 -->
    <div class="top-order">
      <!-- 今日账单标题 -->
      <div class="order-title">
        <div class="title-left">
          <span>今日账单</span>
          <img src="../assets/images/home/eye.png" alt="" />
        </div>
        <div class="title-right">
          <img src="../assets/images/home/replay.png" alt="" />
          <span>刷新</span>
        </div>
      </div>

      <!-- money区域 -->
      <div class="order-money">
        <span>100,000,000</span>
        <span>含手续费0.00元</span>
      </div>

      <!-- 交易数量区域 -->
      <div class="order-num">今日交易<span> 10000 </span>笔</div>

      <!-- 积分区域 -->
      <div class="order-integral">
        <div class="integral-left">
          <span class="text">今日积分：</span>
          <span class="num">50,000</span>
        </div>
        <div class="integral-right">
          <button>领取</button>
        </div>
      </div>
    </div>

    <!-- 订单交易区域 -->
    <div class="order-deal">
      <div class="scan-pay">
        <div>
          <img src="../assets/images/home/scanPay.png" alt="" />
        </div>
        <p>扫码收款</p>
      </div>
      <div class="receipt-code">
        <div>
          <img src="../assets/images/home/receiptCode.png" alt="" />
        </div>
        <p>收款码</p>
      </div>
      <div class="quota-code">
        <div>
          <img src="../assets/images/home/quoteCode.png" alt="" />
        </div>
        <p>定额码</p>
      </div>
    </div>

    <!-- 功能导航区域 -->
    <div class="order-nav">
      <van-swipe width="100vw" height="75.2vw">
        <van-swipe-item
          style="width: 100vw; height: 75.2vw; display: flex; flex-wrap: wrap"
        >
          <div class="nav-item" v-for="(item, index) in navItems" :key="index">
            <div>
              <img :src="item.imgSrc" alt="" />
            </div>
            <span>{{ item.name }}</span>
          </div>
        </van-swipe-item>
        <!-- 导航底部区域 -->
        <van-swipe-item>2232</van-swipe-item>
      </van-swipe>
    </div>

    <!-- 广告区域 -->
    <div class="order-advertising">
      <img src="../assets/images/home/advertising.png" alt="" />
    </div>

    <!-- 公告区域 -->
    <div class="order-notice">
      <div class="notice-logo">
        <img src="../assets/images/home/notice.png" alt="" />
        <p>公告</p>
      </div>
      <div class="notice-text">
        <p>
          <span class="title">[系统公告]</span> 信雅达 信雅达 信雅达 信雅达
          信雅达 信雅达
        </p>
        <span class="time">一分钟前</span>
      </div>
      <div class="notice-arrow">
        <van-icon name="arrow" />
      </div>
    </div>

    <!-- 我的活动 -->
    <div class="my-activity">
      <div class="activity-header">
        <div class="left">
          <img src="../assets/images/home/activity.png" alt="" />
          <span>我的活动</span>
        </div>
        <div class="seeMore">
          <span>查看详情</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="activity-content">
        <div
          class="content-item"
          v-for="(item, index) in activeItems"
          :key="index"
        >
          <div>
            <img :src="item.imgSrc" alt="" />
            <span>{{ item.name }}</span>
          </div>
          <p>{{ item.num }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
export default {
  name: 'myHome',
  components: {
    Tabbar
  },
  data() {
    return {
      // 导航区域数据
      navItems: [
        {
          imgSrc: require('../assets/images/home/orderQuery.png'),
          name: '订单查询'
        },
        {
          imgSrc: require('../assets/images/home/preAuthorization.png'),
          name: '预授权查询'
        },
        {
          imgSrc: require('../assets/images/home/shopRanking.png'),
          name: '门店排行'
        },
        {
          imgSrc: require('../assets/images/home/clerkRanking.png'),
          name: '店员排行'
        },
        {
          imgSrc: require('../assets/images/home/clerkManage.png'),
          name: '店员管理'
        },
        {
          imgSrc: require('../assets/images/home/integralConversion.png'),
          name: '积分兑换'
        },
        {
          imgSrc: require('../assets/images/home/campaign.png'),
          name: '营销活动'
        },
        {
          imgSrc: require('../assets/images/home/couponManage.png'),
          name: '优惠券管理'
        },
        {
          imgSrc: require('../assets/images/home/creditCard.png'),
          name: '信用卡'
        }
      ],
      // 活动区域数据
      activeItems: [
        {
          imgSrc: require('../assets/images/home/underway.png'),
          name: '进行中',
          num: 100
        },
        {
          imgSrc: require('../assets/images/home/times.png'),
          name: '参与次数',
          num: 100000
        },
        {
          imgSrc: require('../assets/images/home/expenditure.png'),
          name: '活动总经费',
          num: '￥' + '10,000,000'
        },
        {
          imgSrc: require('../assets/images/home/remainExpenditure.png'),
          name: '剩余经费',
          num: '￥' + '1,000,000'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
// 主页容器
.home-container {
  background: #eff2f7;
  height: 100%;
  padding-bottom: 111.3333vw;
}

// 顶部今日账单区域
.top-order {
  background: linear-gradient(to bottom, #1778fb 43%, #1778fb 92%, #fff 100%);
  height: 64.5333vw;
}

.order-title {
  padding-top: 4.2667vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.order-title > .title-left {
  margin-left: 3.4667vw;
  span {
    color: #fefefe;
    font-size: 4.8vw;
    margin-right: 2.6667vw;
  }
  img {
    width: 3.2vw;
    height: 2.1333vw;
  }
}

.order-title > .title-right {
  margin-right: 4vw;
  display: flex;
  align-items: center;
  img {
    width: 2.9333vw;
    height: 4vw;
    margin-right: 2.1333vw;
  }
  span {
    color: #fff;
    font-size: 3.4667vw;
  }
}

// money区域
.order-money {
  margin-top: 8vw;
  padding: 0 4vw;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :nth-child(1) {
    font-size: 8vw;
    font-weight: bold;
  }
}

// 交易数量
.order-num {
  color: #cddcfe;
  font-size: 3.7333vw;
  margin: 2.4vw 0 6.1333vw 4.2667vw;
  span {
    color: #fecd65;
  }
}

// 积分区域
.order-integral {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .integral-left {
    margin-left: 4.2667vw;
    font-size: 3.7333vw;
    .text {
      color: #cddcfe;
    }
    .num {
      color: #ffffff;
      font-size: 4.2667vw;
    }
  }
  .integral-right {
    margin-right: 4vw;
    button {
      background-color: #ffc843;
      width: 16.5333vw;
      height: 6.9333vw;
      border-radius: 5.3333vw;
      border: none;
      font-size: 3.7333vw;
      color: #fff;
    }
  }
}

// 订单交易区域
.order-deal {
  width: 92vw;
  height: 22.1333vw;
  background: linear-gradient(0deg, #ffffff, #edf5ff);
  box-shadow: 0px 0px 15px 0px rgba(9, 25, 59, 0.15);
  border-radius: 8px;
  margin: 0 4vw;
  margin-top: 5.6vw;
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding-top: 4.2667vw;
  box-sizing: border-box;
  position: absolute;
  top: 47.4667vw;
  img {
    width: 8vw;
    height: 7.4667vw;
  }
  p {
    font-size: 3.4667vw;
    color: #666666;
    margin: 0;
    margin-top: 1.3333vw;
  }
}

// 订单导航区域
.order-nav {
  // box-sizing: border-box;
  padding: 0 4.2667vw;
  display: flex;
  flex-wrap: wrap;
  padding-top: 10.6667vw;
  background-color: #fff;
  margin-bottom: 1.8667vw;
  height: 85.8667vw;
  .nav-item {
    box-sizing: border-box;
    text-align: center;
    padding-bottom: 4vw;
    position: relative;
    div {
      width: 8.5333vw;
      height: 8.5333vw;
      text-align: center;
      margin: 5.0667vw 10.9333vw 2.1333vw 10.9333vw;
    }
    img {
      width: 8.5333vw;
      height: 8.5333vw;
    }
    span {
      color: #666666;
      font-size: 3.4667vw;
    }
  }
}

// 1、2、4、5、7、8 右边框
.nav-item:nth-child(1)::after,
.nav-item:nth-child(2)::after,
.nav-item:nth-child(4)::after,
.nav-item:nth-child(5)::after,
.nav-item:nth-child(7)::after,
.nav-item:nth-child(8)::after {
  content: '';
  height: 15.7333vw;
  border-left: 1px solid #f5f6f7;
  position: absolute;
  top: 5.0667vw;
  right: 0;
}

// 1、2、3、4、5、6 下边框
.nav-item:nth-child(1)::before,
.nav-item:nth-child(2)::before,
.nav-item:nth-child(3)::before,
.nav-item:nth-child(4)::before,
.nav-item:nth-child(5)::before,
.nav-item:nth-child(6)::before {
  content: '';
  width: 15.7333vw;
  border-top: 1px solid #f5f6f7;
  position: absolute;
  left: 7.4667vw;
  bottom: 0;
}

/deep/ .van-swipe .van-swipe__indicators {
  bottom: 5.0667vw;
}

// 广告区域
.order-advertising {
  width: 100%;
  img {
    width: 100%;
  }
  // margin-bottom: 1.8667vw;
}

// 公告区域
.order-notice {
  background: #fff;
  padding: 0 4vw;
  display: flex;
  align-items: center;
  margin-bottom: 1.8667vw;
  .notice-logo {
    padding-right: 1.8667vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #1778fb;
    margin-right: 4vw;
    img {
      display: block;
      width: 3.7333vw;
      height: 3.7333vw;
      margin-right: 1.6vw;
    }
    p {
      display: inline-block;
      width: 11.2vw;
      height: 4.2667vw;
      font-size: 21px;
      font-family: YouSheBiaoTiHei;
      font-weight: bold;
      color: #1778fb;
      line-height: 15px;
    }
  }
  .notice-text {
    position: relative;
    p {
      margin: 4.5333vw 0;
      color: #888888;
      line-height: 6.6667vw;
      font-size: 3.7333vw;
      .title {
        color: #666666;
        font-weight: bold;
        letter-spacing: 0.2667vw;
      }
    }
    .time {
      position: absolute;
      right: 0;
      bottom: 4.5333vw;
      font-size: 3.7333vw;
      color: #1778fb;
      font-weight: bold;
      line-height: 5.3333vw;
    }
  }
  .notice-arrow {
    margin-left: 3.4667vw;
    color: #888888;
  }
}

// 我的活动区域
.my-activity {
  background: #fff;
  padding: 0 4vw;
  padding-bottom: 4vw;
  .activity-header {
    height: 10.4vw;
    line-height: 10.4vw;
    display: flex;
    justify-content: space-between;
    .left {
      img {
        width: 3.2vw;
        height: 2.6667vw;
        margin-right: 2.1333vw;
      }
      span {
        color: #333333;
        font-weight: bold;
        font-size: 4.2667vw;
      }
    }
    .seeMore {
      color: #9b9b9b;
      font-size: 3.4667vw;
      span {
        margin-right: 2.4vw;
      }
      .van-icon-arrow {
        color: #888888;
      }
    }
  }
  .activity-content {
    background: #f9f9f9;
    display: flex;
    flex-wrap: wrap;
    padding: 4.5333vw 0 4vw 11.7333vw;
    border-radius: 2.1333vw;
    .content-item {
      img {
        width: 3.4667vw;
        height: 3.7333vw;
        margin-right: 1.8667vw;
      }
      span {
        color: #888888;
        font-size: 3.7333vw;
      }
      p {
        margin: 0;
        margin-left: 5.3333vw;
        font-size: 3.7333vw;
      }
    }
  }
}

.content-item:nth-child(1) {
  margin-right: 28.2667vw;
  margin-bottom: 6.1333vw;
}

.content-item:nth-child(3) {
  margin-right: 16.8vw;
}

.content-item:nth-child(1),
.content-item:nth-child(2) {
  div {
    margin-bottom: 1.8667vw;
  }
}

.content-item:nth-child(3),
.content-item:nth-child(4) {
  div {
    margin-bottom: 2.4vw;
  }
}
</style>
