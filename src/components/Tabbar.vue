<template>
  <div>
    <!-- 底部导航栏组件 -->
    <van-tabbar route fixed>
      <van-tabbar-item push to="/home" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item push to="/bill" icon="orders-o">账单</van-tabbar-item>
      <van-tabbar-item push to="/my" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'TabbarView',
  components: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="less">
</style>
