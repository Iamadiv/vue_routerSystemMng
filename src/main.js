// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import {store} from './vuex/store'
import iView from 'iview'
import ElementUI from 'element-ui'
import 'iview/dist/styles/iview.css'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'


Vue.config.productionTip = false
Vue.prototype.$echarts = echarts 
Vue.use(router)
Vue.use(iView)
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(echarts)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  iView,
  Vuex,
  echarts,
  store:store,
  ElementUI,
  components: { App },
  template: '<App/>'
})
