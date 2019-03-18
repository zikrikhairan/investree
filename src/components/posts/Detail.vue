<template>
  <div class="post-detail">
    <div v-if=getData(getId)>
      <h1>Post Detail</h1>
      <h3>{{detail_post.id_post}}</h3>
      <h3>{{detail_post.image}}</h3>
      <h3>{{detail_post.title}}</h3>
      <h3>{{detail_post.content}}</h3>
    </div>
      <a v-bind:href="'/post/edit/'+ detail_post.id_post">Edit</a>
  </div>
</template>

<script>

export default {
  name: 'post-detail',
  data() {
    return {
      detail_post: [],
    };
  },
  methods: {
    getData(id) {
      console.log(id);
      const detailPost = this.$store.state.listPost.find(detailPost => detailPost.id_post == id);
      console.log(detailPost);
      this.detail_post = detailPost;
      return detailPost;
    },
  },
  computed: {
    getId() {
      return this.$route.params.id;
    },
  },
};
</script>
