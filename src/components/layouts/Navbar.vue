<template>
  <div id="layout-navbar">
    <md-tabs class="md-accent" md-alignment="left">
      <md-tab id="tab-home" md-label="Home" to="/home"></md-tab>
      <md-tab id="tab-doubt" md-label="Doubt" to="/doubt"></md-tab>
      <md-tab id="tab-culture" md-label="Culture" to="/culture"></md-tab>
      <md-tab id="tab-tech" md-label="Tech" to="/tech"></md-tab>
      <md-tab id="tab-startup" md-label="Startups" to="/startups"></md-tab>
    </md-tabs>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'layout-navbar',
  computed: {
  },
};
</script>
