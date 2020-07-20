<template>
  <div class="top">
    <div class="wap-nav-wrap wap-index-nav">
      <span class="back" v-on:click="back" v-show="this.$store.state.bback" >返回</span>
      <div class="login-bar">
        <div class="site-info">
          <router-link tag="h1" to="/tuijian">网易</router-link>
        </div>
        <div class="user-entry">
          <span class="user-info"></span>
        </div>
        <div class="app-entry">
          <div class="open-list">
            <router-link tag="span" to="/login" class="open-mail">登录</router-link>
          </div>
          <div class="app-list-wrap" style="display: none;">
            <div class="global-wrap"></div>
            <div class="app-list">
              <ul>
                <li class="app-item item-mail">
                  <a href="https://email.163.com/m/?df=3g_163">
                    <span>网易邮箱</span>
                  </a>
                </li>
                <li class="app-item item-opencourse">
                  <a href="https://open.163.com/?from=3gwap">
                    <span>网易公开课</span>
                  </a>
                </li>
                <li class="app-item item-gulu">
                  <a href="//gulu.163.com">
                    <span>网易新闻视频版</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { Toast } from 'vant'
export default {
  props: {
    isshow: {
      type: Boolean
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.wap-index-nav {
    position: relative;
    z-index: 1;
    overflow: visible;
}
.wap-wrap {
    font-size: .32rem;
    width: 100%;
}
.wap-index-nav .login-bar, .wap-index-nav .user-entry {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.wap-index-nav .login-bar {
    padding: 0 .29rem;
    height: .86rem;
    background-color: #ee1a1a;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.wap-index-nav .site-info {
    width: 40%;
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
    -ms-flex-order: 2;
    order: 2;
}
.wap-index-nav .site-info h1 {
    min-width: .8rem;
    height: .4rem;
    background: url(https://static.ws.126.net/163/wap/f2e/milk_index/logo-site.png) no-repeat 50%;
    -webkit-background-size: contain;
    background-size: contain;
    font-size: 0;
    color: #fff;
}
.wap-index-nav .user-entry {
    width: 30%;
    height: .4rem;
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
}
.wap-index-nav .login-bar, .wap-index-nav .user-entry {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.wap-index-nav .user-entry .user-info {
    height: .4rem;
    font-size: .3rem;
    color: #fff;
    position: relative;
    padding-left: .48rem;
}
.wap-index-nav .app-entry {
    width: 30%;
    -webkit-box-ordinal-group: 4;
    -webkit-order: 3;
    -ms-flex-order: 3;
    order: 3;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
    height: .4rem;
    overflow: visible;
}
.wap-index-nav .open-list {
    display: block;
}
.wap-index-nav .app-list-wrap {
    width: 2.72rem;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    margin-right: -.13rem;
}
.wap-index-nav .app-entry .global-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
}
wap-index-nav .user-entry .user-info:before {
    display: block;
    width: .48rem;
    height: .48rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFW…B778R1G91vcex3VCW+sdH9Fsd+VTeqAlABqADClV8BBgCw7PhFQX7mAQAAAABJRU5ErkJggg==) no-repeat -.04rem -.06rem;
    -webkit-background-size: contain;
    background-size: contain;
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
}
.wap-index-nav .user-entry .user-info {
    height: .4rem;
    font-size: .3rem;
    color: #fff;
    position: relative;
    padding-left: .48rem;
}
.wap-index-nav .open-list .open-mail {
    display: block;
    height: .42rem;
    font-size: .3rem;
    color: #fff;
    line-height: .42rem;
    position: relative;
    padding-left: .44rem;
    padding-right: .24rem;
}
.wap-channel-nav .home-back {
    -webkit-box-ordinal-group: 1;
    width: 1.5rem;
}
.wap-channel-nav .home-back a, .wap-channel-nav .home-back strong {
    display: block;
}
a, a:active, a:hover, a:focus, a:visited {
    text-decoration: none;
}
html a {
    color: #333333;
}
.back{
  font-size: 16px;
  color: white;
  z-index: 10;
  position: absolute;
  left: 10px;
  top: 10px;
}
</style>
