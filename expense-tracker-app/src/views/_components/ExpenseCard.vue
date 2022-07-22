<template>
  <el-dropdown trigger="click" placement="bottom" @command="handleCommand">
    <el-card shadow="never" :body-style="cardStyle" class="expense">
      <expense-icon :category="expense.category" />
      <div class="expense__description">
        <div class="expense__description__title">
          {{ expense.title }}
        </div>
        <div class="expense__description__subtitle">
          {{ expense.date | date }}
        </div>
      </div>
      <div class="expense__amount">
        {{ expense.value | float }}
      </div>
    </el-card>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item icon="el-icon-delete-solid" command="delete">
        Delete
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapActions } from 'vuex';
import ExpenseIcon from './ExpenseIcon.vue';

export default {
  components: {
    ExpenseIcon,
  },
  props: {
    expense: Object,
  },
  data() {
    return {
      cardStyle: {
        display: 'flex',
        alignItems: 'center',
      },
    };
  },
  methods: {
    ...mapActions('activity', ['removeActivity']),
    handleCommand(commandId) {
      switch (commandId) {
        case 'delete': {
          this.removeActivity(this.expense.id);
          break;
        }
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-dropdown {
  display: block;
}

.expense {
  margin-bottom: 12px;
  border-radius: 16px;

  &__description {
    margin-left: 12px;

    &__title {
      font-size: 16px;
      font-weight: 700;
      color: #1f2f3d;
    }

    &__subtitle {
      font-size: 14px;
      color: #5e6d82;
    }
  }

  &__amount {
    font-size: 20px;
    font-weight: 700;
    color: #1f2f3d;
    margin-left: auto;
  }
}
</style>
