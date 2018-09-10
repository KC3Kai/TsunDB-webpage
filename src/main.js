import Vue from 'vue'
import App from './App.vue'
import NavBar from './NavBar.vue'
import Home from './home/Home.vue'
Vue.component('navbar', NavBar);
Vue.component('home', Home);


//Common Components
import MapSelection from './common components/MapSelection.vue'
import DisplayMap from './common components/DisplayMap.vue'
import Pagination from './common components/Pagination.vue'
Vue.component('mapselection', MapSelection);
Vue.component('displaymap', DisplayMap);
Vue.component('pagination', Pagination);

//Routing
import Routing from './routing/Routing.vue'
import RoutingOptions from './routing/RoutingOptions.vue'
import TableSpecial from './routing/TableSpecial.vue'
import TableNormal from './routing/TableNormal.vue'
import DisplayFleet from './routing/DisplayFleet.vue'
import DisplayFleetTitle from './routing/DisplayFleetTitle.vue'
Vue.component('routingoptions', RoutingOptions);
Vue.component('table-special', TableSpecial);
Vue.component('table-normal', TableNormal);
Vue.component('display-fleet', DisplayFleet);
Vue.component('display-fleet-title', DisplayFleetTitle);
Vue.component('routing', Routing);

import Boss from './routing/components/Boss.vue'
import Clear from './routing/components/Clear.vue'
import Debuff from './routing/components/Debuff.vue'
import Difficulty from './routing/components/Difficulty.vue'
import Fleet from './routing/components/Fleet.vue'
import FleetType from './routing/components/FleetType.vue'
import Gauge from './routing/components/Gauge.vue'
import GaugeType from './routing/components/GaugeType.vue'
import HQ from './routing/components/HQ.vue'
import LoS from './routing/components/LoS.vue'
import Phase from './routing/components/Phase.vue'
import Route from './routing/components/Route.vue'
import Speed from './routing/components/Speed.vue'
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
Vue.component('phase-col', Phase);
Vue.component('routing-col', Route);
Vue.component('speed-col', Speed);

//Drop
import Drop from './drop/Drop.vue'
Vue.component('drop', Drop);

//Construction
import Construction from './construction/Construction.vue'
Vue.component('construction', Construction);

//Development
import Development from './development/Development.vue'
import DevUserInterface from './development/options/DevUI.vue'
import DevPools from './development/options/DevPools.vue'
import DevGuide from './development/options/DevGuide.vue'
Vue.component('development', Development);
Vue.component('dev-ui', DevUserInterface);
Vue.component('dev-pools', DevPools);
Vue.component('dev-guide', DevGuide);

import DevTable from './development/components/DevTable.vue'
Vue.component('dev-table', DevTable);

//Dusk
import Dusk from './dusk/Dusk.vue'
import DuskSelection from './dusk/DuskSelection.vue'
import DropListGen from './dusk/options/DropListGen.vue'
import EnemyCompGen from './dusk/options/EnemyCompGen.vue'
Vue.component('dusk', Dusk);
Vue.component('dusk-selection', DuskSelection);
Vue.component('droplist-gen', DropListGen);
Vue.component('enemycomp-gen', EnemyCompGen);

//Dawn
import Dawn from './dawn/Dawn.vue'
import DawnSelection from './dawn/DawnSelection.vue'
import SqlRoutingProcessor from './dawn/options/SqlRoutingProcessor.vue'
Vue.component('dawn', Dawn);
Vue.component('dawn-selection', DawnSelection);
Vue.component('sql-routing-processor', SqlRoutingProcessor);

new Vue({
  el: '#app',
  render: h => h(App)
})
