import { createRouter, createWebHistory } from "vue-router";
// @ts-ignore
import BoardsLayout from "../views/BoardsLayout.vue"
// @ts-ignore
import SingleTask from "../views/SingleTask.vue"

const routes = [
  {
    path: "/",
    name: "BoardsLayout",
    component: BoardsLayout
  },
  {
    path: "/tasks/:id",
    name: "SingleTask",
    component: SingleTask
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
