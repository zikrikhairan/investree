<template>
  <div id="post-create">
    <div class="centered-container">
      <md-content class="md-elevation-10">
        <div class="title">
          <div class="md-title">Post Create</div>
        </div>
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <span v-for="(error, index) in errors" v-bind:key="index"><br>{{ error }}</span>
        </p>
        <div class="form">
          <md-field>
            <label>Title</label>
            <md-input v-model="post.title" autofocus type="text"></md-input>
          </md-field>

          <md-field>
            <label>Content</label>
            <wysiwyg v-model="post.content" />
          </md-field>
        </div>

        <div class="actions md-layout md-alignment-center">
          <md-button class="md-raised md-primary" @click="doCreatePost">Create Post</md-button>
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
  name: 'post-create',
  data() {
    return {
      post: {
        title: null,
        content: null,
      },
      errors: [],
      loading: false,
    };
  },
  methods: {
    doCreatePost() {
      const data = this.post;
      const check = this.validate(data);
      if (check) {
        console.log(data);
        // this.$axios.post('http://52.221.223.104:3000/api/Users', data)
        //   .then(request => this.registerSuccessful(request))
        //   .catch(error => this.registerFailed(error));
      }
    },
    createPostSuccessful(request) {
      console.log(request);
      if (request.status === 200) {
        this.$router.replace(this.$route.query.redirect || '/login');
      }
    },
    createPostFailed(error) {
      console.log(error);
    },
    validate(data) {
      if (data.title
        && data.content) {
        return true;
      }
      this.errors = [];
      if (!data.title) {
        this.errors.push('Title required.');
      }
      if (!data.content) {
        this.errors.push('Content required.');
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
