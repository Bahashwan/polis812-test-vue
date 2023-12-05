<template>
  <div>
    <button @click="stepBack">Назад</button
    ><button @click="navigateToMain">Главная Страница</button>
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
  },
};
</script>
