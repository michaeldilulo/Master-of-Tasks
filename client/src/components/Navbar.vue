<template>
  <div class="navbar-tasks">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 p-0">
          <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
            <p class="navbar-brand text-light mr-2">
              Master-of-Tasks
            </p>
            <i class="devicon-vuejs-plain text-light"></i>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto"></ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
i {
  font-size: 30px;
}

p.navbar-brand.text-light {
  margin: auto;
  font-size: 22px;
}
</style>