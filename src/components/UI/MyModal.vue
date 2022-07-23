<template>
  <div class="modal" v-if="show" @click.stop="hideModal" @keydown.stop="hideModal">
    <div @click.stop @keydown.stop class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-modal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideModal() {
      this.$emit('update:show', false);
    },
  },
};
</script>
<style lang="scss">
.modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;

  .modal-content {
    margin: auto;
    background-color: #fff;
    border-radius: 12px;
  }
}
</style>
