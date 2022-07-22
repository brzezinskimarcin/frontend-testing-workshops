<template>
  <el-card class="statistics-card" shadow="never">
    <line-chart :chart-options="chartOptions" :chart-data="chartData" />
  </el-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { Chart, registerables } from 'chart.js';
import { Line as LineChart } from 'vue-chartjs/legacy';

Chart.register(...registerables);

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      chartOptions: {
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      },
    };
  },
  computed: {
    ...mapGetters('statistics', ['totalExpensesMonthly']),
    chartData() {
      return {
        labels: this.totalExpensesMonthly.map(({ label }) => label),
        datasets: [
          {
            label: 'Total Expenses',
            borderColor: '#5e6d82',
            backgroundColor: '#5e6d82',
            data: this.totalExpensesMonthly.map(({ data }) => data.value),
          },
        ],
      };
    },
  },
  created() {
    this.fetchTotalExpensesMonthlyChart();
  },
  methods: {
    ...mapActions('statistics', ['fetchTotalExpensesMonthlyChart']),
  },
};
</script>

<style lang="scss" scoped>
.statistics-card {
  margin-bottom: 24px;
  border-radius: 16px;
}
</style>
