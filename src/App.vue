<template>
  <div class="layout">
    <NavBar></NavBar>
    <transition name="fade" mode="out-in">
      <router-view v-if="isRouterAlive"/>
    </transition>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Vue from 'vue';

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

export default {
  name: 'App',
  components: {
    NavBar
  },
  provide: function() {
    return {
      reload: this.reload
    }
  },
  data: function() {
    return {
      secondsTimer: null,
      isRouterAlive: true
    }
  },
  methods: {
    reload: function() {
      this.isRouterAlive = false;
      this.$nextTick(() => (this.isRouterAlive = true));
    }
  },
  beforeDestroy: function() {
    if (this.secondsTimer) {
      clearInterval(this.secondsTimer);
    }
  }
};
</script>

<style lang="less" scoped>
.fade-leave-active,
.fade-enter-active {
  transition: all 0.23s;
}
.fade-enter {
  opacity: 0;
  transform: translateY(30px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
