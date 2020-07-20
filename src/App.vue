<template>
  <div id="app">
    <ucnav/>
    <!-- <navbottom v-if="$root.bNav" /> -->
    <navbottom v-show="bNav" />
    <keep-alive :max='3'>
    <router-view></router-view>
    </keep-alive>
    <ucfoot v-show="bFoot"/>
  </div>
</template>

<script>
import ucnav from './components/nav/nav'
import navbottom from './components/nav-bottom/nav-bottom'
import ucdetails from './pages/details'
import ucfoot from './components/foot/foot'
import {mapState} from 'vuex'
// import './plugins/tiaozhuan'
export default {
  name: 'App',
  components: {
    navbottom, ucnav, ucdetails, ucfoot
  },
  watch: {
    $route: {
      handler (to) {
        let path = to.path
        if (/yuanchuang|yaowen|tuijian/.test(path)) {
          // this.$root.bNav = this.$root.bFoot = true
          this.$store.commit('bNav', true)
          this.$store.commit('bFoot', true)
          this.$store.commit('bback', false)
        }
        if (/detail|login|reg|fangwen|hot/.test(path)) {
          // this.$root.bNav = this.$root.bFoot = false
          this.$store.commit('bNav', false)
          this.$store.commit('bFoot', false)
          this.$store.commit('bback', true)
        }
        if (/user/.test(path)) {
          this.$store.commit('bNav', false)
          this.$store.commit('bFoot', true)
        }
      },
      immediate: true
    }
  },
  computed: {
    ...mapState(['bNav', 'bFoot'])
  }
}
</script>

<style scoped>
</style>
