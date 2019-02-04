<template>
<div class="container">
    <div class="tile is-ancestor">
        <div class="tile is-parent is-5">
            <div class="tile is-child">
                <p class="title">Filters</p>
                <div class="content">
                    <div class="field is-horizontal">
                        <div class="field-label">
                            <label class="label is-pulled-left">Route </label>
                        </div>
                        <div class="field-body">
                            <div class="field has-addons">
                                <span class="control">
                                    <span class="select">
                                        <select @change="toggleNodeA" v-model="node_id[0]">
                                            <option :value="''">#</option>
                                            <option v-for="node in nodesData[map]" :key="node">{{node}}</option>
                                        </select>
                                    </span>
                                </span>
                                <span class="control">
                                    <span class="select">
                                        <select @change="toggleNodeB" v-model="node_id[1]">
                                            <option :value="''">#</option>
                                            <option v-for="node in nodesData[map]" :key="node">{{node}}</option>
                                        </select>
                                    </span>
                                </span>
                                <span class="control">
                                    <span class="select">
                                        <select @change="toggleNodeC" v-model="node_id[2]" disabled>
                                            <option :value="''">#</option>
                                            <option v-for="node in nodesData[map]" :key="node">{{node}}</option>
                                        </select>
                                    </span>
                                </span>
                                <span class="control">
                                    <span class="button is-dark" @click="resetEdgeId()">
                                        Reset
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label">
                            <label class="label is-pulled-left">Difficulty </label>
                        </div>
                        <div class="field-body">
                            <div class="control">
                                <div class="select">
                                    <select @change="toggleDifficulty" :disabled="!checkIsEventMap(map)">
                                        <option value="undefined">All</option>
                                        <option value="1">丁</option>
                                        <option value="2">丙</option>
                                        <option value="3">乙</option>
                                        <option value="4">甲</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label">
                            <label class="label is-pulled-left">Fleet </label>
                        </div>
                        <div class="field-body">
                            <div class="control">
                                <div class="select">
                                    <select @change="toggleFleetType">
                                        <option value="undefined">All</option>
                                        <option value="0">Single/Strike Force</option>
                                        <option value="1">Carrier Task Force</option>
                                        <option value="2">Surface Task Force</option>
                                        <option value="3">Transport Escort</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label">
                            <label class="label is-pulled-left">Cleared? </label>
                        </div>
                        <div class="field-body">
                            <a v-if="cleared==1" class="button is-info" @click="toggleCleared(0)">True</a>
                            <a v-else-if="cleared==0" class="button is-dark" @click="toggleCleared(undefined)">False</a>
                            <a v-else class="button" @click="toggleCleared(1)">Show All</a>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label">
                            <label class="label is-pulled-left">Phase </label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <div class="select">
                                        <select @change="togglePhase">
                                            <option value="undefined">All</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label">
                            <label class="label is-pulled-left">Dead End?</label>
                        </div>
                        <div class="field-body">
                            <a v-if="nextRoute == 1" class="button is-info" @click="toggleNextRoute(0)">True</a>
                            <a v-else class="button is-dark" @click="toggleNextRoute(1)">False</a>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label">
                            <label class="label is-pulled-left">LoS</label>
                        </div>
                        <div class="field-body">
                            <div class="field has-addons">
                                <span class="control">
                                    <span class="select">
                                        <select @change="toggleLosType">
                                            <option value="0">Cn1</option>
                                            <option value="1">Cn2</option>
                                            <option value="2">Cn3</option>
                                            <option value="3">Cn4</option>
                                        </select>
                                    </span>
                                </span>
                                <span class="field">
                                    <input class="input" type="number" placeholder="LoS Value" @input="toggleLosValue">
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tile is-parent is-7">
            <div class="tile is-child">
                <p class="title">{{getMapTitle(map)}}</p>
                <div class="content">
                    <img :src="getMapFile(map)">
                </div>
            </div>
        </div>
    </div>
    <nav class="pagination" role="navigation" aria-label="pagination">
        <ul class="pagination-list">
            <li>
                <a class="pagination-link is-current" v-if="offset == 0" aria-label="1" aria-current="page">1</a>
                <a class="pagination-link" v-else aria-label="1" @click="changePage(0)">1</a>
            </li>
            <li>
                <span class="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
                <a class="pagination-link is-current" v-if="offset == 0" aria-label="1" aria-current="page">1</a>
                <a class="pagination-link" v-else-if="offset == 1" aria-label="2" @click="changePage(0)">1</a>
                <a class="pagination-link" v-else :aria-label="Number(offset)" @click="changePage(Number(offset)-1)">{{Number(offset)}}</a>
            </li>
            <li>
                <a class="pagination-link is-current" v-if="offset != 0" :aria-label="Number(offset)+1" aria-current="page">{{Number(offset)+1}}</a>
                <a class="pagination-link" v-else aria-label="2" @click="changePage(1)">2</a>
            </li>
            <li>
                <a class="pagination-link" v-if="offset == 0" aria-label="3" @click="changePage(2)">3</a>
                <a class="pagination-link" v-else :aria-label="Number(offset)+2" @click="changePage(Number(offset)+1)">{{Number(offset)+2}}</a>
            </li>
            <li>
                <span class="pagination-ellipsis">&hellip;</span>
            </li>
            <div>
                <input class="input" type="number" placeholder="Jump to..." @input="jumpPage">
            </div>
        </ul>
    </nav>
    <table class="table is-striped is-hoverable box">
        <thead>
            <tr>
                <th>Route</th>
                <th><abbr title="Cleared?">Clr?</abbr></th>
                <th><abbr title="HQ Level">HQ</abbr></th>
                <th>Fleet</th>
                <th>Main</th>
                <th>Escort</th>
                <th>Speed</th>
                <th><abbr title="Cn1 (Cn2, Cn3, Cn4)">LoS</abbr></th>
                <th><abbr title="Difficulty">Diff.</abbr></th>
                <th><abbr title="Gauge Type">Type</abbr></th>
                <th>Gauge</th>
                <th>Phase</th>
                <th><abbr title="Amount of edges on the map">Edges</abbr></th>
            </tr>
        </thead>
        <tbody :key="offset">
            <tr v-for="(sample) in this.data" :key="sample.id" @click="setSample(sample)" :class="{ 'is-selected': rowSelected == sample.id }" v-scroll-to="'#details'">
                <td>{{parseRoute(sample.edgeid, map)}}</td>
                <td>{{sample.cleared}}</td>
                <td>{{sample.hqlvl}}</td>
                <td>{{parseFleetType(sample.fleettype)}}</td>
                <td>{{parseFleet(sample.fleet1)}}</td>
                <td>{{parseFleet(sample.fleet2)}}</td>
                <td>{{parseSpeed(sample.fleet1, sample.fleet2)}}</td>
                <td><abbr :title="parseLOS(sample.los)">{{floorTwoDecimal(sample.los[0])}}</abbr></td>
                <td>{{parseDifficulty(sample.difficulty)}}</td>
                <td>{{parseGaugeType(sample.gaugetype)}}</td>
                <td>{{parseGauge(sample.currentmaphp, sample.maxmaphp)}}</td>
                <td>{{parsePhase(sample.gaugenum)}}</td>
                <td>{{parseEdges(sample.nodeinfo)}}</td>
            </tr>
        </tbody>
    </table>
    <div class="container" id="details" :key="sampleSelected.id">
        <template v-if="sampleSelected.id != -1">
            <div class="tile is-ancestor">
                <div class="tile is-parent is-12">
                    <div class="tile is-child box">
                        <p class="title">Route taken in World {{map}}{{parseDifficulty(sampleSelected.difficulty)}}: {{parseRoute(sampleSelected.edgeid, map)}}</p>
                        <p class="subtitle">
                            <strong style="vertical-align:middle;">Node {{parseRoute(sampleSelected.edgeid, map).slice(-1)[0]}}:</strong>
                            <img style="vertical-align:middle;" :src="getNodeImage(sampleSelected)">
                            <span style="vertical-align:middle;">{{getNodeDescription(sampleSelected)}}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="tile is-ancestor">
                <div class="tile is-parent is-6">
                    <div class="tile is-child box">
                        <p class="title">Main</p>
                        <div class="content">
                            <table class="table is-striped box">
                                <thead>
                                    <tr>
                                        <th>Ship</th>
                                        <th>#1</th>
                                        <th>#2</th>
                                        <th>#3</th>
                                        <th>#4</th>
                                        <th>#5</th>
                                        <th>#6</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(ship) in this.sampleSelected.fleet1" :key="ship.id">
                                        <td><img :src="getShipBanner(ship.id)" :title="getShipName(ship.id)" style="width:160px; height:40px;"></td>
                                        <td><img :src="getEquipIcon(ship.equip[0])" :title="getEquipName(ship.equip[0])" style="width:40px; height:40px;" /></td>
                                        <td><img :src="getEquipIcon(ship.equip[1])" :title="getEquipName(ship.equip[1])" style="width:40px; height:40px;" /></td>
                                        <td><img :src="getEquipIcon(ship.equip[2])" :title="getEquipName(ship.equip[2])" style="width:40px; height:40px;" /></td>
                                        <td><img :src="getEquipIcon(ship.equip[3])" :title="getEquipName(ship.equip[3])" style="width:40px; height:40px;" /></td>
                                        <td><img :src="getEquipIcon(ship.equip[4])" :title="getEquipName(ship.equip[4])" style="width:40px; height:40px;" /></td>
                                        <td><img :src="getEquipIcon(ship.exslot)" :title="getEquipName(ship.exslot)" style="width:40px; height:40px;" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div v-if="sampleSelected.fleet2.length > 0" class="tile is-parent is-6">
                    <div class="tile is-child box">
                        <p class="title">Escort</p>
                        <div class="content">
                            <table class="table is-striped box">
                                <thead>
                                    <tr>
                                        <th>Ship</th>
                                        <th>#1</th>
                                        <th>#2</th>
                                        <th>#3</th>
                                        <th>#4</th>
                                        <th>#5</th>
                                        <th>#6</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(ship) in this.sampleSelected.fleet2" :key="ship.id">
                                        <td><img :src="getShipBanner(ship.id)" :title="getShipName(ship.id)" style="width:160px; height:40px;"></td>
                                        <td><img :src="getEquipIcon(ship.equip[0])" :title="getEquipName(ship.equip[0])" style="width:40px; height:40px;" /></td>
                                        <td><img :src="getEquipIcon(ship.equip[1])" :title="getEquipName(ship.equip[1])" style="width:40px; height:40px;" /></td>
                                        <td><img :src="getEquipIcon(ship.equip[2])" :title="getEquipName(ship.equip[2])" style="width:40px; height:40px;" /></td>
                                        <td><img :src="getEquipIcon(ship.equip[3])" :title="getEquipName(ship.equip[3])" style="width:40px; height:40px;" /></td>
                                        <td><img :src="getEquipIcon(ship.equip[4])" :title="getEquipName(ship.equip[4])" style="width:40px; height:40px;" /></td>
                                        <td><img :src="getEquipIcon(ship.exslot)" :title="getEquipName(ship.exslot)" style="width:40px; height:40px;" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';

