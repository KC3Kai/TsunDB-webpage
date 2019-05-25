<template>
<div class="container">
    <p class="title is-spaced">
        Drop List Generator
    </p>
    <p class="subtitle">
        Contributing to drops on wikia has never been so easy!
    </p>
    <div class="content">
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label is-pulled-left">Map </label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <div class="select">
                            <select @change="toggleMap">
                                <option disabled selected>Select a map</option>
                                <option v-for="(obj, mapid) in mapNamesData" :value="mapid" :key="mapid">{{mapid}}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <textarea class="textarea" v-model="output"></textarea>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import sortJsonArray from 'sort-json-array';

export default {
    data: function(){
        return{
            bossNodesData: require('./../../data/bossNodes.json'),
            commonShipData: require('./../../data/commonShip.json'),
            configData: require('./../../data/config.json'),
            shipData: require('./../../data/ship.json'),
            edgesData: require('./../../data/edges.json'),
            mapNamesData: require('./../../data/mapNames'),
            map: undefined,
            output: "Select a map"
        }
    },
    methods:{
        eventFilter(data){
            let newObj = {};
            for(const ship in data){
                if(!this.commonShipData.event.includes(Number(ship))) newObj[ship] = data[ship];
            }
            return newObj;
        },
        getData(){
            let container = {
                map: this.map
            }
            axios.post(`${this.configData.host}/droploclist`, container)
            .then(response => response.data)
            .then(data => this.parseList(data))
            .catch(err => console.error(err));
        },
        getNodes(data){
            let returnArr = [];
            for(const id in data){
                for(const node in data[id]){
                    let char = this.edgesData[this.map][node][1];
                    if(!returnArr.includes(char)) returnArr.push(char);
                }
            }
            returnArr = returnArr.sort();
            if(returnArr[0] == undefined){
                return "";
            }
            else{
                return (returnArr.length > 1) ? returnArr.join(', ') : returnArr[0];
            }
        },
        parseList(data){
            if(this.map.split('-')[0] > 10) data = this.eventFilter(data);
            console.log(data);
            let list = {};
            let boss = (this.bossNodesData[this.map].length > 1) ? this.bossNodesData[this.map].join(', ') : this.bossNodesData[this.map][0];
            let nodes = this.getNodes(data);
            console.log(this.getNodes(data));
            for(const ship in data){
                let name = this.shipData[ship].en;
                list[name] = {};
                for(const node in data[ship]){
                    let nodeletter = this.edgesData[this.map][node][1];
                    if(list[name].hasOwnProperty(nodeletter)){
                        if(data[ship][node].S) list[name][nodeletter].S = true;
                        if(data[ship][node].A) list[name][nodeletter].A = true;
                        if(data[ship][node].B) list[name][nodeletter].B = true;
                        if(data[ship][node].difficulty < list[name][nodeletter].difficulty) list[name][nodeletter].difficulty = data[ship][node].difficulty;
                    }
                    else{
                        list[name][nodeletter] = data[ship][node];
                    }
                }
            }
            let text = `{{DropList\n|no_legend = true\n|filter_button = true\n|nodes = ${nodes}\n|boss = ${boss}\n`;
            let arrayList = [];
            for(const ship in list){
                arrayList.push({
                    ship: ship,
                    nodes: list[ship]
                });
            }
            let orderedList = sortJsonArray(arrayList, 'ship');
            console.log(orderedList);
            for(const x of orderedList){
                text += `|${x.ship}:`;
                for(const node in x.nodes){
                    text += this.parseDifficultyAndRanks(node, x.nodes[node]);
                }
                text += `\n`;
            }
            text += `}}`;
            this.output = text;
        },
        parseDifficultyAndRanks(node, data){
            let returnStr = ` ${node}`;
            let ranks = "";
            if(data.S) ranks += "S";
            if(data.A) ranks += "A";
            if(data.B) ranks += "B";
            switch(data.difficulty){
                case 4: returnStr += `/Hard {${ranks}},`; break;
                case 3: returnStr += `/Medium {${ranks}},`; break;
                case 2: returnStr += `/Easy {${ranks}},`; break;
                case 1: returnStr += `/Casual {${ranks}},`; break;
                default: returnStr +=  ` {${ranks}},`; break;
            }
            return returnStr;
        },
        toggleMap(value){
            this.map = value.target.value;
            this.getData();
        }
    }
}
</script>

<style scoped>

</style>
