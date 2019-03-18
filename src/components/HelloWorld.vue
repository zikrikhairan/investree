<template>
  <div class="hello">
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-10">

      </div>
      <div class="md-layout-item md-size-25">
        <Card></Card>
      </div>
      <div class="md-layout-item md-size-30">
        <Card></Card>
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

export default {
  name: 'HelloWorld',
  components: {
    Card,
  },
};
</script>
