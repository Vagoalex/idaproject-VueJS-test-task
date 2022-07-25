<template>
  <div class="app">
    <header class="header">
      <div class="header-container wrapper">
        <div class="modal-button" :class="{ 'modal-hidden': modalVisible }">
          <my-button @click="showModal" class="modal-button__item"
            >Открыть форму для создания товара</my-button
          >
        </div>
        <h2 class="title">Добавление товара</h2>
        <div class="select-wrapper">
          <my-select v-model="selectedSort" :options="sortOptions"></my-select>
        </div>
      </div>
    </header>

    <main class="main wrapper">
      <my-modal v-model:show="modalVisible">
        <card-form @create="createCard" />
      </my-modal>

      <div class="form-wrapper">
        <card-form @create="createCard" />
      </div>

      <card-list :cards="cards" @remove="removeCard" />
    </main>
  </div>
</template>

<script>
import validateLink from '@/helpers/validateLink';
import data from '@/helpers/cardData';
import options from '@/helpers/options';
// import sortData from '@/helpers/sortData';
import CardForm from './components/CardForm.vue';
import CardList from './components/CardList.vue';

export default {
  data() {
    return {
      cards: data,
      modalVisible: false,
      selectedSort: '',
      sortOptions: options,
    };
  },
  mounted() {
    if (localStorage.getItem('cards')) {
      try {
        this.cards = JSON.parse(localStorage.getItem('cards'));
      } catch (e) {
        localStorage.removeItem('cards');
      }
    }
  },
  computed: {},
  methods: {
    createCard(card) {
      // eslint-disable-next-line object-curly-newline
      const { id, name, about, link, price } = card;
      const validatedLink = validateLink(link);
      const newCard = {
        id,
        title: name,
        desk: about,
        link: validatedLink,
        price,
      };

      this.cards.push(newCard);
      this.modalVisible = false;
      this.setStorageCard();
    },
    removeCard(card) {
      this.cards = this.cards.filter((el) => el.id !== card.id);
      this.setStorageCard();
    },
    setStorageCard() {
      const parsed = JSON.stringify(this.cards);
      localStorage.setItem('cards', parsed);
    },
    showModal() {
      this.modalVisible = true;
    },
  },
  components: {
    CardList,
    CardForm,
  },
};
</script>

<style lang="scss">
@import 'src/style/style.scss';
@import '@/style/variables.scss';
.app {
  position: relative;
}
.main {
  position: relative;
  display: flex;
}
.form-wrapper {
  @media (max-width: $mediaTablets) {
    display: none;
  }
}

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

.modal-button {
  position: absolute;
  top: -4px;
  left: -300px;
  z-index: 105;
  visibility: hidden;
  transition: all 0.5s ease;

  z-index: 105;

  &__item {
    width: 135px;
    height: 43px;
  }

  @media (max-width: $mediaTablets) {
    visibility: visible;
    left: 15px;
  }
}

.modal-hidden {
  display: none;
}
</style>
