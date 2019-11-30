<template>
<div class="container">
    <template v-if="data != undefined">
        <div class="content" v-if="loading">
            Loading...
        </div>
        <div class="content" v-else>
            <table class="table is-hoverable is-bordered" v-if="checkAvailability(data)">
                <tbody>
                    <tr class="has-background-white-ter" v-if="checkIfInWorld(1)" v-scroll-to="'#world1'" id="pointer">
                        <th>World 1</th>
                        <th :class="checkIfInMap(1, '1-1') ? 'has-text-success' : 'has-text-danger'">1-1</th>
                        <th :class="checkIfInMap(1, '1-2') ? 'has-text-success' : 'has-text-danger'">1-2</th>
                        <th :class="checkIfInMap(1, '1-3') ? 'has-text-success' : 'has-text-danger'">1-3</th>
                        <th :class="checkIfInMap(1, '1-4') ? 'has-text-success' : 'has-text-danger'">1-4</th>
                        <th :class="checkIfInMap(1, '1-5') ? 'has-text-success' : 'has-text-danger'">1-5</th>
                        <th :class="checkIfInMap(1, '1-6') ? 'has-text-success' : 'has-text-danger'">1-6</th>
                    </tr>
                    <tr class="has-background-white-ter" v-if="checkIfInWorld(2)" v-scroll-to="'#world2'" id="pointer">
                        <th>World 2</th>
                        <th :class="checkIfInMap(2, '2-1') ? 'has-text-success' : 'has-text-danger'">2-1</th>
                        <th :class="checkIfInMap(2, '2-2') ? 'has-text-success' : 'has-text-danger'">2-2</th>
                        <th :class="checkIfInMap(2, '2-3') ? 'has-text-success' : 'has-text-danger'">2-3</th>
                        <th :class="checkIfInMap(2, '2-4') ? 'has-text-success' : 'has-text-danger'">2-4</th>
                        <th :class="checkIfInMap(2, '2-5') ? 'has-text-success' : 'has-text-danger'">2-5</th>
                    </tr>
                    <tr class="has-background-white-ter" v-if="checkIfInWorld(3)" v-scroll-to="'#world3'" id="pointer">
                        <th>World 3</th>
                        <th :class="checkIfInMap(3, '3-1') ? 'has-text-success' : 'has-text-danger'">3-1</th>
                        <th :class="checkIfInMap(3, '3-2') ? 'has-text-success' : 'has-text-danger'">3-2</th>
                        <th :class="checkIfInMap(3, '3-3') ? 'has-text-success' : 'has-text-danger'">3-3</th>
                        <th :class="checkIfInMap(3, '3-4') ? 'has-text-success' : 'has-text-danger'">3-4</th>
                        <th :class="checkIfInMap(3, '3-5') ? 'has-text-success' : 'has-text-danger'">3-5</th>
                    </tr>
                    <tr class="has-background-white-ter" v-if="checkIfInWorld(7)" v-scroll-to="'#world7'" id="pointer">
                        <th>World 7</th>
                        <th :class="checkIfInMap(7, '7-1') ? 'has-text-success' : 'has-text-danger'">7-1</th>
                        <th :class="checkIfInMap(7, '7-2') ? 'has-text-success' : 'has-text-danger'">7-2</th>
                    </tr>
                    <tr class="has-background-white-ter" v-if="checkIfInWorld(4)" v-scroll-to="'#world4'" id="pointer">
                        <th>World 4</th>
                        <th :class="checkIfInMap(4, '4-1') ? 'has-text-success' : 'has-text-danger'">4-1</th>
                        <th :class="checkIfInMap(4, '4-2') ? 'has-text-success' : 'has-text-danger'">4-2</th>
                        <th :class="checkIfInMap(4, '4-3') ? 'has-text-success' : 'has-text-danger'">4-3</th>
                        <th :class="checkIfInMap(4, '4-4') ? 'has-text-success' : 'has-text-danger'">4-4</th>
                        <th :class="checkIfInMap(4, '4-5') ? 'has-text-success' : 'has-text-danger'">4-5</th>
                    </tr>
                    <tr class="has-background-white-ter" v-if="checkIfInWorld(5)" v-scroll-to="'#world5'" id="pointer">
                        <th>World 5</th>
                        <th :class="checkIfInMap(5, '5-1') ? 'has-text-success' : 'has-text-danger'">5-1</th>
                        <th :class="checkIfInMap(5, '5-2') ? 'has-text-success' : 'has-text-danger'">5-2</th>
                        <th :class="checkIfInMap(5, '5-3') ? 'has-text-success' : 'has-text-danger'">5-3</th>
                        <th :class="checkIfInMap(5, '5-4') ? 'has-text-success' : 'has-text-danger'">5-4</th>
                        <th :class="checkIfInMap(5, '5-5') ? 'has-text-success' : 'has-text-danger'">5-5</th>
                    </tr>
                    <tr class="has-background-white-ter" v-if="checkIfInWorld(6)" v-scroll-to="'#world6'" id="pointer">
                        <th>World 6</th>
                        <th :class="checkIfInMap(6, '6-1') ? 'has-text-success' : 'has-text-danger'">6-1</th>
                        <th :class="checkIfInMap(6, '6-2') ? 'has-text-success' : 'has-text-danger'">6-2</th>
                        <th :class="checkIfInMap(6, '6-3') ? 'has-text-success' : 'has-text-danger'">6-3</th>
                        <th :class="checkIfInMap(6, '6-4') ? 'has-text-success' : 'has-text-danger'">6-4</th>
                        <th :class="checkIfInMap(6, '6-5') ? 'has-text-success' : 'has-text-danger'">6-5</th>
                    </tr>
                    <tr class="has-background-white-ter" v-if="checkIfInWorld(45)" v-scroll-to="'#world45'" id="pointer">
                        <th>Fall 2019</th>
                        <th :class="checkIfInMap(46, '46-1') ? 'has-text-success' : 'has-text-danger'">E-1</th>
                        <th :class="checkIfInMap(46, '46-2') ? 'has-text-success' : 'has-text-danger'">E-2</th>
                        <th :class="checkIfInMap(46, '46-3') ? 'has-text-success' : 'has-text-danger'">E-3</th>
                        <th :class="checkIfInMap(46, '46-4') ? 'has-text-success' : 'has-text-danger'">E-4</th>
                        <th :class="checkIfInMap(46, '46-5') ? 'has-text-success' : 'has-text-danger'">E-5</th>
                        <th :class="checkIfInMap(46, '46-6') ? 'has-text-success' : 'has-text-danger'">E-6</th>
                    </tr>
                </tbody>
            </table>
            <div class="title" v-else>
                Ship is currently unavailable as a drop!
            </div>
            <template v-for="(maps, world) in data">
                <div class="container" :id="`world${world}`" v-if="checkIfInWorld(world)" :key="world">
                    <div class="title">
                        <span v-scroll-to="'#app'" id="pointer">&uarr;</span>World {{world}}
                    </div>
                    <table class="table is-striped is-hoverable is-bordered">
                        <template v-for="(value, map) in maps">
                            <thead :key="`${map}h`">
                                <tr class="has-background-white-ter">
                                    <th>
                                        <v-popover offset="16" :delay="{show:100, hide:0}">
                                            {{map}}
                                            <img slot="popover" :src="showMap(map)" height="40%" width="40%">
                                        </v-popover>
                                    </th>
                                    <th v-for="node in value.nodes" :key="node">{{node}}</th>
                                </tr>
                            </thead>
                            <tbody :key="`${map}b`">
                                <tr class="has-background-white-bis" v-for="(nodes, diff) in value" :key="diff">
                                    <template v-if="diff != 'nodes'">
                                        <th>{{parseDifficulty(diff)}}</th>
                                        <th v-for="node in value.nodes" :key="node">
                                            <div v-for="rank in nodes[node]" :key="`${getRate(map, diff, node, rank)}`"><span :class="rank">{{rank}}</span> {{getRate(map, diff, node, rank)}} {{getCount(map, diff, node, rank)}}<br /></div>
                                        </th>
                                    </template>
                                </tr>
                            </tbody>
                        </template>
                    </table>
                </div>
            </template>
        </div>
    </template>
