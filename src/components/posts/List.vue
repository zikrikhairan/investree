<template>
  <div class="home">
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-10">

      </div>
      <div class="md-layout-item md-size-80">
        <md-content class="md-scrollbar">
          <Post :listPost=listPost></Post>
        </md-content>
      </div>
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post.vue';

export default {
  name: 'home',
  components: {
    Post,
  },
  data() {
    return {
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
    };
  },
};
</script>
