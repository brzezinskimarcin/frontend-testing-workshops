<template>
  <div>
    <div class="section">
      <h4 class="section__title">Activity</h4>
      <el-link :underline="false" @click="handleViewAllClick">View all</el-link>
    </div>
    <expense-card
      v-for="expense in activitySummary"
      :key="expense.id"
      :expense="expense"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ExpenseCard from '@/src/views/_components/ExpenseCard.vue';

export default {
  components: {
    ExpenseCard,
  },
  computed: {
    ...mapGetters('activity', ['activitySummary']),
  },
  created() {
    this.fetchActivitySummary();
  },
  methods: {
    ...mapActions('activity', ['fetchActivitySummary']),
    handleViewAllClick() {
      this.$router.push('/activity');
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
