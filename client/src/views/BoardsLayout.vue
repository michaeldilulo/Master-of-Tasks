<template>
  <div class="boards-layout">
    <Navbar />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "boardsLayout",
  components: {
    Navbar
  }
};
</script>
