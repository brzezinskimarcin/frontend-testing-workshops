<template>
  <div>
    <div class="section">
      <h4 class="section__title">Statistics</h4>
      <el-link :underline="false" @click="handleViewAllClick">View all</el-link>
    </div>
    <Distribution show-title />
  </div>
</template>

<script>
import Distribution from '@/src/views/statistics/Distribution.vue';

export default {
  components: {
    Distribution,
  },
  methods: {
    handleViewAllClick() {
      this.$router.push('/statistics');
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  justify-content: space-between;

  &__title {
    margin: 12px 0;
  }
}
</style>
