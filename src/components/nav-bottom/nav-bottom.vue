<template>
  <div class="wap-tabbar-wrap">
    <div class="tab-bar">
      <ul class="tab-active-0">
        <li class="tab-item router-link-active">
          <router-link tag="span" to="/yaowen">要闻</router-link>
        </li>
        <li class="tab-item">
         <router-link tag="span" to="/tuijian">推荐</router-link>
        </li>
        <li class="tab-item tab-active router-link-active">
         <router-link tag="span" to="/yuanchuang">原创</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.wap-tabbar-wrap {
    height: .93rem;
}
.tab-bar {
    padding: 0 .22rem;
    margin-bottom: 0;
    height: .93rem;
    border-bottom: 1px solid #eee;
    background: #fff;
    font-size: .34rem;
    letter-spacing: 0;
    line-height: .48rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.tab-bar ul {
    width: 100%;
    height: .93rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.tab-bar .tab-item {
    width: 1%;
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 auto;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    text-align: center;
    color: #333;
    height: .93rem;
    line-height: .93rem;
    position: relative;
    overflow: hidden;
}
</style>
