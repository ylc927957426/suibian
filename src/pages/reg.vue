<template>
  <div class="loading">
      <ucipt label='用户名' :type='"text"' v-model="user"/>
      <ucipt label='密码' :type='"password"' v-model="password"/>
      <ucbtn @click='reg' text='注册' bgColor='#ff0000'/>
  </div>
</template>

<script>
import ucbtn from '../components/ucbtn/ucbtn'
import ucipt from '../components/ucipt/ucipt'
import axios from 'axios'
import { Notify } from 'vant'
export default {
  data () {
    return {
      user: '',
      password: ''
    }
  },
  components: {
    ucbtn, ucipt
  },
  methods: {
    reg () {
      axios({
        url: '/api/reg',
        method: 'post',
        data: {
          username: this.user,
          password: this.password
        }
      }).then(res => {
        // console.log(res.data)
        if (res.data.err === 0) {
          Notify({ type: 'success', message: '注册成功' })
          this.$router.push('/login')
        } else {
          Notify({ type: 'danger', message: '用户名重复' })
        }
      })
    }
  }
}
</script>

<style scoped>
.loading{
  padding: 0 1rem;
}
</style>
