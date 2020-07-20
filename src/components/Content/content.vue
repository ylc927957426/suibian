<template>
  <div>
    <article class="news-card card-type-news" v-for="(item, index) in list" :key="index">
      <a
        href="https://3g.163.com/news/article/FHEII8CL000189FH.html?clickfrom=channel2018_news_newsList#offset=0"
      >
        <div class="news-info">
          <h3 class="title">{{item.digest}}</h3>
          <div class="detail">
            <!---->
            <span class="news-source">人{{item.title}}</span>
            <!---->
            <span class="reply">{{item.ptime}}</span>
          </div>
        </div>
        <!---->
      </a>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array
    }
  }
}
</script>

<style scoped>
.news-card {
  padding: 0.6rem 0.22rem;
  border-bottom: 1px solid #f5f7f9;
  margin: 0 -0.22rem;
}
.news-info h3 {
  font-size: 20px;
}
.news-source{
  font-size: 16px;
  display: block;
}
.reply{
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
