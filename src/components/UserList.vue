<template>
  <div>
    <h1>Users</h1>
    <h4>Нажмите на имя пользователя, чтобы увидеть больше информации.</h4>
    <ul>
      <li v-for="user in users" :key="user.id" @click="navigateToUser(user.id)">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
    this.$store.dispatch('fetchUsers');
  },
};
</script>
