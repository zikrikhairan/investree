<template>
  <div class="logout">
    <h1>JJAJAJ</h1>
  </div>
</template>

<script>

export default {
  created() {
    this.$store.commit('doLogout');
    this.$router.replace(this.$route.query.redirect || '/');
  },
};
</script>
