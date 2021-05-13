import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
// import { Select, Checkbox, Option,} from 'element-ui';

// Vue.component(Select.name, Select);
// Vue.component(Option.name, Option);
// Vue.component(Checkbox.name, Checkbox);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
