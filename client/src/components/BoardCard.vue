<template>
  <div class="board-card">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 mt-4 mb-4" v-for="task in task" :key="task.id">
          <div class="card bg-dark">
            <div class="card-body">
              <h3 class="card-title text-light d-flex justify-content-center">
                {{ task.title }}
              </h3>
              <p class="text-light" href="#">
                <strong>Description:</strong>
              </p>
              <p class="card-text text-light">
                {{ task.description }}
              </p>
              <router-link
                :to="{ name: 'SingleTask', params: { id: task._id } }"
              >
                <a
                  href="#"
                  class="btn btn-danger d-flex justify-content-center"
                >
                  Click to view Details
                </a>
              </router-link>
              <button
                class="btn btn-warning mt-3"
                @click="deleteTask(task._id)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "board-card",
  methods: {
    deleteTask(_id) {
      this.$store.dispatch("deleteTask", _id);
    },
  },
  computed: {
    task() {
      return this.$store.state.task;
    },
  },
};
</script>

<style>
a.btn.btn-danger.d-flex.justify-content-center {
  font-size: 18px;
}
.card {
  border-radius: 7px;
}
</style>