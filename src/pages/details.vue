<template>
  <div>
    <!-- <uvnav /> -->
    <div class="head">
      <h1 class="title"></h1>
      <div class="info">
        <span class="time js-time">{{data.digest}}</span>
        <br />
        <span class="source js-source">{{data.ptime}}</span>
      </div>
      <div class="img">
      </div>
      <div class="pic">
        <img
          src="http://crawl.ws.126.net/63b79c08f36c929df19d3e91e9cfd9da.jpg?imageView&thumbnail=750x0&quality=85&type=jpg&interlace=1"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
import uvnav from '../components/nav/nav'
export default {
  components: {
    uvnav
  },
  data () {
    return {
      data: {}
    }
  },
  beforeMount () {
    if (this.$route.query.item) {
      this.data = this.$route.query.item
      // console.log(this.$route.query.item)
    } else {
      this.$router.replace('/yaowen')
    }
  },
  activated () {
    if (this.$route.query.item) {
      this.data = this.$route.query.item
      // console.log(this.data)
    } else {
      // this.$router.replace('/yaowen')
    }
  }
}
</script>

<style scoped>
.head {
  font-weight: normal;
  padding: 0.54rem 0.3rem 0 0.3rem;
}
.head .title {
  font-size: 0.46rem;
  font-weight: bold;
  padding: 0 0 0.2rem 0;
  color: #404040;
}
.head .info {
  font-size: 0.28rem;
  font-weight: normal;
  margin: 0 0 0.12rem 0;
  color: #888888;
}
.img {
  width: 100%;
}
.img img {
  width: 100%;
}
.pic{
  width: 100%;
}
.pic img{
  width: 100%;
}
</style>
