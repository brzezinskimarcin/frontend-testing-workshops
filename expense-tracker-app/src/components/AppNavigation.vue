<template>
  <el-card class="navigation__wrapper" :body-style="cardStyle">
    <el-menu class="navigation" :default-active="$route.path" router>
      <el-menu-item
        v-for="item in navigationItems"
        :key="item.route"
        :index="item.route"
      >
        <i :class="item.icon" />
      </el-menu-item>
    </el-menu>
    <el-button
      v-if="showAddExpenseButton"
      class="add-expense-button"
      type="primary"
      icon="el-icon-plus"
      circle
      @click="handleAddClick"
    />
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      cardStyle: {
        padding: 0,
      },
      navigationItems: [
        { route: '/', icon: 'el-icon-s-home' },
        { route: '/activity', icon: 'el-icon-shopping-cart-2' },
        { route: '/statistics', icon: 'el-icon-pie-chart' },
        { route: '/settings', icon: 'el-icon-setting' },
      ],
    };
  },
  computed: {
    showAddExpenseButton() {
      return this.$route.path !== '/activity/add-expense';
    },
  },
  methods: {
    handleAddClick() {
      this.$router.push('/activity/add-expense');
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  border-right: 0;
  justify-content: center;

  &__wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 0;
    overflow: visible;
  }

  &,
  &__wrapper {
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(30px);
    background-blend-mode: overlay;
  }
}

.add-expense-button {
  position: fixed;
  bottom: 56px;
  left: 50%;
  transform: translate(-50%, 50%);
}
</style>
