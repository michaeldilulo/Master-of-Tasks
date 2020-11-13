<template>
  <div class="single-task-navbar">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 p-0 d-flex justify-content-center">
          <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
            <form>
              <input
                type="text"
                class="mr-2 mt-3"
                placeholder="Enter List Item Here.."
              />
              <button class="btn btn-success btn-sm" type="submit">
                Add List Item
              </button>
            </form>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "single-task-navbar",
};
</script>

<style>
</style>