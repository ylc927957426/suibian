<template>
  <div> <div id="main" style="height:550px;"></div></div>
</template>

<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      data: []
    }
  },
  mounted () {
    var myChart = echarts.init(document.getElementById('main'))
    function randomData () {
      now = new Date(+now + oneDay)
      value = value + Math.random() * 21 - 10
      return {
        name: now.toString(),
        value: [
          [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
          Math.round(value)
        ]
      }
    }

    var data = []
    var now = +new Date()
    var oneDay = 24 * 600 * 1000
    var value = Math.random() * 1000
    for (var i = 0; i < 1000; i++) {
      data.push(randomData())
    }

    var option = {
      title: {
        text: '浏览新闻的实时在线人数'
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          params = params[0]
          var date = new Date(params.name)
          return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1]
        },
        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false
        }
      },
      series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: data
      }]
    }

    setInterval(function () {
      for (var i = 0; i < 5; i++) {
        data.shift()
        data.push(randomData())
      }

      myChart.setOption({
        series: [{
          data: data
        }]
      })
    }, 1000)
    myChart.setOption(option)
  }
}
</script>

<style>

</style>
