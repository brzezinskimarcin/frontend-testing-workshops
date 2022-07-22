<template>
  <el-card class="statistics-card" shadow="never">
    <h4 v-if="showTitle">Distribution - this month</h4>
    <doughnut :chart-options="chartOptions" :chart-data="chartData" />
  </el-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { Chart, registerables } from 'chart.js';
import { Doughnut } from 'vue-chartjs/legacy';

Chart.register(...registerables);

export default {
  components: {
    Doughnut,
  },
  props: {
    showTitle: {
      type: Boolean,
      required: false,
    },
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
    ...mapGetters('categories', ['colors', 'labels']),
    ...mapGetters('statistics', ['distribution']),
    chartData() {
      return {
        labels: this.labels,
        datasets: [
          {
            data: this.labels.map((label) => this.distribution[label]),
            backgroundColor: this.colors,
          },
        ],
      };
    },
  },
  created() {
    this.fetchDistributionChart();
  },
  methods: {
    ...mapActions('statistics', ['fetchDistributionChart']),
  },
};
</script>

<style lang="scss" scoped>
.statistics-card {
  margin-bottom: 24px;
  border-radius: 16px;
}

h4 {
  margin-top: 0;
  text-align: center;
}
</style>
