import Vue from 'vue'
import Router from 'vue-router'
import VueScrollTo from 'vue-scrollto'

//Core
import home from '@/components/home'
import Routing from '@/components/Routing'
import Drop from '@/components/drop'
import Construction from '@/components/Construction'
import Development from '@/components/Development'
import Dusk from '@/components/Dusk'
import Dawn from '@/components/Dawn'

//Common Components
import NavBar from '@/components/common/NavBar'
import MapSelection from '@/components/common/MapSelection'
Vue.component('navbar', NavBar);
Vue.component('mapselection', MapSelection);

//Routing
import DisplayMapRouting from '@/components/routing/DisplayMapRouting'
Vue.component('displaymaprouting', DisplayMapRouting);

//Development
import Pools from '@/components/development/Pools'
import DevSandbox from '@/components/development/Sandbox'




Vue.use(Router)

export default new Router({
  mode: 'history',
  history: true,
  hashbang: false,
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/routing',
      name: 'Routing',
      component: Routing,
      props: (route) => ({ map: route.query.map })
    },
    {
      path: '/drop',
      name: 'Drop',
      component: Drop
    },
    {
      path: '/construction',
      name: 'Construction',
      component: Construction
    },
    {
      path: '/development',
      name: 'Development',
      component: Development
    },
    {
      path: '/development/pools',
      name: 'Development Pools',
      component: Pools
    },
    {
      path: '/development/sandbox',
      name: 'Development Sandbox',
      component: DevSandbox
    },
    {
      path: '/dusk',
      name: 'Dusk',
      component: Dusk
    },
    {
      path: '/dawn',
      name: 'Dawn',
      component: Dawn
    },
    { 
      path: '*',
      redirect: '/'
    }
  ]
})

Vue.use(VueScrollTo)

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})