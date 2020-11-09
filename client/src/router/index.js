import { createRouter, createWebHistory } from "vue-router";
// @ts-ignore
import BoardsLayout from "../views/BoardsLayout.vue"

const routes = [
  {
    path: "/",
    name: "BoardsLayout",
    component: BoardsLayout
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
