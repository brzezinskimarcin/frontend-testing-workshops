<template>
  <el-container id="app">
    <el-main class="page-wrapper">
      <app-header />
      <router-view />
      <app-navigation />
    </el-main>
  </el-container>
</template>

<script>
import { mapActions } from 'vuex';
import AppHeader from '@/src/components/AppHeader.vue';
import AppNavigation from '@/src/components/AppNavigation.vue';

export default {
  components: {
    AppHeader,
    AppNavigation,
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    ...mapActions('categories', ['fetchCategories']),
  },
};
</script>

<style lang="scss">
body {
  font-family: Helvetica Neue, sans-serif;
  font-weight: 400;
  background: rgba(250, 250, 250);
}

h1 {
  color: #1f2f3d;
}

h4 {
  color: #5e6d82;
}

.page-wrapper {
  margin-top: 72px;
  margin-bottom: 56px;
}

.el-link.el-link--default {
  color: #5e6d82;
}
</style>
