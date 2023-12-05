<template>
  <div>
    <NavBar />
    <div>
      <h1 class="textCenter">{{ user.name }}</h1>
      <h2 @click="navigateToUserAlbums" class="textCenter">Albums</h2>
      <h4 class="textCenter">
        Нажмите на "Albums", чтобы перейти на страницу альбомов.
      </h4>
      <!-- <li v-for="album in albums" :key="album.id">
        {{ album.title }}
      </li> -->
      <MiniAlbumsCards :albums="albums" :user_name="user.name" />
      <h2 @click="navigateToUserPosts" class="textCenter">Posts</h2>
      <h4 class="textCenter">
        Нажмите на "Posts", чтобы перейти на страницу постов.
      </h4>

      <!-- <ul>
        <li v-for="post in posts" :key="post.id">
          {{ post.title }}
        </li>
      </ul> -->
      <MiniPostsCards :posts="posts" :user_name="user.name" />
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import MiniAlbumsCards from './MiniAlbumsCards.vue';
import MiniPostsCards from './MiniPostsCards.vue';
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
    MiniAlbumsCards: MiniAlbumsCards,
    MiniPostsCards: MiniPostsCards,
  },

  created() {
    const userId = parseInt(this.$route.params.id);
    this.$store.dispatch('fetchAlbums', userId);
    this.$store.dispatch('fetchPosts', userId);
  },
};
</script>
<style lang="scss" scoped>
.textCenter {
  text-align: center;
}
</style>
