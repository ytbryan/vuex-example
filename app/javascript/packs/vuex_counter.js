import Vue from 'vue'

import App from '../parts/vuex_counter/vuex_counter.vue'


document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('hello'))
  const app = new Vue({
    render: h => h(App)
  }).$mount('hello')
  //console.log(app)
})