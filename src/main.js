import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from "vue-axios";
import Vant from 'vant';

Vue.use(VueAxios, axios, Vant) // this.axios/this.$http 为axios对象

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
