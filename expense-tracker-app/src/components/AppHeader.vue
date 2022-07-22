<template>
  <el-card class="header__wrapper" :body-style="cardStyle">
    <header class="header">
      <el-link
        v-if="showBackButton"
        :underline="false"
        class="header__back"
        icon="el-icon-back"
        @click="handleBackClick"
      />
      <h1>{{ $route.name }}</h1>
    </header>
    <el-link
      v-if="showFiltersButton"
      :underline="false"
      icon="el-icon-s-operation"
      @click="handleSetFiltersClick"
    />
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      cardStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    };
  },
  computed: {
    showBackButton() {
      return this.$route.name !== 'Home';
    },
    showFiltersButton() {
      return this.$route.name === 'Activity';
    },
  },
  methods: {
    handleBackClick() {
      this.$router.back();
    },
    handleSetFiltersClick() {
      this.$router.push('/activity/set-filters');
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;

  &__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-radius: 0;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(30px);
    background-blend-mode: overlay;
    padding: 0 8px;
  }

  &__back {
    font-size: 24px;
    margin-right: 8px;
  }
}

h1 {
  margin: 0;
}
</style>
