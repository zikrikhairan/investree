import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.token,
    listPost: [
      {
        id_post: 101, image: 'image-1.jpg', title: 'Post 1', content: 'Content 5',
      },
      {
        id_post: 102, image: 'image-2.jpg', title: 'Post 2', content: 'Content 5',
      },
      {
        id_post: 103, image: 'image-3.jpg', title: 'Post 3', content: 'Content 5',
      },
      {
        id_post: 104, image: 'image-4.jpg', title: 'Post 4', content: 'Content 5',
      },
      {
        id_post: 105, image: 'image-5.jpg', title: 'Post 5', content: 'Content 5',
      },
    ],
    userProfile: {
      nama: 'Zikri Khairan',
      email: 'zikrikhairan@investree.id',
      phone: '085274144428',
    },
  },
  mutations: {
    isLogin(token) {
      this.state.token = token;
      localStorage.token = token;
    },
    doLogout() {
      this.state.token = null;
      localStorage.removeItem('token');
    },
  },
  actions: {

  },
});
