<template>
  <div class="home">
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-10">

      </div>
      <div class="md-layout-item md-size-25">
        <Card></Card>
      </div>
      <div class="md-layout-item md-size-30">
        <md-content class="md-scrollbar">
          <Post :listPost=listPost></Post>
        </md-content>
      </div>
      <div class="md-layout-item md-size-25">
        <Card></Card>
      </div>
      <div class="md-layout-item md-size-10">

      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import Post from '@/components/Post.vue';

export default {
  name: 'home',
  components: {
    Card,
    Post,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
  .md-content {
    max-width: 400px;
    max-height: 400px;
    overflow: auto;
  }
</style>
