<template>
  <div>
    <h1>{{ user.name }}</h1>
    <h2>Posts</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      const userId = parseInt(this.$route.params.id);
      return this.$store.getters.getUserById(userId);
    },

    posts() {
      const userId = parseInt(this.$route.params.id);
      return this.$store.getters.getPostsByUserId(userId);
    },
  },
  created() {
    const userId = parseInt(this.$route.params.id);
    this.$store.dispatch('fetchAlbums', userId);
    this.$store.dispatch('fetchPosts', userId);
  },
};
</script>
