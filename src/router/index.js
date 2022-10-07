import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue"
import About from "../pages/About.vue"
import Projects from "../pages/Projects.vue"
import Contact from "../pages/Contact.vue"

const routes = [{
  path: "/",
  component: Home,
  name: "Home",
}, {
  path: "/about",
  component: About,
  name: "About",
}, {
  path: "/projects",
  component: Projects,
  name: "Projects",
}, {
  path: "/contact",
  component: Contact,
  name: "Contact",
}]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth'
      };
    }
    return { x: 0, y: 0 };  // Go to the top of the page if no hash
  },
  routes,
});

export default router;