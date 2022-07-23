<template>
  <el-card v-if="summary" class="main-card" shadow="never">
    <div>This month you have spent:</div>
    <h2 class="main-card__amount">{{ summary.total | float }} PLN</h2>
    <div class="main-card__deviation">
      <i :class="['main-card__icon', deviationIcon]" />
      <h5 class="main-card__deviation__description">
        {{ summary.difference | percent }}
      </h5>
    </div>
  </el-card>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      summary: null,
    };
  },
  computed: {
    deviationIcon() {
      return this.summary.difference > 0 ? 'el-icon-top' : 'el-icon-bottom';
    },
  },
  created() {
    this.fetchSummary();
  },
  methods: {
    async fetchSummary() {
      const { data } = await axios.get('api/summary');
      this.summary = data;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-card {
  margin-bottom: 12px;
  border-radius: 16px;
  font-weight: 500;
  text-align: center;
  color: #5e6d82;

  &__amount {
    color: #1f2f3d;
    font-size: 36px;
    margin: 12px 0;
    font-weight: 600;
  }

  &__deviation {
    display: flex;
    align-items: center;
    justify-content: center;

    &__description {
      font-size: 14px;
      margin: 0 8px;
      font-weight: 500;
    }
  }

  &__icon {
    font-size: 16px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &.el-icon-top {
      color: rgb(255, 0, 0);
      background: rgba(255, 0, 0, 0.1);
    }

    &.el-icon-bottom {
      color: rgb(0, 255, 0);
      background: rgba(0, 255, 0, 0.1);
    }
  }
}
</style>
