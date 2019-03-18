<template>
  <div class="logout">
    <h1>Logout</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'logout',
  created() {
    this.$store.commit('doLogout');
    this.$router.replace('/');
  },
};
</script>
