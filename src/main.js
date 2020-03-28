import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import chartkick from 'vue-chartkick';
import char from 'chart.js';
chartkick.options = {
  colors: ["#b00", "#222"]
}
Vue.use(chartkick.use(char));

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
