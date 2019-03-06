import Vue from 'vue'
import Router from 'vue-router'
import VueScrollTo from 'vue-scrollto'
import VTooltip from 'v-tooltip'

//Core
import home from '@/components/home'
import Routing from '@/components/Routing'
import Drop from '@/components/Drop'
import Construction from '@/components/Construction'
import Development from '@/components/Development'
import Dusk from '@/components/Dusk'
import Dawn from '@/components/Dawn'
import ToDo from '@/components/ToDo'

//Common Components
import NavBar from '@/components/common/NavBar'
import MapSelection from '@/components/common/MapSelection'
Vue.component('navbar', NavBar);
Vue.component('mapselection', MapSelection);

//Routing
import DisplayMapRouting from '@/components/routing/DisplayMapRouting'
Vue.component('displaymaprouting', DisplayMapRouting);

//Drop
import MapDrop from '@/components/drop/MapDrop'
import ShipDrop from '@/components/drop/ShipDrop'
import DisplayMapDrop from '@/components/drop/DisplayMapDrop'
import DisplayShipDrop from '@/components/drop/DisplayShipDrop'
Vue.component('displaymapdrop', DisplayMapDrop);
Vue.component('displayshipdrop', DisplayShipDrop);

//Development
import Pools from '@/components/development/Pools'
import DevSandbox from '@/components/development/Sandbox'
import DevBuilder from '@/components/development/Builder'

//Dawn
import ShipEquipID from '@/components/dawn/ShipEquipID'


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
      name: 'Ship Drop',
      component: Drop
    },
    {
      path: '/drop/maps',
      name: 'Ship Drop - Map Based',
      component: MapDrop,
      props: (route) => ({ map: route.query.map })
    },
    {
      path: '/drop/search',
      name: 'Ship Drop - Search',
      component: ShipDrop,
      props: (route) => ({ ship: route.query.ship })
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
      path: '/development/builder',
      name: 'Development Recipe Builder',
      component: DevBuilder
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
      path: '/dawn/id_tl',
      name: 'API ID Translation',
      component: ShipEquipID
    },
    {
      path: '/todo',
      name: 'To-Do',
      component: ToDo
    },
    { 
      path: '*',
      redirect: '/'
    }
  ]
})

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

Vue.use(VTooltip, {
  popover: {
    defaultPlacement: 'right-end',
    defaultTrigger: 'hover focus',
  },
})