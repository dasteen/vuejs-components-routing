// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
    url: 'https://jsonplaceholder.typicode.com/posts'
  },
  methods: {
    getPosts: () => {
      this.$http.get(this.url).then(function (response) {
        console.log(response)
        this.posts = response.body
      }, function (error) {
        console.log(error)
      })
    }
  },
  created: () => {
    this.getPosts()
  }
})
