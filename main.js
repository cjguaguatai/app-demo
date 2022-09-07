import App from './App'

// #ifndef VUE3
import * as filter from '@/filters/filters.js'
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
Object.keys(filter).forEach((key) => {
  Vue.filter(key, filter[key])
})
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
  createSSRApp
} from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
