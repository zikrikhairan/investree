<template>
  <div id="layout-header">
    <div style="position:absolute; top:0px; left:0px; z-index:1">
      <md-button class="md-primary toolbar-button" aria-label="toggle fullscreen">
        <router-link to="/" id="logo">
          <img src="../../assets/logo2.png" alt="">
        </router-link>
      </md-button>
    </div>
    <md-tabs class="md-accent" md-alignment="right">
      <md-tab id="tab-dashboard" md-label="Dashboard" to="/user" v-if=isLogin></md-tab>
      <md-tab id="tab-post" md-label="Post" to="/post/list" v-if=isLogin></md-tab>
      <md-tab id="tab-page" md-label="Page" to="/page" v-if=isLogin></md-tab>
      <md-tab id="tab-profile" md-label="Profile" to="/user/profile" v-if=isLogin></md-tab>
      <md-tab id="tab-logout" md-label="Logout" to="/user/logout" v-if=isLogin></md-tab>
      <md-tab id="tab-login" md-label="Login" to="/login" v-if=isLogout></md-tab>
      <md-tab id="tab-register" md-label="Register" to="/register" v-if=isLogout></md-tab>
    </md-tabs>
  </div>
</template>
<script>
export default {
  name: 'layout-header',
  computed: {
    isLogin() {
      if (this.$store.state.token) {
        return true;
      }
      return false;
    },
    isLogout() {
      if (this.$store.state.token) {
        return false;
      }
      return true;
    },
  },
};
</script>
