<template>
  <loading v-if="list.length===0? true : false" />
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh" v-else>
    <article class="news-card card-type-news" v-for="(item,index) in list" :key="index">
      <router-link :to="{name:'detail',query:{item}}" :href="item.link">
        <div class="news-info">
          <h3 class="title">{{item.digest}}</h3>
          <div class="detail">
            <!---->
            <span class="news-source">{{item.title}}</span>
            <!---->
            <span class="reply">{{item.ptime}}</span>
          </div>
        </div>
        <!---->
      </router-link>
    </article>
  </van-pull-refresh>
</template>

<script>
import loading from '../components/Loading/loading'
import { createNamespacedHelpers } from 'vuex'
import { Toast } from 'vant'
import store from '../plugins/vuex'
const { mapState } = createNamespacedHelpers('yaowen')
export default {
  data () {
    return {
      count: 0,
      isLoading: false
    }
  },
  mounted () {
    store.dispatch('yaowen/' + 'yaowen')
  },
  computed: {
    ...mapState(['list'])
  },
  components: {
    loading
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        Toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 1000)
    }
  }
}
</script>

<style scoped>
.news-card {
  text-indent: 28px;
  padding: 0.6rem 0.22rem;
  border-bottom: 1px solid #f5f7f9;
  margin: 0 -0.22rem;
}
.news-info h3 {
  font-size: 14px;
}
.news-source {
  font-size: 12px;
  display: block;
}
.reply {
  font-size: 12px;
}
.card-type-news a {
  color: #000;
  text-decoration: none;
}
.card-type-news .news-info {
  -webkit-box-flex: 2;
  -webkit-flex: 2 2 auto;
  -ms-flex: 2 2 auto;
  flex: 2 2 auto;
}
</style>
