<template>
  <div class="card-list" v-if="cards.length > 0">
    <transition-group name="card-item">
      <my-card-item
        v-for="card in cards"
        :card="card"
        :key="card.id"
        @remove="$emit('remove', card)"
      />
    </transition-group>
  </div>
  <div class="card-list" v-else>
    <h2 class="card-list__title">Список товаров пуст</h2>
  </div>
</template>
<script>
import MyCardItem from './MyCardItem.vue';

export default {
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
  components: { MyCardItem },
};
</script>
<style scope lang="scss">
@import '@/style/variables.scss';

.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 16px;
  width: 100%;

  transition: all 0.5s ease;

  &__title {
    margin: 0 auto;
  }

  @media (max-width: $mediaSmallTablets) {
    justify-content: center;
  }
}

.card-item-enter-active,
.card-item-leave-active {
  transition: all 0.5s ease;
}
.card-item-enter-from,
.card-item-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.card-item-move {
  transition: all 0.5s ease;
}
</style>
