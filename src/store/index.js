import { createStore } from 'vuex';
import axios from 'axios';


export default createStore({
  state: {
    users: [],
    albums: [],
    posts: [],
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setAlbums(state, albums) {
      state.albums = albums;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    fetchUsers({ commit }) {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          commit('setUsers', response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    fetchAlbums({ commit }, userId) {
        console.log(userId);
      axios
        .get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        .then((response) => {
          commit('setAlbums', response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    fetchPosts({ commit }, userId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((response) => {
          commit('setPosts', response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  getters: {
    getUserById: (state) => (id) => {
      return state.users.find((user) => user.id === id);
    },
    getAlbumsByUserId: (state) => (userId) => {
      return state.albums.filter((album) => album.userId === userId);
    },
    getPostsByUserId: (state) => (userId) => {
      return state.posts.filter((post) => post.userId === userId);
    },
  },
});
