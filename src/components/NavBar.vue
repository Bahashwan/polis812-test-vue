<template>
  <div class="mainDiv">
    <button class="button-37" role="button" @click="stepBack">←Назад</button>
    <button class="button-37" role="button" @click="navigateToMain">
      Главная ⌂ Страница
    </button>
    <button class="button-37" role="button" @click="stepForward">
      Вперед→
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToMain() {
      this.$router.push(`/`);
    },
    stepBack() {
      this.$router.go(-1);
    },
    stepForward() {
      this.$router.go(+1);
    },
  },
};
</script>
<style lang="scss" scoped>
.mainDiv {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.button-37 {
  background-color: #13aa52;
  border: 1px solid #13aa52;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: 'Akzidenz Grotesk BQ Medium', -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  outline: 0;
  padding: 10px 25px;
  text-align: center;
  transform: translateY(0);
  transition: transform 150ms, box-shadow 150ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-37:hover {
  box-shadow: rgba(0, 0, 0, 0.15) 0 3px 9px 0;
  transform: translateY(-2px);
}

@media (min-width: 768px) {
  .button-37 {
    padding: 10px 30px;
  }
}
</style>
