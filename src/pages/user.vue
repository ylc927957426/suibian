<template>
  <div>
    <div v-if="plase">
      <p>
        <span>昵称：</span>
        {{this.$route.query.nikename ? this.$route.query.nikename:nikename}}
      </p>
      <p>
        <span>粉丝：</span>
        {{this.$route.query.fans ? this.$route.query.fans:fans}}
      </p>
      <p>
        <span>关注：</span>
        {{this.$route.query.follow ? this.$route.query.follow:follow}}
      </p>
      <van-button icon="https://img.yzcdn.cn/vant/logo.png" type="info" v-on:click="destory">注销</van-button>
    </div>
    <div v-else>
      <!-- <h2>亲，您还没有登录过奥，请您先登录奥。</h2> -->
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
  data () {
    return {
      plase: false,
      nikename: '',
      fans: '',
      follow: ''
    }
  },
  methods: {
    destory () {
      // console.log('destory')
      window.localStorage.removeItem('user')
      if (!window.localStorage.getItem('user')) {
        this.$router.replace('/login')
      }
    }
  },
  activated () {
    if (window.localStorage.getItem('user')) {
      this.plase = true
      this.nikename = JSON.parse(
        window.localStorage.getItem('user')
      ).data.nikename
      this.fans = JSON.parse(window.localStorage.getItem('user')).data.fans
      this.follow = JSON.parse(window.localStorage.getItem('user')).data.follow
    } else {
      this.plase = false
      Dialog.alert({
        title: '未登录',
        message: '亲，你还没有登录奥'
      }).then(() => {
        this.$router.replace('/login')
      })
    }
    // console.log(JSON.parse(window.localStorage.getItem('user')))
  },
  mounted () {
    if (window.localStorage.getItem('user')) {
      this.plase = true
    } else {
      this.plase = false
      Dialog.alert({
        title: '未登录',
        message: '亲，你还没有登录奥'
      }).then(() => {
        this.$router.replace('/login')
      })
    }
  }
}
</script>

<style scoped>
div p {
  font-size: 16px;
  width: 100%;
  padding: 0.3rem 0;
  color: cornflowerblue;
  text-align: center;
}
div button {
  margin: 0 auto;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>
