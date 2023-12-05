<template>
  <div>
    <NavBar />
    <h1>Users</h1>
    <h4>Нажмите на имя пользователя, чтобы увидеть больше информации.</h4>

    <UsersCards :users="users" />
  </div>
</template>

<script>
import { gsap } from 'gsap';
import UsersCards from './UsersCards.vue';
import NavBar from './NavBar.vue';
export default {
  components: {
    UsersCards: UsersCards,
    NavBar: NavBar,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    navigateToUser(userId) {
      this.$router.push(`/user/${userId}`);
    },
  },
  mounted() {
    this.$store.dispatch('fetchUsers').then(() => {
      const items = document.querySelectorAll('.userItem');

      gsap.set(items, { opacity: 0, y: -20 });

      gsap.utils.toArray(items).forEach((item, index) => {
        gsap.to(item, { duration: 0.5, opacity: 1, y: 0, delay: index * 0.1 });
      });
    });
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
h4 {
  text-align: center;
}
.usersList {
  display: flex;

  flex-wrap: wrap;
  gap: 30px;
  display: flex;
  justify-content: center; /* Horizontal centering */
  align-items: center;
}
</style>
