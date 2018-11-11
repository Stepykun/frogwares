import Vue from 'vue'
import Router from 'vue-router'
import mainPage from './components/mainPage.vue'
import statusBtn from './components/statusBtn.vue'
import questInfo from '@/components/questInfo.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    },
    {
      path: '/quest/:alias/:globalId/:status',
      name: 'questInfo',
      component: questInfo
    }
  ]
})
