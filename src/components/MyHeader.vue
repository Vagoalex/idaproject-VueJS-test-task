<template>
  <header class="header">
    <div class="header-container wrapper">
      <slot></slot>
      <h2 class="title">Добавление товара</h2>
      <div class="select-wrapper">
        <label for="select">
          <select class="select" id="select">
            <option class="select__option" value="0">По умолчанию</option>
            <option class="select__option" value="1">По цене min</option>
            <option class="select__option" value="2">По цене max</option>
            <option class="select__option" value="3">По наименованию</option>
          </select>
        </label>
      </div>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style scope lang="scss">
@import '@/style/variables.scss';
.header {
  margin-top: 31px;

  @media (max-width: $mediaTablets) {
    margin-top: 15px;
  }
}
.header-container {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.title {
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #3f3f3f;

  transition: all 0.5s ease;

  @media (max-width: $mediaBigLaptops) {
    font-size: 24px;
  }
  @media (max-width: $mediaTablets) {
    visibility: hidden;
  }
}
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

  appearance: none;
  background: url(@/assets/rectangle.svg) no-repeat right;
  background-position-x: calc(100% - 8px);

  padding: 10px 16px;
  &__option {
    padding: 0;
    margin: 0;
  }
}
</style>
