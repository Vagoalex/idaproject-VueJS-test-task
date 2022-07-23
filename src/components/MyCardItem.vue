<template>
  <div class="card" @click="$emit('remove', card)" @keydown="$emit('remove', card)">
    <div class="card-image">
      <img :src="card.link" class="card-image__img" alt="some card" />
    </div>
    <div class="card-content">
      <h3 class="card-content__title">{{ card.title }}</h3>
      <p class="card-content__desk">
        {{ card.desk }}
      </p>
      <h3 class="card-content__price">{{ card.price }} руб.</h3>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scope lang="scss">
@import '@/style/variables.scss';

.card {
  width: 331px;
  height: 410px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  margin: 0px 0px 16px 16px;
  cursor: pointer;

  transition: all 0.5s ease;

  @media (max-width: $mediaBigLaptops) {
    width: 218px;
    height: 350px;
  }
  @media (max-width: $mediaLaptops) {
    width: 268px;
    height: 400px;
  }
  @media (max-width: $mediaSmallDesktops) {
    width: 219px;
    height: auto;
  }
  @media (max-width: $mediaTablets) {
    width: 180px;

    margin: 0px 27px 27px 0px;
    &:nth-child(3n + 3) {
      margin: 0px 0px 27px 0px;
    }
  }
  @media (max-width: $mediaSmallTablets) {
    width: 250px;
    margin: 0px 0px 20px 0px;
    &:nth-child(3n + 3) {
      margin: 0px 0px 27px 0px;
    }
  }
}
.card-image {
  &__img {
    width: 331px;
    height: 200px;
    object-fit: cover;

    @media (max-width: $mediaBigLaptops) {
      width: 100%;
      height: 150px;
    }
    @media (max-width: $mediaLaptops) {
      height: 200px;
    }
    @media (max-width: $mediaSmallDesktops) {
      height: 165px;
    }
    @media (max-width: $mediaTablets) {
      height: 135px;
    }
    @media (max-width: $mediaSmallTablets) {
      height: 190px;
    }
  }
}
.card-content {
  color: #3f3f3f;
  padding: 16px 16px 24px 16px;
  &__title {
    font-size: 20px;
    line-height: 25px;
    overflow-y: scroll;
    height: 25px;

    @media (max-width: $mediaBigLaptops) {
      font-size: 18px;
    }
    @media (max-width: $mediaSmallDesktops) {
      font-size: 16px;
    }
    @media (max-width: $mediaSmallTablets) {
      font-size: 14px;
    }
  }
  &__desk {
    font-size: 16px;
    line-height: 20px;
    margin-top: 16px;
    height: 80px;
    text-align: justify;
    overflow-y: scroll;

    @media (max-width: $mediaBigLaptops) {
      font-size: 12px;
    }
    @media (max-width: $mediaSmallDesktops) {
      font-size: 11px;
      line-height: 15px;
    }
    @media (max-width: $mediaTablets) {
      margin-top: 5px;
    }
    @media (max-width: $mediaSmallTablets) {
      height: 78px;
      font-size: 10px;
    }
  }
  &__price {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    margin-top: 21px;

    @media (max-width: $mediaBigLaptops) {
      font-size: 21px;
    }
    @media (max-width: $mediaSmallDesktops) {
      font-size: 18px;
    }
    @media (max-width: $mediaTablets) {
      margin-top: 5px;
    }
    @media (max-width: $mediaSmallTablets) {
      font-size: 16px;
    }
  }
  @media (max-width: $mediaSmallDesktops) {
    padding: 8px;
  }
}
</style>