export default {
    props: ['map'],
    data: function(){
        return{
            node_id: ["","",""],
            rowSelected: undefined,
            sampleSelected: {id: -1},
            edgesData: require('./../../data/edges.json'),
            equipData: require('./../../data/equip.json'),
            mapNamesData: require('./../../data/mapNames.json'),
            nodesData: require('./../../data/nodes.json'),
            eventMapsData: require('./../../data/eventMaps.json'),
            shipData: require('./../../data/ship.json'),
            shipTypeData: require('./../../data/shiptype.json'),
            offset: 0,
            limit: 20,
            nextRoute: 0,
            cleared: undefined,
            difficulty: undefined,
            data: undefined,
            edge_id: undefined,
            fleettype: undefined,
            phase: undefined,
            los: [0, undefined]
        }
    },
    created(){
        this.getData(this.$route.query.map);
    },
    methods:{
        changePage(value){
            this.offset = value;
            this.getData(this.$route.query.map);
        },
        checkIsEventMap(map){
            return this.eventMapsData.hasOwnProperty(String(map.slice(0,2)))
        },
        floorTwoDecimal(value){
            return Math.floor(Number(value) * 100) / 100;
        },
        async getData(map){
            let container = {
                offset: this.offset*this.limit,
                limit: this.limit,
                next_route: this.nextRoute
            };
            if(this.difficulty != undefined && this.difficulty != "undefined") container.difficulty = this.difficulty;
            if(this.fleettype != undefined && this.fleettype != "undefined") container.fleettype = this.fleettype;
            if(this.phase != undefined && this.phase != "undefined") container.gaugenum = this.gaugenum;
            if(this.edge_id != undefined && this.edge_id != "undefined") container.edge_id = this.edge_id;
            if(this.cleared != undefined && this.cleared != "undefined") container.cleared = this.cleared;
            if(this.los[1] != undefined && String(this.los[1]) != "") container.los = this.los;
            let type = this.checkIsEventMap(map) ? "eventrouting" : "routing";
            await axios.get(`https://tsundb.kc3.moe/api/${type}/${this.map}`, {
                params: container,
                paramsSerializer: function(params){
                    return qs.stringify(params, {
                        arrayFormat: 'repeat',
                        encode: false
                    })
                }
            })
            .then(response => response.data)
            .then(data => this.data = data)
            .catch(err => console.error(err));
            return await this.data;
        },
        getEquipIcon(id){
            if(this.equipData.hasOwnProperty(id)) return require(`./../../../assets/icons/equip/${this.equipData[id].icon}.png`);
            else return require(`./../../../assets/icons/equip/-1.png`);
        },
        getEquipName(id){
            if(this.equipData.hasOwnProperty(id)) return `${this.equipData[id].jp} (${this.equipData[id].en})`;
        },
        getMapTitle(map){
            return `World ${map}: ${this.mapNamesData[map].en}`;
        },
        getMapFile(map){
            return require(`./../../../assets/maps/${map}.png`);
        },
        getNodeImage(sample){
            let eventId = sample.nodeinfo ? sample.nodeinfo.eventId : sample.eventid;
            let eventKind = sample.nodeinfo ? sample.nodeinfo.eventKind : sample.eventkind;
            let node = "";
            switch(eventId){
                case 0: node = "start"; break;
                case 2: node = "resource"; break;
                case 3: node = "storm"; break;
                case 4: 
                    switch(eventKind){
                        case 1: node = "battle"; break;
                        case 2: node = "night"; break;
                        case 4: node = "aerial"; break;
                        case 5: node = "battle"; break;
                        case 6: node = "raid"; break;
                        case 7: node = "nightday"; break;
                        case 8: node = "ambush"; break;
                    }
                    break;
                case 5: node = "boss"; break;
                case 6: node = "empty"; break;
                case 7: node = "scout"; break;
                case 8: node = "anchor"; break;
                case 9: node = "flag"; break;
            }
            return require(`./../../../assets/nodes/${node}.png`);
        },
        getNodeDescription(sample){
            let eventId = sample.nodeinfo ? sample.nodeinfo.eventId : sample.eventid;
            let eventKind = sample.nodeinfo ? sample.nodeinfo.eventKind : sample.eventkind;
            let node = "";
            switch(eventId){
                case 0: node = "Start"; break;
                case 2: node = "Resource"; break;
                case 3: node = "Maelstrom"; break;
                case 4: 
                    switch(eventKind){
                        case 1: node = "Normal Battle"; break;
                        case 2: node = "Night Battle"; break;
                        case 4: node = "Aerial Battle"; break;
                        case 5: node = "Combined Fleet Battle"; break;
                        case 6: node = "Air Raid"; break;
                        case 7: node = "Night to Day Battle"; break;
                        case 8: node = "Ambushed!"; break;
                    }
                    break;
                case 5: 
                    switch(eventKind){
                        case 1: node = "Boss (Normal)"; break;
                        case 5: node = "Boss (Combined Fleet)"; break;
                    }
                    break;
                case 6: 
                    switch(eventKind){
                        case 2: node = "Route Selection"; break;
                        default: node = "Must be my imagination..."; break;
                    }
                    break;
                case 7: node = "Resource Scout"; break;
                case 8: node = "Anchor"; break;
                case 9: node = "Transport offload point"; break;
            }
            return node;
        },
        getShipBanner(id){
            return require(`./../../../assets/shipcards/${id}.png`);
        },
        getShipName(id){
            if(this.shipData.hasOwnProperty(id)) return `${this.shipData[id].jp} (${this.shipData[id].en})`;
        },
        jumpPage(event){
            this.offset = parseInt(event.target.value)-1;
            if(this.offset < 0 || this.offset == undefined || isNaN(this.offset)){
                this.offset = 0;
            }
            this.getData(this.$route.query.map);
        },
        parseDifficulty(value){
            let returnStr = "";
            switch(value){
                case 1: returnStr = "丁"; break;
                case 2: returnStr = "丙"; break;
                case 3: returnStr = "乙"; break;
                case 4: returnStr = "甲"; break;
            }
            return returnStr;
        },
        parseEdges(value){
            if(value) return `${value.amountOfNodes}`;
        },
        parseFleet(value){
            let returnStr = "";
            if(value){
                for(let x in value){
                    let ship = this.shipTypeData[value[x].type];
                    returnStr += (x == 0) ? ship : `-${ship}`;
                }
            }
            return returnStr;
        },
        parseFleetType(value){
            let returnStr = "";
            switch(value){ 
                case 0: returnStr = "Single"; break;
                case 1: returnStr = "CTF"; break;
                case 2: returnStr = "STF"; break;
                case 3: returnStr = "TCF"; break;
            }
            return returnStr;
        },
        parseGauge(a, b){
            if(a && b) return `${a}/${b}`;
        },
        parseGaugeType(value){
            let returnStr = "";
            switch(value){
                case 2: returnStr = "HP"; break;
                case 3: returnStr = "TP"; break;
            }
            return returnStr;
        },
        parseLOS(value){
            value = value.map(x => {
                return this.floorTwoDecimal(x);
            });
            return `${value[1]}, ${value[2]}, ${value[3]}`;
        },
        parsePhase(value){
            if(value) return `${value}`;
        },
        parseRoute(value, map){
            let returnStr = "";
            for(let x in value){
                if(x == 0) returnStr += `${this.edgesData[map][value[x]][0]}-${this.edgesData[map][value[x]][1]}`;
                else returnStr += `-${this.edgesData[map][value[x]][1]}`;
            }
            return returnStr;
        },
        parseSpeed(a, b){
            let returnStr = "";
            let speed = 20;
            for(let ship of a){
                if(speed > ship.speed) speed = ship.speed;
            }
            if(b){
                for(let ship of b){
                    if(speed > ship.speed) speed = ship.speed;
                }
            }
            switch(speed){
                case 20: returnStr = "Fastest"; break;
                case 15: returnStr = "Fast+"; break;
                case 10: returnStr = "Fast"; break;
                case 5: returnStr = "Slow"; break;
            }
            return returnStr;
        },
        resetEdgeId(){
            this.edge_id = undefined;
            this.node_id = ["","",""];
            this.getData(this.$route.query.map);
        },
        setSample(sample){
            this.rowSelected = sample.id;
            this.sampleSelected = sample;
            console.log(sample);
        },
        toggleCleared(value){
            this.cleared = value;
            this.getData(this.$route.query.map);
        },
        toggleDifficulty(value){
            this.difficulty = value.target.value;
            this.getData(this.$route.query.map);
        },
        toggleNodeA(value){
            this.node_id[0] = value.target.value;
            this.toggleEdgeId();
        },
        toggleNodeB(value){
            this.node_id[1] = value.target.value;
            this.toggleEdgeId();
        },
        toggleNodeC(value){
            this.node_id[2] = value.target.value;
            this.toggleEdgeId();
        },
        toggleEdgeId(){
            if(Number(this.node_id[0]) == "") return;
            if(Number(this.node_id[1]) == "") return;
            for(let x in this.edgesData[this.$route.query.map]){
                if(this.edgesData[this.$route.query.map][x][0] == this.node_id[0]){
                    if(this.edgesData[this.$route.query.map][x][1] == this.node_id[1]){
                        this.edge_id = x;
                        break;
                    }
                }
            }
            this.getData(this.$route.query.map);
        },
        toggleFleetType(value){
            this.fleettype = value.target.value;
            this.getData(this.$route.query.map);
        },
        togglePhase(value){
            this.phase = value.target.value;
            this.getData(this.$route.query.map);
        },
        toggleNextRoute(value){
            this.nextRoute = Number(!this.nextRoute);
            this.getData(this.$route.query.map);
        },
        toggleLosType(value){
            this.los[0] = Number(value.target.value);
            this.getData(this.$route.query.map);
        },
        toggleLosValue(value){
            this.los[1] = value.target.value;
            this.getData(this.$route.query.map);
        }
    }
}
</script>

<style scoped>

</style>
