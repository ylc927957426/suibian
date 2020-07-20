<template>
  <div class="login" v-if="show" >
      <ucipt label='用户名' :type='"text"' v-model="user"/>
      <ucipt label='密码' :type='"password"' v-model="password"/>
      <!-- <span>{{errorMess}}</span> -->
      <ucbtn @click='login()' text='登录'/>
      <ucbtn @click='reg' text='注册' bgColor='#ff0000'/>
  </div>
</template>

<script>
import ucbtn from '../components/ucbtn/ucbtn'
import ucipt from '../components/ucipt/ucipt'
import { Dialog, Notify } from 'vant'
import axios from 'axios'
export default {
  data () {
    return {
      user: '',
      password: '',
      errorMess: '',
      show: true
    }
  },
  components: {
    ucbtn, ucipt
  },
  methods: {
    login () {
      axios({
        url: '/api/login',
        method: 'post',
        data: {
          username: this.user,
          password: this.password
        }
      }).then(res => {
        // console.log(res.data.err)
        // if(res.data.err)
        if (res.data.err === 0) {
          this.user = ''
          this.password = ''
          // 1种token
          window.localStorage.setItem('user', JSON.stringify(res.data))
          Notify({ type: 'success', message: '成功登录' })
          // 2 跳转到之前的页面
          this.$router.push(`/user?fans=${res.data.data.fans}&follow=${res.data.data.follow}&nikename=${res.data.data.nikename}`)
        } else {
          this.errorMess = res.data.msg
          Notify({ type: 'danger', message: '用户名或密码错误' })
        }
      })
    },
    reg () {
      this.$router.replace('/reg')
    }
  },
  mounted () {
    if (window.localStorage.getItem('user')) {
      this.show = false
      Dialog.alert({
        title: '亲，已登录过了奥。',
        message: '亲，已登录过了奥。'
      }).then(() => {
        this.$router.replace('/user')
      })
    } else {
      this.show = true
    }
  },
  activated () {
    if (window.localStorage.getItem('user')) {
      this.show = false
      Dialog.alert({
        title: '亲，已登录过了奥。',
        message: '亲，已登录过了奥。'
      }).then(() => {
        this.$router.replace('/user')
      })
    } else {
      this.show = true
    }
  }
}
</script>

<style scoped>
.login{
  padding: 0 1rem;
}
</style>
