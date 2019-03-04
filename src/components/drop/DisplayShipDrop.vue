<template>
<div class="container">
    <div class="content" v-if="data != undefined">
        Coming soon!
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
