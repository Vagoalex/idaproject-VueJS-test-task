<template>
  <button class="button"><slot></slot></button>
</template>
<script>
export default {
  name: 'my-button',
};
</script>
<style scope lang="scss">
.button {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.02em;

  background: #7bae73;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  color: #ffffff;
  border: 1px solid transparent;
  border-radius: 10px;

  text-align: center;

  transition: all 0.5s ease;

  &:hover {
    border: 1px solid #000;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.7);
    background: #9fd497;
    color: #000;
  }
  &:active {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    background: #b9e8b2;
    transform: translateY(4px);
  }
}
</style>
