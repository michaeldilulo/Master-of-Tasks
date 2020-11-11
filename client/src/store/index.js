import { createStore } from "vuex";
import axios from "axios"

let _masterOfTaskApi = axios.create({
  baseURL: "//localhost:3000/api",
  timeout: 5000
})

export default createStore({
  state: {
    task: []
  },
  mutations: {
    createTask(state, task) {
      state.task.push(task)
    },
    getAllTasks(state, data) {
      state.task = data;
    }
  },
  actions: {
    async addTask({ commit }, task) {
      let res = await _masterOfTaskApi.post("tasks", task)
      commit("createTask", res.data)
    },
    async getAllTasks({ commit }) {
      let res = await _masterOfTaskApi.get("tasks")
      commit("getAllTasks", res.data)
    }
  },
  modules: {}
});
