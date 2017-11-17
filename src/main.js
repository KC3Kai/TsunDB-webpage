import Vue from 'vue'
import App from './App.vue'
import NavBar from './NavBar.vue'
import Options from './Options.vue'
import Pagination from './Pagination.vue'

import TableSpecial from './TableSpecial.vue'
import TableNormal from './TableNormal.vue'
import DisplayFleet from './DisplayFleet.vue'

import Boss from './components/Boss.vue'
import Clear from './components/Clear.vue'
import Debuff from './components/Debuff.vue'
import Difficulty from './components/Difficulty.vue'
import Fleet from './components/Fleet.vue'
import FleetType from './components/FleetType.vue'
import Gauge from './components/Gauge.vue'
import GaugeType from './components/GaugeType.vue'
import HQ from './components/HQ.vue'
import LoS from './components/LoS.vue'
import Route from './components/Route.vue'
import Speed from './components/Speed.vue'

Vue.component('navbar', NavBar);
Vue.component('options', Options);
Vue.component('pagination', Pagination);
Vue.component('table-special', TableSpecial);
Vue.component('table-normal', TableNormal);
Vue.component('display-fleet', DisplayFleet);
Vue.component('routing-col', Route);
Vue.component('boss-col', Boss);
Vue.component('clear-col', Clear);
Vue.component('debuff-col', Debuff);
Vue.component('difficulty-col', Difficulty);
Vue.component('fleet-col', Fleet);
Vue.component('fleet-type-col', FleetType);
Vue.component('gauge-col', Gauge);
Vue.component('gaugetype-col', GaugeType);
Vue.component('hq-col', HQ);
Vue.component('los-col', LoS);
Vue.component('speed-col', Speed);

new Vue({
  el: '#app',
  render: h => h(App)
})
