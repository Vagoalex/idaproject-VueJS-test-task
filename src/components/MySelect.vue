<template>
  <label for="select">
    <select
      class="select"
      id="select"
      @change="changeOption"
      :value="selectedSort"
    >
      <option
        class="select__option"
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </label>
</template>
<script>
export default {
  props: {
    selectedSort: {
      type: String,
      default: 'default',
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(e) {
      this.$emit('select', e.target.value);
    },
  },
};
</script>
<style scope lang="scss">
.select {
  width: 120px;
  height: 36px;
  font-size: 12px;
  line-height: 15px;
  color: #b4b4b4;

  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: 1px solid transparent;
  outline: 1px solid transparent;
  transition: all 0.5s ease;

  &::placeholder {
    font-size: 12px;
    line-height: 15px;
    color: #b4b4b4;
  }
  &:focus {
    outline: 1px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
  }

  &__option {
    padding: 0;
    margin: 0;
  }
}
</style>
