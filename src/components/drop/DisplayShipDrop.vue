<template>
<div class="container">
    <div class="content" v-if="data != undefined">
        <table class="table is-hoverable is-bordered" v-if="checkAvailability(data)">
            <tbody>
                <tr class="has-background-white-ter" v-if="checkIfInWorld(1)" v-scroll-to="'#world1'">
                    <th>World 1</th>
                    <th :class="checkIfInMap(1, '1-1') ? 'has-text-success' : 'has-text-danger'">1-1</th>
                    <th :class="checkIfInMap(1, '1-2') ? 'has-text-success' : 'has-text-danger'">1-2</th>
                    <th :class="checkIfInMap(1, '1-3') ? 'has-text-success' : 'has-text-danger'">1-3</th>
                    <th :class="checkIfInMap(1, '1-4') ? 'has-text-success' : 'has-text-danger'">1-4</th>
                    <th :class="checkIfInMap(1, '1-5') ? 'has-text-success' : 'has-text-danger'">1-5</th>
                    <th :class="checkIfInMap(1, '1-6') ? 'has-text-success' : 'has-text-danger'">1-6</th>
                </tr>
                <tr class="has-background-white-ter" v-if="checkIfInWorld(2)" v-scroll-to="'#world2'">
                    <th>World 2</th>
                    <th :class="checkIfInMap(2, '2-1') ? 'has-text-success' : 'has-text-danger'">2-1</th>
                    <th :class="checkIfInMap(2, '2-2') ? 'has-text-success' : 'has-text-danger'">2-2</th>
                    <th :class="checkIfInMap(2, '2-3') ? 'has-text-success' : 'has-text-danger'">2-3</th>
                    <th :class="checkIfInMap(2, '2-4') ? 'has-text-success' : 'has-text-danger'">2-4</th>
                    <th :class="checkIfInMap(2, '2-5') ? 'has-text-success' : 'has-text-danger'">2-5</th>
                </tr>
                <tr class="has-background-white-ter" v-if="checkIfInWorld(3)" v-scroll-to="'#world3'">
                    <th>World 3</th>
                    <th :class="checkIfInMap(3, '3-1') ? 'has-text-success' : 'has-text-danger'">3-1</th>
                    <th :class="checkIfInMap(3, '3-2') ? 'has-text-success' : 'has-text-danger'">3-2</th>
                    <th :class="checkIfInMap(3, '3-3') ? 'has-text-success' : 'has-text-danger'">3-3</th>
                    <th :class="checkIfInMap(3, '3-4') ? 'has-text-success' : 'has-text-danger'">3-4</th>
                    <th :class="checkIfInMap(3, '3-5') ? 'has-text-success' : 'has-text-danger'">3-5</th>
                </tr>
                <tr class="has-background-white-ter" v-if="checkIfInWorld(7)" v-scroll-to="'#world7'">
                    <th>World 7</th>
                    <th :class="checkIfInMap(7, '7-1') ? 'has-text-success' : 'has-text-danger'">7-1</th>
                    <th :class="checkIfInMap(7, '7-2') ? 'has-text-success' : 'has-text-danger'">7-2</th>
                </tr>
                <tr class="has-background-white-ter" v-if="checkIfInWorld(4)" v-scroll-to="'#world4'">
                    <th>World 4</th>
                    <th :class="checkIfInMap(4, '4-1') ? 'has-text-success' : 'has-text-danger'">4-1</th>
                    <th :class="checkIfInMap(4, '4-2') ? 'has-text-success' : 'has-text-danger'">4-2</th>
                    <th :class="checkIfInMap(4, '4-3') ? 'has-text-success' : 'has-text-danger'">4-3</th>
                    <th :class="checkIfInMap(4, '4-4') ? 'has-text-success' : 'has-text-danger'">4-4</th>
                    <th :class="checkIfInMap(4, '4-5') ? 'has-text-success' : 'has-text-danger'">4-5</th>
                </tr>
                <tr class="has-background-white-ter" v-if="checkIfInWorld(5)" v-scroll-to="'#world5'">
                    <th>World 5</th>
                    <th :class="checkIfInMap(5, '5-1') ? 'has-text-success' : 'has-text-danger'">5-1</th>
                    <th :class="checkIfInMap(5, '5-2') ? 'has-text-success' : 'has-text-danger'">5-2</th>
                    <th :class="checkIfInMap(5, '5-3') ? 'has-text-success' : 'has-text-danger'">5-3</th>
                    <th :class="checkIfInMap(5, '5-4') ? 'has-text-success' : 'has-text-danger'">5-4</th>
                    <th :class="checkIfInMap(5, '5-5') ? 'has-text-success' : 'has-text-danger'">5-5</th>
                </tr>
                <tr class="has-background-white-ter" v-if="checkIfInWorld(6)" v-scroll-to="'#world6'">
                    <th>World 6</th>
                    <th :class="checkIfInMap(6, '6-1') ? 'has-text-success' : 'has-text-danger'">6-1</th>
                    <th :class="checkIfInMap(6, '6-2') ? 'has-text-success' : 'has-text-danger'">6-2</th>
                    <th :class="checkIfInMap(6, '6-3') ? 'has-text-success' : 'has-text-danger'">6-3</th>
                    <th :class="checkIfInMap(6, '6-4') ? 'has-text-success' : 'has-text-danger'">6-4</th>
                    <th :class="checkIfInMap(6, '6-5') ? 'has-text-success' : 'has-text-danger'">6-5</th>
                </tr>
                <tr class="has-background-white-ter" v-if="checkIfInWorld(43)" v-scroll-to="'#world43'">
                    <th>Winter 2019</th>
                    <th :class="checkIfInMap(43, '43-1') ? 'has-text-success' : 'has-text-danger'">E-1</th>
                    <th :class="checkIfInMap(43, '43-2') ? 'has-text-success' : 'has-text-danger'">E-2</th>
                    <th :class="checkIfInMap(43, '43-3') ? 'has-text-success' : 'has-text-danger'">E-3</th>
                </tr>
            </tbody>
        </table>
        <div class="title" v-else>
            Ship is currently unavailable as a drop!
        </div>
        <template v-for="(maps, world) in data">
            <div class="container" :id="`world${world}`" v-if="checkIfInWorld(world)" :key="world">
                <div class="title">
                    <span v-scroll-to="'#app'">&uarr;</span>World {{world}}
                </div>
                <table class="table is-striped is-hoverable is-bordered">
                    <template v-for="(value, map) in maps">
                        <thead :key="`${map}h`">
                            <tr class="has-background-white-ter">
                                <th>
                                    <v-popover offset="16">
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
                                        <span :class="rank" v-for="rank in nodes[node]" :key="`${rank}`">{{rank}}</span>
                                    </th>
                                </template>
                            </tr>
                        </tbody>
                    </template>
                </table>
            </div>
        </template>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['ship'],
    data: function(){
        return{
            configData: require('./../../data/config.json'),
            edgesData: require('./../../data/edges.json'),
            eventMapsData: require('./../../data/eventMaps.json'),
            mapNamesData: require('./../../data/mapNames.json'),
            nodesData: require('./../../data/nodes.json'),
            shipData: require('./../../data/ship.json'),
            shipTypeData: require('./../../data/shiptype.json'),
            data: undefined
        }
    },
    mounted: function() {
        this.$nextTick(function () {
            this.getData(this.ship);
        })
    },
    methods:{
        checkAvailability(data){
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
            this.data = undefined;
            let container = {
                ship: parseInt(ship)
            };
            await axios.post(`${this.configData.host}/droplocs`, container)
            .then(response => response.data)
            .then(data => this.data = this.formatData(data))
            .catch(err => console.error(err));
            console.log(this.data);
            return await this.data;
        },
        parseDifficulty(value){
            let returnStr = '';
            switch(value){
                case 1: returnStr = '丁'; break;
                case 2: returnStr = "丙"; break;
                case 3: returnStr = '乙'; break;
                case 4: returnStr = '甲'; break;
                default: returnStr = '丸'; break;
            }
            return returnStr;
        },
        parseNode(map, node){
            return this.edgesData[map][node][1];
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
        color:#eee208;
    }
    .A{
        color:rgb(196, 43, 43);
    }
    .B{
        color:orange;
    }
    table{
      background-color: transparent;
    }
</style>
