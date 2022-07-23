<template>
  <el-form
    ref="addExpenseForm"
    :model="expense"
    :rules="rules"
    label-position="top"
    hide-required-asterisk
  >
    <el-form-item label="Category">
      <div class="category-picker">
        <expense-icon
          v-for="(category, index) in labels"
          :key="index"
          :category="category"
          :active="expense.category === category"
          selectable
          @click="expense.category = category"
        />
      </div>
    </el-form-item>
    <el-form-item prop="title" label="Title">
      <el-input v-model="expense.title" placeholder="Insert title" />
    </el-form-item>
    <el-form-item prop="value" label="Amount">
      <el-input
        v-model.number="expense.value"
        type="number"
        placeholder="Insert amount"
      />
    </el-form-item>
    <el-form-item label="Date">
      <el-date-picker
        v-model="expense.date"
        type="date"
        placeholder="Pick a day"
        value-format="timestamp"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSaveClick">Save</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ExpenseIcon from '@/src/views/_components/ExpenseIcon.vue';

export default {
  components: {
    ExpenseIcon,
  },
  data() {
    return {
      expense: {
        category: 'Shopping',
        value: null,
        title: null,
        date: Date.now(),
      },
      rules: {
        value: [
          { required: true, message: 'This field is required' },
          { type: 'number', message: 'This field must be a number' },
        ],
        title: [{ required: true, message: 'This field is required' }],
      },
    };
  },
  computed: {
    ...mapGetters('categories', ['labels']),
  },
  methods: {
    ...mapActions('activity', ['addActivity']),
    handleSaveClick() {
      this.$refs.addExpenseForm.validate((valid) => {
        if (valid) {
          this.addActivity(this.expense);
          this.$router.back();
        }
      });
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
