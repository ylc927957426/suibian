<template>
  <div><div id="container"></div>
  <p>查找周边：<input type="text" v-model.lazy="search"></p>
  </div>
</template>

<script>
// import BMapGL from 'BMapGL'
export default {
  data () {
    return {
      search: ''
    }
  },
  mounted () {
    // eslint-disable-next-line no-undef
    var map = new BMapGL.Map('container')
    // 创建地图实例
    // eslint-disable-next-line no-undef
    var point = new BMapGL.Point(121.48, 31.40)
    // 创建点坐标
    map.centerAndZoom(point, 10)
    setTimeout(function () {
      map.setZoom(14)
    }, 2000) // 2秒后放大到14级
    map.enableScrollWheelZoom(true)
    // eslint-disable-next-line no-undef
    var circle = new BMapGL.Circle(point, 1000, {fillColor: 'blue', strokeWeight: 1, fillOpacity: 0.3, strokeOpacity: 0.3})
    map.addOverlay(circle)
    // eslint-disable-next-line no-undef
    var local = new BMapGL.LocalSearch(map, {renderOptions: {map: map, autoViewport: false}})
    local.searchNearby(this.search, point, 1000)
  }
}
</script>

<style scoped>
html{
  height: 100%;
}
body{
  height: 100%;
  margin: 0;
}
#container{
  height: 300px;
}
#container p input{
  border: 1px solid red;
  outline: 1px solid red;
}
</style>
