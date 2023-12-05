<template>
  <div>
    <NavBar />
    <h1>{{ user.name }}</h1>
    <h2>Albums</h2>
    <li v-for="album in albums" :key="album.id">
      {{ album.title }}
    </li>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
  computed: {
    user() {
      const userId = parseInt(this.$route.params.id);
      return this.$store.getters.getUserById(userId);
    },
    albums() {
      const userId = parseInt(this.$route.params.id);
      return this.$store.getters.getAlbumsByUserId(userId);
    },
  },
  created() {
    const userId = parseInt(this.$route.params.id);
    this.$store.dispatch('fetchAlbums', userId);
  },
  components: {
    NavBar: NavBar,
  },
};
</script>
