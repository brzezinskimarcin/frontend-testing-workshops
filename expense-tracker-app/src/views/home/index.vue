<template>
  <div>
    <main-summary />
    <statistics-summary />
    <activity-summary />
  </div>
</template>
<script>
import MainSummary from './MainSummary.vue';
import StatisticsSummary from './StatisticsSummary.vue';
import ActivitySummary from './ActivitySummary.vue';

export default {
  components: {
    MainSummary,
    StatisticsSummary,
    ActivitySummary,
  },
};
</script>
