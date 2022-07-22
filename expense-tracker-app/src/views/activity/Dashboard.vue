<template>
  <div>
    <div>
      <h4 class="section__title">Expenses</h4>
      <expense-card
        v-for="expense in activity"
        :key="expense.id"
        :expense="expense"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ExpenseCard from '@/views/_components/ExpenseCard.vue';

export default {
  components: {
    ExpenseCard,
  },
  computed: {
    ...mapGetters('activity', ['activity']),
  },
  created() {
    this.fetchActivity();
  },
  methods: {
    ...mapActions('activity', ['fetchActivity']),
  },
};
</script>

<style lang="scss" scoped>
.section__title {
  margin: 12px 0;
}
</style>
