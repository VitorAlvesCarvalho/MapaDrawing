import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import vuetify from './plugins/vuetify';
import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css' // needs css-loader
import { DrawInteraction } from 'vuelayers'

Vue.use(DrawInteraction)
Vue.use(VueLayers)
Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
