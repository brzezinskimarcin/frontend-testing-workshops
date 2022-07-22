<template>
  <div>
    <h4 class="section__title">Distribution - this month</h4>
    <distribution />
    <h4 class="section__title">Total expenses - past 6 months</h4>
    <total-expenses-monthly />
    <h4 class="section__title">Distribution - past 6 months</h4>
    <distribution-monthly />
  </div>
</template>
<script>
import Distribution from '@/views/statistics/Distribution.vue';
import TotalExpensesMonthly from '@/views/statistics/TotalExpensesMonthly.vue';
import DistributionMonthly from '@/views/statistics/DistributionMonthly.vue';

export default {
  components: {
    Distribution,
    TotalExpensesMonthly,
    DistributionMonthly,
  },
};
</script>

<style lang="scss" scoped>
.section__title {
  margin: 12px 0;
}
</style>
