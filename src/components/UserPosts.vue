<template>
  <div>
    <NavBar />

    <h1 class="textCenter">{{ user.name }}</h1>
    <h2 class="textCenter">Posts</h2>
    <!-- <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul> -->
    <PostsCards :posts="posts" :user_name="user.name" />
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import PostsCards from './PostsCards.vue';
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
  components: {
    NavBar: NavBar,
    PostsCards: PostsCards,
  },
};
</script>
<style lang="scss" scoped>
.textCenter {
  text-align: center;
}
</style>
