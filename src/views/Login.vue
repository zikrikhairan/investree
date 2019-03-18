<template>
  <div id="login">
    <div class="centered-container">
      <md-content class="md-elevation-3">
        <div class="title">
          <img src="https://vuematerial.io/assets/logo-color.png">
          <div class="md-title">Vue Material</div>
          <div class="md-body-1">Build beautiful apps with Material Design and Vue.js</div>
        </div>

        <div class="form">
          <md-field>
            <label>E-mail</label>
            <md-input v-model="login.email" autofocus></md-input>
          </md-field>

          <md-field md-has-password>
            <label>Password</label>
            <md-input v-model="login.password" type="password"></md-input>
          </md-field>
        </div>

        <div class="actions md-layout md-alignment-center-space-between">
          <a href="/resetpassword">Reset password</a>
          <md-button class="md-raised md-primary" @click="doLogin">Log in</md-button>
        </div>

        <div class="loading-overlay" v-if="loading">
          <md-progress-spinner md-mode="indeterminate" :md-stroke="2"></md-progress-spinner>
        </div>

      </md-content>
      <div class="background" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  components: {

  },
  data() {
    return {
      loading: false,
      login: {
        email: '',
        password: '',
      },
      info: '',
    };
  },
  methods: {
    doLogin() {
      this.$axios.post('http://52.221.223.104:3000/api/Users/login', { email: this.login.email, password: this.login.password })
        .then(request => this.loginSuccessful(request))
        .catch(error => this.loginFailed(error));
    },
    loginSuccessful(req) {
      if (!req.data.id) {
        this.loginFailed();
        return;
      }
      const token = req.data.id;
      this.$store.commit('isLogin', token);
      localStorage.token = token;
      this.error = false;
      this.$router.replace(this.$route.query.redirect || '/user/profile');
    },
    loginFailed(error) {
      this.error = 'login failed!';
      delete localStorage.token;
    },
  },
};
</script>

<style lang="scss">
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 5%;
  .title {
    text-align: center;
    margin-bottom: 30px;
    img {
      margin-bottom: 16px;
      max-width: 80px;
    }
  }
  .actions {
    .md-button {
      margin: 0;
    }
  }
  .form {
    margin-bottom: 60px;
  }
  .background {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 0;
  }
  .md-content {
    z-index: 1;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    position: relative;
  }
  .loading-overlay {
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
