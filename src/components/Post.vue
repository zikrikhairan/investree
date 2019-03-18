<template>
  <div class="post">
    <md-card class="md-primary" md-theme="black-card"
      v-for="{id_post, image, title, content} in listPost"
      :key="id_post">
      <a v-bind:href="'/post/'+ id_post">
        <md-card-header>
          <md-card-media>
            <img v-bind:src="require('@/assets/' + image)" alt="Image">
          </md-card-media>
          <md-card-header-text>
            <div class="md-title">{{title}}</div>
            <div class="md-subhead">{{content}}</div>
          </md-card-header-text>
        </md-card-header>
      </a>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'post',
  props: {
    listPost: Array,
  },
};
</script>
