<template>
<div class="container">
    <div class="content" v-if="data != undefined">
        <table class="table is-striped is-hoverable is-bordered" v-if="checkAvailability()">
            <tbody>
                <tr v-if="data.contains[1]">
                    <th>World 1</th>
                    <th :class="checkIfInMap('1-1')">1-1</th>
                    <th :class="checkIfInMap('1-2')">1-2</th>
                    <th :class="checkIfInMap('1-3')">1-3</th>
                    <th :class="checkIfInMap('1-4')">1-4</th>
                    <th :class="checkIfInMap('1-5')">1-5</th>
                    <th :class="checkIfInMap('1-6')">1-6</th>
                    <th></th>
                </tr>
                <tr v-if="data.contains[2]">
                    <th>World 2</th>
                    <th :class="checkIfInMap('2-1')">2-1</th>
                    <th :class="checkIfInMap('2-2')">2-2</th>
                    <th :class="checkIfInMap('2-3')">2-3</th>
                    <th :class="checkIfInMap('2-4')">2-4</th>
                    <th :class="checkIfInMap('2-5')">2-5</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr v-if="data.contains[3]">
                    <th>World 3</th>
                    <th :class="checkIfInMap('3-1')">3-1</th>
                    <th :class="checkIfInMap('3-2')">3-2</th>
                    <th :class="checkIfInMap('3-3')">3-3</th>
                    <th :class="checkIfInMap('3-4')">3-4</th>
                    <th :class="checkIfInMap('3-5')">3-5</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr v-if="data.contains[7]">
                    <th>World 7</th>
                    <th :class="checkIfInMap('7-1')">7-1</th>
                    <th :class="checkIfInMap('7-2')">7-2</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr v-if="data.contains[4]">
                    <th>World 4</th>
                    <th :class="checkIfInMap('4-1')">4-1</th>
                    <th :class="checkIfInMap('4-2')">4-2</th>
                    <th :class="checkIfInMap('4-3')">4-3</th>
                    <th :class="checkIfInMap('4-4')">4-4</th>
                    <th :class="checkIfInMap('4-5')">4-5</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr v-if="data.contains[5]">
                    <th>World 5</th>
                    <th :class="checkIfInMap('5-1')">5-1</th>
                    <th :class="checkIfInMap('5-2')">5-2</th>
                    <th :class="checkIfInMap('5-3')">5-3</th>
                    <th :class="checkIfInMap('5-4')">5-4</th>
                    <th :class="checkIfInMap('5-5')">5-5</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr v-if="data.contains[6]">
                    <th>World 6</th>
                    <th :class="checkIfInMap('6-1')">6-1</th>
                    <th :class="checkIfInMap('6-2')">6-2</th>
                    <th :class="checkIfInMap('6-3')">6-3</th>
                    <th :class="checkIfInMap('6-4')">6-4</th>
                    <th :class="checkIfInMap('6-5')">6-5</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr v-if="data.contains['event']">
                    <th>Winter 2019</th>
                    <th :class="checkIfInMap('43-1')">E-1</th>
                    <th :class="checkIfInMap('43-2')">E-2</th>
                    <th :class="checkIfInMap('43-3')">E-3</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </tbody>
        </table>
        <div class="title" v-else>
            Ship cannot be obtained as a drop at the moment!
        </div>
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
        checkAvailability(){
            for(let x in this.data.contains){
                if(this.data.contains[x] == true) return true;
            }
            return false;
        },
        checkIfInMap(map){
            return{
                'has-text-success': this.data.hasOwnProperty(map),
                'has-text-danger': !this.data.hasOwnProperty(map)
            }
        },
        compareRanks(a, b){
            return (a.length >= b.length) ? a : b;
        },
        formatData(data){
            let newObj = {
                contains: {
                    1: false,
                    2: false,
                    3: false,
                    7: false,
                    4: false,
                    5: false,
                    6: false,
                    event: false
                }
            };
            for(let x in data){
                if(!(newObj.hasOwnProperty(x))) newObj[x] = {};
                if(x.split('-')[0].length == 1) newObj.contains[x.split('-')[0]] = true;
                else newObj.contains.event = true;
                for(let diff in data[x]){
                    if(!(newObj[x].hasOwnProperty(diff))) newObj[x][diff] = {};
                    for(let node in data[x][diff]){
                        let letter = this.parseNode(x, node);
                        let ranks = this.parseRanks(data[x][diff][node]);
                        if(newObj[x][diff].hasOwnProperty(letter)){
                            newObj[x][diff][letter] = this.compareRanks(newObj[x][diff][letter], ranks);
                        }
                        else{
                            newObj[x][diff][letter] = ranks;
                        }
                    }
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
        }
    }
}
</script>

<style scoped>
    
</style>
