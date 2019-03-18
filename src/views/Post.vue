<template>
  <div id="post-index">
    <br>
    <md-tabs class="md-accent" md-alignment="right">
      <md-tab id="tab-post-list" md-label="Post - List" to="/post/list"></md-tab>
      <md-tab id="tab-post-create" md-label="Post - Create" to="/post/create"></md-tab>
      <md-tab id="tab-post-edit" md-label="Post - Edit" to="/post/edit"></md-tab>
    </md-tabs>
    <router-view/>
  </div>
</template>