</div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['ship'],
    data: function(){
        return{
            loading: false,
            configData: require('./../../data/config.json'),
            edgesData: require('./../../data/edges.json'),
            eventMapsData: require('./../../data/eventMaps.json'),
            mapNamesData: require('./../../data/mapNames.json'),
            nodesData: require('./../../data/nodes.json'),
            shipData: require('./../../data/ship.json'),
            shipTypeData: require('./../../data/shiptype.json'),
            data: undefined,
            rates: {}
        }
    },
    mounted: function() {
        this.$nextTick(function () {
            this.getData(this.ship);
        })
    },
    methods:{
        checkAvailability(data){
            for(const map in data){
                if(map.split("-")[0] == 44) delete data[map];
            }
            return Object.keys(data).length > 0;
        },
        checkIfInWorld(world){
            return this.data.hasOwnProperty(world);
        },
        checkIfInMap(world, map){
            return this.data[world].hasOwnProperty(map);
        },
        compareRanks(a, b){
            return (a.length >= b.length) ? a : b;
        },
        floorTwoDecimal(value){
            return Math.floor(Number(value) * 100) / 100;
        },
        async fetchData(map, node, rank, diff){
            if(!this.rates.hasOwnProperty(map)) this.$set(this.rates, map, {});
            if(!this.rates[map].hasOwnProperty(diff)) this.$set(this.rates[map], diff, {});
            if(!this.rates[map][diff].hasOwnProperty(node)) this.$set(this.rates[map][diff], node, {});
            fetch(`${this.configData.baseurl}/json/shipdrop/${map}${node}-${diff}.json`).then(response => response.json()).then(json => {
                this.$set(this.rates[map][diff][node], rank, {});
                this.$set(this.rates[map][diff][node][rank], 'rate', this.floorTwoDecimal(json[this.ship][rank].rate));
                this.$set(this.rates[map][diff][node][rank], 'count', this.floorTwoDecimal(json[this.ship][rank].count));
            }).catch(err => {

            });
        },
        formatData(data){
            let newObj = {};
            for(let x in data){
                let world = x.split('-')[0];
                if(!(newObj.hasOwnProperty(world))) newObj[world] = {};
                if(!(newObj[world].hasOwnProperty(x))) newObj[world][x] = {nodes:[]};
                for(let diff in data[x]){
                    if(!(newObj[world][x].hasOwnProperty(diff))) newObj[world][x][diff] = {};
                    let newNodeArr = [];
                    for(let node in data[x][diff]){
                        let letter = this.parseNode(x, node);
                        let ranks = this.parseRanks(data[x][diff][node]);
                        if(newObj[world][x][diff].hasOwnProperty(letter)){
                            newObj[world][x][diff][letter] = this.compareRanks(newObj[world][x][diff][letter], ranks);
                        }
                        else{
                            newNodeArr.push(letter);
                            newObj[world][x][diff][letter] = ranks;
                        }
                    }
                    newObj[world][x].nodes = [...new Set([...newObj[world][x].nodes, ...newNodeArr])];
                }
            }
            return newObj;
        },
        async getData(ship){
            this.loading = true;
            this.rates = {};
            this.data = undefined;
            let container = {
                ship: parseInt(ship)
            };
            axios.post(`${this.configData.host}/droplocs`, container)
            .then(response => response.data)
            .then(data => {
                this.data = this.formatData(data)
                for(const world in this.data){
                    for(const map in this.data[world]){
                        for(const diff in this.data[world][map]){
                            if(diff == "nodes") continue;
                            for(const node in this.data[world][map][diff]){
                                let ranks = (this.data[world][map][diff][node].length > 1) ? this.data[world][map][diff][node].split("") : this.data[world][map][diff][node];
                                if(ranks.length > 1){
                                    for(const rank of ranks){
                                        this.fetchData(map, node, rank, diff);
                                    }
                                }
                                else{
                                    this.fetchData(map, node, ranks, diff);
                                }
                            }
                        }
                    }
                }
                console.log(this.rates);
            })
            .then(data => {
                this.loading = false
            })
            .catch(err => console.error(err));
        },
        getCount(map, diff, node, rank){
            return (this.rates[map][diff][node][rank] == undefined) ? "" : `(${this.rates[map][diff][node][rank].count})`;
        },
        getRate(map, diff, node, rank){
            return (this.rates[map][diff][node][rank] == undefined) ? "" : `${this.rates[map][diff][node][rank].rate}%`;
        },
        parseDifficulty(value){
            let returnStr = '';
            switch(Number(value)){
                case 1: returnStr = '丁'; break;
                case 2: returnStr = "丙"; break;
                case 3: returnStr = '乙'; break;
                case 4: returnStr = '甲'; break;
                default: returnStr = '丸'; break;
            }
            return returnStr;
        },
        parseNode(map, node){
            return this.edgesData.hasOwnProperty(map) ? this.edgesData[map][node][1] : node;
        },
        parseRanks(ranks){
            let newArr = [];
            if(ranks.includes('S')) newArr.push('S');
            if(ranks.includes('A')) newArr.push('A');
            if(ranks.includes('B')) newArr.push('B');
            if(ranks.includes('C')) newArr.push('C');
            if(ranks.includes('D')) newArr.push('D');
            if(ranks.includes('E')) newArr.push('E');
            return newArr.join('');
        },
        showMap(map){
            return require(`./../../../assets/maps/${map}.png`);
        }
    }
}
</script>

<style scoped>
    .S{
        color:gold;
        text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px  1px 0 #000, 1px  1px 0 #000;
    }
    .A{
        color:red;
        text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px  1px 0 #000, 1px  1px 0 #000;
    }
    .B{
        color:orange;
        text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px  1px 0 #000, 1px  1px 0 #000;
    }
    table{
      background-color: transparent;
    }
    #pointer{
      cursor: pointer;
    }
</style>
