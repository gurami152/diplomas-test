import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueHtmlToPaper from 'vue-html-to-paper';

Vue.config.productionTip = false

require('@/../public/styles/style.css')

let basePath= 'http://localhost:8080';

const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    // 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    // 'https://unpkg.com/kidlat-css/css/kidlat.css',
      `${basePath}/styles/style.css`
  ],
  timeout: 1000, // default timeout before the print window appears
  autoClose: true, // if false, the window will not close after printing
  windowTitle: window.document.title, // override the window title
}

Vue.use(VueHtmlToPaper, options);

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
