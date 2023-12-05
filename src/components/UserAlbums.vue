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
import {gsap} from 'gsap'
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
    this.$store.dispatch('fetchAlbums', userId).then(() => {
      const items = document.querySelectorAll('.albumItem');

      gsap.set(items, { opacity: 0, y: -20 });

      gsap.utils.toArray(items).forEach((item, index) => {
        gsap.to(item, { duration: 0.5, opacity: 1, y: 0, delay: index * 0.1 });
      });
    });
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
