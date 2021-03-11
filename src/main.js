import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex);
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  }
})

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
