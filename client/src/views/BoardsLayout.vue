<template>
  <div class="boards-layout">
    <Navbar />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "boardsLayout",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
.boards-layout {
  background: url("../assets/corkboard.jpg") no-repeat center center fixed;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>