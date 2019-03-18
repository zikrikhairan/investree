<template>
  <div class="user-profile">
    <h1>This is User Profile Page</h1>
    <div class="centered-container">
      <md-content class="md-elevation-10">
        <div class="title">
          <div class="md-title">Update Profile</div>
        </div>
        <div class="form">
          <md-field>
            <label>Nama</label>
            <md-input v-model="userProfile.nama" autofocus type="text"></md-input>
          </md-field>

          <md-field>
            <label>Email</label>
            <md-input v-model="userProfile.email" autofocus type="email"></md-input>
          </md-field>

          <md-field>
            <label>Email</label>
            <md-input v-model="userProfile.phone" autofocus type="email"></md-input>
          </md-field>
        </div>

        <div class="actions md-layout md-alignment-center">
          <md-button class="md-raised md-primary" @click="doUserProfile">Update Profile</md-button>
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
  name: 'user-profile',
  data() {
    return {
      userProfile: [],
      errors: [],
      loading: false,
    };
  },
  methods: {
    doUserProfile() {
      const data = this.post;
      const check = this.validate(data);
      if (check) {
        console.log(data);
        // this.$axios.post('http://52.221.223.104:3000/api/Users', data)
        //   .then(request => this.registerSuccessful(request))
        //   .catch(error => this.registerFailed(error));
      }
    },
  },
  created() {
    let userProfile = this.$store.state.userProfile;
    this.userProfile = userProfile;
  },
};
</script>


<style lang="scss">
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1%;
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
    max-width: 80%;
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
