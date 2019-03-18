<template>
  <div id="post-edit">
    <div class="centered-container">
      <md-content class="md-elevation-10">
        <div class="title">
          <div class="md-title">Post Edit</div>
        </div>
        <div class="form">
          <md-field>
            <label>Title</label>
            <md-input v-model="edit_post.title" autofocus type="text"></md-input>
          </md-field>

          <md-field>
            <label>Content</label>
            <wysiwyg v-model="edit_post.content" />
          </md-field>
        </div>

        <div class="actions md-layout md-alignment-center">
          <md-button class="md-raised md-primary" @click="doEditPost">Edit Post</md-button>
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
  name: 'post-edit',
  data() {
    return {
      edit_post: {
        title: null,
        content: null,
      },
      errors: [],
      loading: false,
    };
  },
  methods: {
    doEditPost(id) {
      console.log(id);
      return id;
    },
  },
  created() {
    const id = this.$route.params.id;
    const listPost = this.$store.state.listPost;
    const editPost = listPost.find(postEdit => postEdit.id_post == id);
    this.edit_post = editPost;
  },
  computed: {
    getId() {
      return this.$route.params.id;
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
