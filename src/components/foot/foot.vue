<template>
  <div class="ucfoot">
    <van-tabbar v-model="active">
      <router-link tag="li" to="/tuijian">
        <van-tabbar-item icon="hot-o">推荐</van-tabbar-item>
      </router-link>
      <router-link tag="li" to="/fangwen">
        <van-tabbar-item icon="eye-o">今日访问</van-tabbar-item>
      </router-link>
    <router-link tag="li" to="/user">
      <van-tabbar-item badge>
          <span>用户</span>
          <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
          </template>
      </van-tabbar-item>
       </router-link>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'

Vue.use(Tabbar)
Vue.use(TabbarItem)
export default {
  data () {
    return {
      active: 0,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      }
    }
  },
  methods: {
    user () {
      let user = window.localStorage.getItem('user')
      if (user) {
        this.$router.push('/user')
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>
.ucfoot{
  overflow: hidden;
}
.ucfoot li{
    margin: 0.1rem 0.78rem;
}
</style>
