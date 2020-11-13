<template>
  <div class="navbar-tasks">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 p-0 mb-2 d-flex justify-content-start">
          <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
            <p class="navbar-brand text-light mr-2">Master-of-Tasks</p>
            <i class="devicon-vuejs-plain text-light"></i>
          </nav>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 mt-3">
          <form @submit.prevent="addTask" class="bg-dark p-3 task-form">
            <h3 class="d-flex justify-content-center text-light mb-3">
              Enter Task Name
            </h3>
            <div class="d-flex justify-content-start">
              <input
                v-model="newTask.title"
                type="text"
                placeholder="Enter Task Name..."
                class="mr-2 mb-2 input-field"
              />
            </div>
            <div>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="4"
                placeholder="Enter Task Description..."
                v-model="newTask.description"
              ></textarea>
            </div>
            <br />
            <div class="d-flex justify-content-center">
              <button class="btn btn-success" type="submit">Add Task</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <BoardCard />
  </div>
</template>

<script>
import BoardCard from "@/components/BoardCard.vue";
export default {
  mounted() {
    this.$store.dispatch("getAllTasks");
  },
  name: "Navbar",
  data() {
    return {
      newTask: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    addTask() {
      let task = { ...this.newTask };
      this.$store.dispatch("addTask", task);
      this.newTask = {
        title: "",
        description: "",
      };
    },
  },
  computed: {
    task() {
      return this.$store.state.task;
    },
  },
  components: {
    BoardCard,
  },
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

button.btn.btn-success.btn-sm {
  margin-bottom: 3px;
}

input {
  border-radius: 5px;
}

.task-form {
  border-radius: 5px;
}
</style>