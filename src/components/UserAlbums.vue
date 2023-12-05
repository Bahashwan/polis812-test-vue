<template>
  <div>
    <NavBar />
    <h1 class="textCenter">{{ user.name }}</h1>
    <h2 class="textCenter">Albums</h2>

    <AlbumCards :albums="albums" :user_name="user.name" />
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import AlbumCards from './AlbumCards.vue';
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
    AlbumCards: AlbumCards,
  },
};
</script>

<style lang="scss" scoped>

.textCenter {
  text-align: center;
}



</style>
