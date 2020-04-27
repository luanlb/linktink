<template>
  <div>
    <!-- Start Navbar Area -->
    <div :class="['navbar-area', {'is-sticky': isSticky}]">
      <div class="comero-nav">
        <div class="container">
          <nav class="navbar navbar-expand-md navbar-light">
            <nuxt-link class="navbar-brand" to="/">Cavender</nuxt-link>

            <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>

            <b-collapse class="collapse navbar-collapse" id="navbarSupportedContent" is-nav>
              <ul class="navbar-nav">
                <li class="nav-item p-relative"></li>

                <li class="nav-item p-relative">
                  <a href="#" class="nav-link">Track your order</a>
                </li>
                <li class="nav-item p-relative">
                  <a href="#" class="nav-link">Shiping</a>
                </li>
                <li class="nav-item p-relative">
                  <a href="#" class="nav-link">RETURNS & REFUND POLICY</a>
                </li>
                <li class="nav-item p-relative">
                  <a href="#" class="nav-link">RETURNS & REFUND POLICY</a>
                </li>
              </ul>

              <div class="others-option">
                <div class="option-item">
                  <a @click.prevent="toggle" href="#">
                    Cart({{cart.length}})
                    <i class="fas fa-shopping-bag"></i>
                  </a>
                </div>
              </div>
            </b-collapse>
          </nav>
        </div>
      </div>
    </div>
    <!-- End Navbar Area -->

    <SidebarPanel></SidebarPanel>
  </div>
</template>

<script>
import SidebarPanel from "../layouts/SidebarPanel";
import { mutations } from "../utils/sidebar-util";
export default {
  components: {
    SidebarPanel
  },
  data() {
    return {
      isSticky: false
    };
  },
  mounted() {
    const that = this;
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 100) {
        that.isSticky = true;
      } else {
        that.isSticky = false;
      }
    });
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
    }
  },
  methods: {
    toggle() {
      mutations.toggleNav();
    }
  }
};
</script>