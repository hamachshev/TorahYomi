import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import CreateAccountView from "../views/CreateAccountView.vue";
import NachYomi from "../views/NachYomi.vue";
import SubjectView from "../views/SubjectView.vue";
import LimudView from "../views/LimudView.vue";
import AccountView from "../views/AccountView.vue";
import OnboardingView from "../views/OnboardingView.vue";
import EditSubjects from "../views/EditSubjects.vue";
import UpdateLimudim from "../views/UpdateLimudim.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/createAccount",
      name: "createAccount",
      component: CreateAccountView,
    },
    {
      path: "/NachYomi",
      name: "NachYomi",
      component: NachYomi,
    },
    {
      path: "/subjects",
      name: "subjects",
      component: SubjectView,
    },
    {
      path: "/subjects/:limud",
      component: LimudView,
    },
    {
      path: "/account",
      component: AccountView,
    },
    {
      path: "/onboarding",
      component: OnboardingView,
    },
    {
      path: "/editsubjects",
      component: EditSubjects,
    },
    {
      path: "/update",
      component: UpdateLimudim,
    },
  ],
});

export default router;
