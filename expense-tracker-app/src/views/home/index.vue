<template>
  <div>
    <main-summary />
    <statistics-summary />
    <activity-summary />
  </div>
</template>
<script>
import MainSummary from '@/src/views/home/MainSummary.vue';
import StatisticsSummary from '@/src/views/home/StatisticsSummary.vue';
import ActivitySummary from '@/src/views/home/ActivitySummary.vue';

export default {
  components: {
    MainSummary,
    StatisticsSummary,
    ActivitySummary,
  },
};
</script>
