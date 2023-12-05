<template>
  <div>
    <NavBar />
    <div>
      <h1>{{ user.name }}</h1>
      <h2 @click="navigateToUserAlbums">Albums</h2>
      <h4>Нажмите на "Albums", чтобы перейти на страницу альбомов.</h4>
      <li v-for="album in albums" :key="album.id">
        {{ album.title }}
      </li>
      <h2 @click="navigateToUserPosts">Posts</h2>
      <h4>Нажмите на "Posts", чтобы перейти на страницу постов.</h4>

      <ul>
        <li v-for="post in posts" :key="post.id">
          {{ post.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
  methods: {
    navigateToUserAlbums() {
      this.$router.push(`/user/${this.user.id}/albums`);
    },
    navigateToUserPosts() {
      this.$router.push(`/user/${this.user.id}/posts`);
    },
  },
  computed: {
    user() {
      const userId = parseInt(this.$route.params.id);
      return this.$store.getters.getUserById(userId);
    },
    albums() {
      const userId = parseInt(this.$route.params.id);
      return this.$store.getters.getAlbumsByUserId(userId);
    },
    posts() {
      const userId = parseInt(this.$route.params.id);
      return this.$store.getters.getPostsByUserId(userId);
    },
  },
  components: {
    NavBar: NavBar,
  },

  created() {
    const userId = parseInt(this.$route.params.id);
    this.$store.dispatch('fetchAlbums', userId);
    this.$store.dispatch('fetchPosts', userId);
  },
};
</script>
