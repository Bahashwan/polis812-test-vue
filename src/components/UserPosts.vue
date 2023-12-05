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
import {gsap} from 'gsap'
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
    this.$store.dispatch('fetchPosts', userId).then(() => {
      const items = document.querySelectorAll('.postItem');

      gsap.set(items, { opacity: 0, y: -20 });

      gsap.utils.toArray(items).forEach((item, index) => {
        gsap.to(item, { duration: 0.5, opacity: 1, y: 0, delay: index * 0.1 });
      });
    });
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
