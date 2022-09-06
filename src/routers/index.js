import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../views/MainLayout.vue";
import Form from "../components/Form.vue";
import FormDetails from "../components/FormDetails.vue";
import UserList from "../components/UserList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "/",
          component: Form,
        },
        {
          path: "detail",
          component: FormDetails,
        },
        {
          path: "list",
          component: UserList,
        },
      ],
    },
  ],
});
export default router;
