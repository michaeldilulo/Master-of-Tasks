<template>
  <div class="single-task">
    <SingleTaskNavbar />
    <h1 class="text-primary">{{ task }}</h1>
  </div>
</template>

<script>
import SingleTaskNavbar from "@/components/SingleTaskNavbar.vue";
export default {
  name: "single-task",
  computed: {
    task() {
      return this.$store.state.task;
    },
  },
  components: {
    SingleTaskNavbar,
  },
};
</script>

<style>
</style>