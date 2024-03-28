<template>
  <div class="chart-container">
    <div class="chart-header">
      <h2 class="text-lg font-semibold mb-4">Stock Chart</h2>
      <div class="chart-options">
        <button @click="switchChartType('candlestick')" :class="{ active: isCandlestick }">Candlestick</button>
        <button @click="switchChartType('line')" :class="{ active: !isCandlestick }">Line</button>
        <button @click="switchInterval('1m')" :class="{ active: interval === '1m' }">1 Minute</button>
        <button @click="switchInterval('1h')" :class="{ active: interval === '1h' }">1 Hour</button>
      </div>
    </div>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import { createChart } from 'lightweight-charts';

export default {
  data() {
    return {
      isCandlestick: true,
      interval: '1m',
      chart: null,
      series: null,
      mockData: [
        // Mock data for demonstration
        { time: new Date('2023-01-01T13:00:00'), open: 100, close: 101, high: 102, low: 99 },
        { time: new Date('2023-01-01T14:01:00'), open: 101, close: 102, high: 103, low: 100 },
        { time: new Date('2023-01-01T12:01:00'), open: 101, close: 102, high: 103, low: 100 },
        { time: new Date('2023-01-01T15:01:00'), open: 101, close: 99, high: 103, low: 100 },
        { time: new Date('2023-01-01T14:01:00'), open: 101, close: 102, high: 103, low: 100 },
        { time: new Date('2023-01-01T10:01:00'), open: 101, close: 97, high: 103, low: 100 },
        // Add more mock data as needed
      ]
    };
  },
  mounted() {
    this.initChart();
    window.addEventListener('resize', this.resizeChart);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.resizeChart);
  },
  methods: {
    initChart() {
      this.chart = createChart(this.$refs.chart, {
        width: this.$refs.chart.offsetWidth,
        height: 400,
        layout: {
          backgroundColor: '#F9FAFB',
        },
        grid: {
          vertLines: {
            color: '#E3E6EA',
          },
          horzLines: {
            color: '#E3E6EA',
          },
        },
        crosshair: {
          mode: 0,
        },
        priceScale: {
          borderColor: '#485C7B',
        },
        timeScale: {
          borderColor: '#485C7B',
          fixLeftEdge: true,
          lockVisibleTimeRangeOnResize: true,
          rightOffset: 12,
        },
        handleScroll: {
          mouseWheel: true,
          pressedMouseMove: true,
          horzTouchDrag: true,
          vertTouchDrag: true,
        },
        handleScale: {
          axisPressedMouseMove: true,
          mouseWheel: true,
          pinch: true,
        },
      });

      this.series = this.isCandlestick ?
        this.chart.addCandlestickSeries() :
        this.chart.addLineSeries();

      this.updateChartData();
    },
    updateChartData() {
      // Filter out entries with invalid time values (NaN, undefined)
      this.mockData = this.mockData.filter(item => item.time);

      this.mockData = this.mockData.filter(item =>
        typeof item.open === 'number' &&
        typeof item.close === 'number' &&
        typeof item.high === 'number' &&
        typeof item.low === 'number'
      );

      // Sort the remaining data by time
      this.mockData.sort((a, b) => new Date(a.time) - new Date(b.time));

      // Clear existing series data before updating
      this.series.setData([]);

      // Update the chart data for each data point
      this.mockData.forEach(dataPoint => {
        const { time, open, high, low, close } = dataPoint;
        const color = close < open ? 'red' : 'green'; // Determine candle color
        this.series.update({
          time: new Date(time),
          open,
          high,
          low,
          close,
          color,
        });
      });
    },
    switchChartType(type) {
      if ((type === 'candlestick' && !this.isCandlestick) || (type === 'line' && this.isCandlestick)) {
        this.isCandlestick = !this.isCandlestick;
        this.series = this.isCandlestick ?
          this.chart.addCandlestickSeries() :
          this.chart.addLineSeries();
        this.updateChartData();
      }
    },
    switchInterval(interval) {
      this.interval = interval;
      // Here you would fetch new data based on the selected interval
      // For demonstration, I'll just update the chart with the existing data
      this.updateChartData();
    },
    resizeChart() {
      if (this.chart) {
        this.chart.resize(this.$refs.chart.offsetWidth, 400);
      }
    },
  }
};
</script>

<style scoped>
.chart-container {
  margin-top: 20px;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.chart-options button {
  margin-right: 10px;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  cursor: pointer;
  background-color: #fff;
}

.chart-options button.active {
  background-color: #4a90e2;
  color: #fff;
}

.chart {
  width: 100%;
  height: 400px;
}
</style>