<template>
  <div
    :class="{
      transaction__icon: true,
      selectable,
    }"
    :style="{
      background: !selectable || active ? categoryType.color : '',
    }"
    @click="selectable && $emit('click', category)"
  >
    <i :class="categoryType.icon" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    category: String,
    selectable: { type: Boolean, required: false },
    active: { type: Boolean, required: false },
  },
  data() {
    return {
      cardStyle: {
        display: 'flex',
        alignItems: 'center',
      },
    };
  },
  computed: {
    ...mapGetters('categories', ['categoryData']),
    categoryType() {
      return this.categoryData(this.category);
    },
  },
};
</script>

<style lang="scss" scoped>
.transaction__icon {
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  &.selectable {
    background: #b5b5b5;
    cursor: pointer;
  }
}
</style>
