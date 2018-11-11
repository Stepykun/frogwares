import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
import vueRouter from 'vue-router'
import router from './router'
Vue.config.productionTip = false
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheck)
library.add(faTimes)
library.add(faMinus)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(vueResource)
Vue.use(vueRouter)
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
