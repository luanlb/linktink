import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7d992b04 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _7c962638 = () => interopDefault(import('../pages/blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _6ce00f5c = () => interopDefault(import('../pages/blog-one.vue' /* webpackChunkName: "pages/blog-one" */))
const _879d6a7e = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _7a5ced67 = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _bf2ddde2 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _6534fa5c = () => interopDefault(import('../pages/diction-three.vue' /* webpackChunkName: "pages/diction-three" */))
const _52a16100 = () => interopDefault(import('../pages/diction-two.vue' /* webpackChunkName: "pages/diction-two" */))
const _6b98254c = () => interopDefault(import('../pages/gallery-one.vue' /* webpackChunkName: "pages/gallery-one" */))
const _596bb998 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _60b23285 = () => interopDefault(import('../pages/products.vue' /* webpackChunkName: "pages/products" */))
const _378747a0 = () => interopDefault(import('../pages/shipping-policy.vue' /* webpackChunkName: "pages/shipping-policy" */))
const _20656679 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _223d8925 = () => interopDefault(import('../pages/products-details/_id.vue' /* webpackChunkName: "pages/products-details/_id" */))
const _e077d2fe = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _7d992b04,
    name: "admin"
  }, {
    path: "/blog-details",
    component: _7c962638,
    name: "blog-details"
  }, {
    path: "/blog-one",
    component: _6ce00f5c,
    name: "blog-one"
  }, {
    path: "/cart",
    component: _879d6a7e,
    name: "cart"
  }, {
    path: "/checkout",
    component: _7a5ced67,
    name: "checkout"
  }, {
    path: "/contact",
    component: _bf2ddde2,
    name: "contact"
  }, {
    path: "/diction-three",
    component: _6534fa5c,
    name: "diction-three"
  }, {
    path: "/diction-two",
    component: _52a16100,
    name: "diction-two"
  }, {
    path: "/gallery-one",
    component: _6b98254c,
    name: "gallery-one"
  }, {
    path: "/login",
    component: _596bb998,
    name: "login"
  }, {
    path: "/products",
    component: _60b23285,
    name: "products"
  }, {
    path: "/shipping-policy",
    component: _378747a0,
    name: "shipping-policy"
  }, {
    path: "/signup",
    component: _20656679,
    name: "signup"
  }, {
    path: "/products-details/:id?",
    component: _223d8925,
    name: "products-details-id"
  }, {
    path: "/",
    component: _e077d2fe,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
