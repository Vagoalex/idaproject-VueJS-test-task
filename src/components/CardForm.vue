<template>
  <form class="form" @submit.prevent>
    <div class="field">
      <label class="form-label" for="form-name">
        <span>Наименование товара</span>
        <input
          v-model="v$.card.name.$model"
          :class="{ 'input-required': v$.card.name.$errors.length }"
          class="form-label__input"
          type="text"
          id="form-name"
          placeholder="Введите наименование товара"
        />
        <div class="input-error" v-for="(error, index) of v$.card.name.$errors" :key="index">
          <div class="input-error__msg">{{ error.$message }}</div>
        </div>
      </label>
    </div>

    <div class="field">
      <label class="form-label" for="form-about">
        Описание товара
        <textarea
          v-model="card.about"
          class="form-label__input textarea"
          type="text"
          id="form-about"
          placeholder="Введите описание товара"
        />
      </label>
    </div>

    <div class="field">
      <label class="form-label" for="form-link">
        <span>Ссылка на изображение товара</span>
        <input
          v-model="v$.card.link.$model"
          :class="{ 'input-required': v$.card.link.$errors.length }"
          class="form-label__input"
          type="text"
          id="form-link"
          placeholder="Введите ссылку"
        />
        <div class="input-error" v-for="(error, index) of v$.card.link.$errors" :key="index">
          <div class="input-error__msg">{{ error.$message }}</div>
        </div>
      </label>
    </div>

    <div class="field">
      <label class="form-label" for="form-price">
        <span>Цена товара</span>
        <input
          v-model="v$.card.price.$model"
          :class="{ 'input-required': v$.card.price.$errors.length }"
          class="form-label__input"
          type="number"
          id="form-price"
          placeholder="Введите цену"
        />
        <div class="input-error" v-for="(error, index) of v$.card.price.$errors" :key="index">
          <div class="input-error__msg">{{ error.$message }}</div>
        </div>
      </label>
    </div>

    <my-button
      :disabled="v$.card.$invalid"
      :class="{ 'button-disabled': v$.card.$invalid }"
      @click="createCard"
      class="form-button"
      type="submit"
    >
      Добавить товар
    </my-button>
  </form>
</template>
<script>
import useVuelidate from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      card: {
        name: '',
        about: '',
        link: '',
        price: null,
      },
    };
  },

  validations() {
    return {
      card: {
        name: {
          required: helpers.withMessage('Поле является обязательным', required),
        },
        link: {
          required: helpers.withMessage('Поле является обязательным', required),
        },
        price: {
          required: helpers.withMessage('Поле является обязательным', required),
        },
      },
    };
  },
  methods: {
    createCard() {
      this.card.id = Date.now();
      this.$emit('create', this.card);
      this.card = {
        name: '',
        about: '',
        link: '',
        price: null,
      };
    },
  },
};
</script>
<style scope lang="scss">
@import '@/style/variables.scss';

.form {
  position: sticky;
  top: 1em;
  margin-top: 16px;
  display: flex;
  flex-direction: column;

  width: 332px;
  height: 440px;
  padding: 24px;

  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;

  transition: all 0.5s ease;

  @media (max-width: $mediaSmallDesktops) {
    font-size: 24px;
    padding: 15px;
    width: 230px;
    height: auto;
  }
  @media (max-width: $mediaTablets) {
    margin-top: 0px;
  }
}

.field {
  margin-bottom: 16px;
}
.form-label {
  font-size: 13px;
  line-height: 13px;
  letter-spacing: -0.02em;
  display: inline-block;
  position: relative;
  width: 100%;

  color: #49485e;

  span {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: -5px;
      width: 4px;
      height: 4px;

      background: #ff8484;
      border-radius: 4px;
    }
  }

  &__input {
    width: 100%;
    padding: 10px 16px;
    margin-top: 4px;

    background: #fffefb;
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
    @media (max-width: $mediaSmallDesktops) {
      padding: 8px 10px;
    }
  }

  .input-error {
    position: absolute;
    bottom: -13px;
    left: 0;
    transition: all 0.5s ease;

    &__msg {
      font-size: 11px;
      line-height: 10px;
      letter-spacing: -0.02em;
      color: #ff8484;
    }
  }

  &:last-child {
    margin-bottom: 0px;
  }
}

.textarea {
  width: 100%;
  height: 108px;
  overflow-y: auto;
  resize: none;

  ::-webkit-scrollbar {
    width: 0;
  }

  @media (max-width: $mediaSmallDesktops) {
    height: 70px;
  }
}
.input-required {
  border: 1px solid #ff8484;
  transition: all 0.5s ease;

  &:focus {
    outline: 1px solid #ff8484;
    box-shadow: 0px 2px 5px rgba(255, 132, 132, 0.4);
  }
}

.form-button {
  width: 284px;
  height: 36px;
  @media (max-width: $mediaSmallDesktops) {
    width: 100%;
  }
}

.button-disabled {
  transition: all 0.5s ease;
  background: #eeeeee;
  color: #b4b4b4;
  &:hover {
    border: 1px solid transparent;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    background: #eeeeee;
    color: #b4b4b4;
  }
  &:active {
    background: #eeeeee;
    transform: translateY(0);
  }
}
</style>
