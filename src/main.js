import Vue from 'vue'
import App from './App.vue'
// import Vuex from 'vuex'
import store from './store'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'amfe-flexible/index.js'  //设置rem基准值
Vue.use(Vant);


// Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
