import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4a93d30f = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _1009aef2 = () => interopDefault(import('../pages/blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _1708912b = () => interopDefault(import('../pages/blog-one.vue' /* webpackChunkName: "pages/blog-one" */))
const _65c90c10 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _24856f36 = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _53519960 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _82be6b3a = () => interopDefault(import('../pages/diction-three.vue' /* webpackChunkName: "pages/diction-three" */))
const _56894751 = () => interopDefault(import('../pages/diction-two.vue' /* webpackChunkName: "pages/diction-two" */))
const _4a0de52b = () => interopDefault(import('../pages/gallery-one.vue' /* webpackChunkName: "pages/gallery-one" */))
const _3a67bbae = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _0adab454 = () => interopDefault(import('../pages/products.vue' /* webpackChunkName: "pages/products" */))
const _79dbdff0 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _9ac26718 = () => interopDefault(import('../pages/products-details/_id.vue' /* webpackChunkName: "pages/products-details/_id" */))
const _19247f12 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _4a93d30f,
    name: "admin"
  }, {
    path: "/blog-details",
    component: _1009aef2,
    name: "blog-details"
  }, {
    path: "/blog-one",
    component: _1708912b,
    name: "blog-one"
  }, {
    path: "/cart",
    component: _65c90c10,
    name: "cart"
  }, {
    path: "/checkout",
    component: _24856f36,
    name: "checkout"
  }, {
    path: "/contact",
    component: _53519960,
    name: "contact"
  }, {
    path: "/diction-three",
    component: _82be6b3a,
    name: "diction-three"
  }, {
    path: "/diction-two",
    component: _56894751,
    name: "diction-two"
  }, {
    path: "/gallery-one",
    component: _4a0de52b,
    name: "gallery-one"
  }, {
    path: "/login",
    component: _3a67bbae,
    name: "login"
  }, {
    path: "/products",
    component: _0adab454,
    name: "products"
  }, {
    path: "/signup",
    component: _79dbdff0,
    name: "signup"
  }, {
    path: "/products-details/:id?",
    component: _9ac26718,
    name: "products-details-id"
  }, {
    path: "/",
    component: _19247f12,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
