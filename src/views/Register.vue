<template>
  <div id="register">
    <div class="centered-container">
      <md-content class="md-elevation-3">
        <div class="title">
          <img src="https://vuematerial.io/assets/logo-color.png">
          <div class="md-title">Register</div>
        </div>
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <span v-for="(error, index) in errors" v-bind:key="index"><br>{{ error }}</span>
        </p>
        <div class="form">
          <md-field>
            <label>E-mail</label>
            <md-input v-model="register.email" autofocus type="email"></md-input>
          </md-field>

          <md-field>
            <label>Name</label>
            <md-input v-model="register.name" autofocus></md-input>
          </md-field>

          <md-field md-has-password>
            <label>Password</label>
            <md-input v-model="register.password" type="password"></md-input>
          </md-field>

          <md-field>
            <label>Phone</label>
            <md-input v-model="register.phone" autofocus></md-input>
          </md-field>

          <md-field>
            <label>Sapaan</label>
            <md-input v-model="register.sapaan" autofocus></md-input>
          </md-field>

        </div>

        <div class="actions md-layout md-alignment-center">
          <md-button class="md-raised md-primary" @click="doRegister">Register</md-button>
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
  name: 'register',
  components: {

  },
  data() {
    return {
      register: {
        email: null,
        name: null,
        password: null,
        phone: null,
        sapaan: null,
        emailVerified: true,
      },
      errors: [],
      loading: false,
    };
  },
  methods: {
    doRegister() {
      const data = this.register;
      const check = this.validate(data);
      if (check) {
        this.$axios.post('http://52.221.223.104:3000/api/Users', data)
          .then(request => this.registerSuccessful(request))
          .catch(error => this.registerFailed(error));
      }
    },
    registerSuccessful(request) {
      console.log(request);
      if (request.status === 200) {
        this.$router.replace(this.$route.query.redirect || '/login');
      }
    },
    registerFailed(error) {
      console.log(error);
    },
    validate(data) {
      if (data.email
        && data.name
        && data.password
        && data.phone
        && data.sapaan
        && data.emailVerified) {
        return true;
      }
      this.errors = [];
      if (!data.email) {
        this.errors.push('Email required.');
      }
      if (!data.name) {
        this.errors.push('Name required.');
      }
      if (!data.password) {
        this.errors.push('Password required.');
      }
      if (!data.phone) {
        this.errors.push('Phone required.');
      }
      if (!data.sapaan) {
        this.errors.push('Sapaan required.');
      }
      return false;
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
