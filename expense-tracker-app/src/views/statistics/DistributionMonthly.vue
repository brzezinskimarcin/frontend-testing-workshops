<template>
  <el-card class="statistics-card" shadow="never">
    <bar :chart-options="chartOptions" :chart-data="chartData" />
  </el-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'vue-chartjs/legacy';

Chart.register(...registerables);

export default {
  components: {
    Bar,
  },
  data() {
    return {
      chartOptions: {
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
        scales: {
          y: {
            stacked: false,
          },
        },
      },
    };
  },
  computed: {
    ...mapGetters('categories', ['categories']),
    ...mapGetters('statistics', ['distributionMonthly']),
    chartData() {
      return {
        labels: this.distributionMonthly.map(({ label }) => label),
        datasets: this.categories.map(({ label, color }, index) => ({
          label,
          borderColor: color,
          backgroundColor: color,
          fill: index < this.categories.length - 1 ? '+1' : 'origin',
          pointRadius: 0,
          data: this.distributionMonthly.map(({ data }) => data[label]),
        })),
      };
    },
  },
  created() {
    this.fetchDistributionMonthlyChart();
  },
  methods: {
    ...mapActions('statistics', ['fetchDistributionMonthlyChart']),
  },
};
</script>

<style lang="scss" scoped>
.statistics-card {
  margin-bottom: 24px;
  border-radius: 16px;
}
</style>
