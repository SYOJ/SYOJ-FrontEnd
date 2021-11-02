import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';

import MaterialKit from '@/plugins/material-kit';

Vue.config.productionTip = false;

Vue.use(MaterialKit);

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

Vue.directive('format', {
  inserted: function (el) {
    if (el.innerText.length === 3) {
      el.innerText = '';
      return;
    }
    const tar = el.innerText.substring(2, el.innerText.length - 1)
    if (tar === null || parseInt(tar) < 60) return;
    el.innerText = el.innerText.substring(0, 2) + parseInt((tar) / 60) + '°' + parseInt(tar) % 60 + '\'';
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
