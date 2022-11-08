/**
 * Vue Router
 *
 * @library
 *
 * https://router.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
import Router from 'vue-router'

// Routes
import branches from '@/views/branches.vue';

Vue.use(Router)

// Create a new router
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'branches',
      component: branches,
    },  
]
})

  export default router