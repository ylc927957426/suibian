<template>
  <div class="spinner">
    <!-- <div class="spinner-container container1">
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
      <div class="circle4"></div>
    </div>
    <div class="spinner-container container2">
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
      <div class="circle4"></div>
    </div>
    <div class="spinner-container container3">
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
      <div class="circle4"></div>
    </div> -->
     <van-loading type="spinner" color="#1989fa" />
    </div>
</template>

<script>
import Vue from 'vue'
import { Loading } from 'vant'

Vue.use(Loading)
export default {
  name: 'loading'
}
</script>

<style scoped>
.spinner {
  width: 40px;
  height: 40px;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -10px;
  margin-top: -10px;
}
</style>
