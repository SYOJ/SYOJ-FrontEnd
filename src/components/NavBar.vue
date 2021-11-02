<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-white md-absolute"
    :active-name="$route.path.split('/')[1]"
    :class="extraNavClasses">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <div @click="$router.push('/')">
          <h3 class="md-title" @click="$router.push('/')">武昌首义学院Online Judge</h3>
        </div>
        <div class="md-collapse-wrapper">
          <mobile-menu nav-mobile-section-start="false">
            <!-- Here you can add your items from the section-start of your toolbar -->
          </mobile-menu>
          <md-list>
            <md-list-item
              :to="{ name: 'home' }">
              <p>主页</p>
            </md-list-item>

            <md-list-item
              :to="{ name: 'problem' }">
              <p>问题</p>
            </md-list-item>

            <md-list-item
              href="javascript:void(0)">
              <p>比赛</p>
            </md-list-item>

            <md-list-item
              href="javascript:void(0)">
              <p>状态</p>
            </md-list-item>

            <md-list-item
              href="javascript:void(0)">
              <p>关于</p>
            </md-list-item>
          </md-list>
        </div>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>
        <div class="md-collapse">
          <mobile-menu nav-mobile-section-start="false">
            <!-- Here you can add your items from the section-start of your toolbar -->
          </mobile-menu>
          <md-list>
            <li class="md-list-item">
              <router-link
                to="/register"
                class="md-list-item-router md-list-item-container md-button-clean">
                <div class="md-list-item-content">
                  <md-button class="md-rose md-simple">注册</md-button>
                </div>
              </router-link>
            </li>
            <li class="md-list-item">
              <router-link
                to="/login"
                class="md-list-item-router md-list-item-container md-button-clean">
                <div class="md-list-item-content">
                  <md-button class="md-rose">登陆</md-button>
                </div>
              </router-link>
            </li>
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
import MobileMenu from '@/layout/MobileMenu';

let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();
    }, 66);
  }
}

export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: 'white',
      validator(value) {
        return [
          'white',
          'default',
          'primary',
          'danger',
          'success',
          'warning',
          'info'
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      extraNavClasses: '',
      toggledClass: false
    };
  },
  computed: {

  },
  methods: {
    bodyClick() {
      const bodyClick = document.getElementById('bodyClick');

      if (bodyClick === null) {
        const body = document.querySelector('body');
        const elem = document.createElement('div');
        elem.setAttribute('id', 'bodyClick');
        body.appendChild(elem);

        const bodyClick = document.getElementById('bodyClick');
        bodyClick.addEventListener('click', this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    }
  },
  mounted() {
    document.addEventListener('scroll', this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.scrollListener);
  }
};
</script>

<style scoped>

</style>
