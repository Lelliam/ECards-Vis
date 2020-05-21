import Vue from 'vue'
import Router from 'vue-router'

import AppFunction01 from "../components/AppFunction01";
import AppFunction02 from "../components/AppFunction02";
import AppFunction03 from "../components/AppFunction03";
import AppFunction04 from "../components/AppFunction04";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/function01',
      name: 'AppFunction01',
      component: AppFunction01
    },
    {
      path: '/function02',
      name: 'AppFunction02',
      component: AppFunction02
    },
    {
      path: '/function03',
      name: 'AppFunction03',
      component: AppFunction03
    },
    {
      path: '/function04',
      name: 'AppFunction04',
      component: AppFunction04
    }
  ]
})
