<template>
  <el-form :model="searchQueryForm" label-position="top">
    <el-form-item label="Category">
      <div class="category-picker">
        <expense-icon
          v-for="(category, index) in labels"
          :key="index"
          :category="category"
          :active="searchQueryForm.categories.includes(category)"
          selectable
          @click="handleCategoryClick"
        />
      </div>
    </el-form-item>
    <el-form-item label="Amount from">
      <el-input
        v-model.number="searchQueryForm.amountMin"
        type="number"
        placeholder="Insert amount"
      />
    </el-form-item>
    <el-form-item label="Amount to">
      <el-input
        v-model.number="searchQueryForm.amountMax"
        type="number"
        placeholder="Insert amount"
      />
    </el-form-item>
    <el-form-item label="Title contains">
      <el-input
        v-model="searchQueryForm.titleContains"
        placeholder="Insert query"
      />
    </el-form-item>
    <el-form-item label="Date from">
      <el-date-picker
        v-model="searchQueryForm.dateFrom"
        type="date"
        placeholder="Pick a day"
        value-format="timestamp"
      />
    </el-form-item>
    <el-form-item label="Date to">
      <el-date-picker
        v-model="searchQueryForm.dateTo"
        type="date"
        placeholder="Pick a day"
        value-format="timestamp"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSaveClick">Search</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ExpenseIcon from '@/views/_components/ExpenseIcon.vue';

export default {
  components: {
    ExpenseIcon,
  },
  data() {
    return {
      searchQueryForm: {},
    };
  },
  computed: {
    ...mapGetters('categories', ['labels']),
    ...mapGetters('activity', ['searchQuery']),
  },
  created() {
    this.searchQueryForm = {
      ...this.searchQuery,
    };
  },
  methods: {
    ...mapActions('activity', ['setSearchQuery']),
    handleCategoryClick($event) {
      const category = this.searchQueryForm.categories.indexOf($event);
      if (category > -1) {
        this.searchQueryForm.categories.splice(category, 1);
      } else {
        this.searchQueryForm.categories.push($event);
      }
    },
    async handleSaveClick() {
      await this.setSearchQuery(this.searchQueryForm);
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
.category-picker {
  display: flex;
  flex-wrap: wrap;

  div {
    margin: 8px;
  }
}
</style>
