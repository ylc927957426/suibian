<template>
  <loading v-if="list.length===0? true : false" />
 <van-pull-refresh v-model="isLoading" @refresh="onRefresh" v-else>
    <article class="news-card card-type-news" v-for="(item,index) in list" :key="index">
        <router-link data-param data-channel data-args class to="/hot">
          <div class="news-info">
            <h3 class="title">{{item.title}}</h3>
            <div class="detail">
              <!---->
              <span class="news-source">{{item.source}}</span>
              <span class="pubtime">{{item.ptime}}</span>
              <span class="reply">{{item.typeid}}</span>
            </div>
            <!---->
          </div>
          <div class="news-pic">
            <img
              :src="item.picInfo[0].url"
              alt="福建泉州酒店坍塌致29死 23人被采取刑事强制措施"
            />
          </div>
        </router-link>
    </article>
</van-pull-refresh>
</template>

<script>
import { Toast } from 'vant'
import loading from '../components/Loading/loading'
import {createNamespacedHelpers} from 'vuex'
import store from '../plugins/vuex'
const {mapState} = createNamespacedHelpers('yuanchuang')
export default {
  data () {
    return {
      count: 0,
      isLoading: false
    }
  },
  mounted () {
    store.dispatch('yuanchuang/' + 'yuanchuang')
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
    padding: .24rem .22rem;
    border-bottom: 1px solid #f5f7f9;
    margin: 0 -.22rem;
}
.wap-wrap {
    font-size: .32rem;
    width: 100%;
}
.section-channel a {
    color: #333;
}
.card-type-news a {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.card-type-news .news-info {
    -webkit-box-flex: 2;
    -webkit-flex: 2 2 auto;
    -ms-flex: 2 2 auto;
    flex: 2 2 auto;
}
.news-card .news-info {
    position: relative;
    text-indent: 10px;
}
.card-type-news .title {
    padding-right: .12rem;
}
.news-card .title {
    font-weight: normal;
    max-height: .9rem;
    overflow: hidden;
    line-height: .45rem;
    font-size: .26rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    word-break: break-word;
}
.news-card .detail {
    color: #b4b4b4;
    line-height: .34rem;
    height: .34rem;
    margin-top: .15rem;
    font-size: 0;
    letter-spacing: 0;
    overflow: hidden;
}
.news-card .detail span {
    font-size: .24rem;
    margin-right: .12rem;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
}
.card-type-news .news-pic {
    width: 2.34rem;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
}
.card-type-news .news-pic img {
    display: block;
    height: 1.32rem;
    margin: 0 auto;
}
</style>
