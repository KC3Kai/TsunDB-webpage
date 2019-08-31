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
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label is-pulled-left">Type</label>
            </div>
            <div class="field-body">
                <div class="field has-addons">
                    <span :class="list == 'normal' ? 'button is-info' : 'button'" @click="toggleListType('normal')">Normal</span>
                    <span :class="list == 'wikia' ? 'button is-info' : 'button'" @click="toggleListType('wikia')">Wikia</span>
                    <span :class="list == 'markdown' ? 'button is-info' : 'button'" @click="toggleListType('markdown')">Markdown</span>
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
            list: 'normal',
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
        sortObject(list){
            let arrayList = [];
            for(const ship in list){
                arrayList.push({
                    ship: ship,
                    nodes: list[ship]
                });
            }
            return arrayList;
        },
        toggleListType(value){
            this.list = value;
            if(this.map != undefined) this.getData();
        },
        toggleMap(value){
            this.map = value.target.value;
            this.getData();
        },
        parseDifficulty(value){
            let returnStr = "";
            // switch(value){
            //     case 0: returnStr = "全"; break;
            //     case 1: returnStr = "丁"; break;
            //     case 2: returnStr = "丙"; break;
            //     case 3: returnStr = "乙"; break;
            //     case 4: returnStr = "甲"; break;
            // }
            switch(value){
                case 0: returnStr = "All"; break;
                case 1: returnStr = "Casual"; break;
                case 2: returnStr = "Easy"; break;
                case 3: returnStr = "Medium"; break;
                case 4: returnStr = "Hard"; break;
            }
            return returnStr;
        },
        parseList(data){
            if(this.list == 'normal') this.normalParse(data);
            else if(this.list == 'wikia') this.wikiaParse(data);
            else if(this.list == 'markdown') this.markdownParse(data);
        },
        normalParse(data){
            if(this.map.split('-')[0] > 10) data = this.eventFilter(data);
            let list = {};
            let boss = (this.bossNodesData[this.map].length > 1) ? this.bossNodesData[this.map].join(', ') : this.bossNodesData[this.map][0];
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
            let text = "";
            let arrayList = this.sortObject(list);
            let orderedList = sortJsonArray(arrayList, 'ship');
            for(const x of orderedList){
                text += `${x.ship} - `;
                for(const node in x.nodes){
                    text += `${node}${this.normalParseDifficulty(x.nodes[node])}${this.normalParseRate(x.nodes[node])}, `;
                }
                text = text.substring(0, text.length-2);
                text += '\n';
            }
            this.output = text;
        },
        normalParseDifficulty(data){
            if(data.hasOwnProperty(0)) return '';
            else if(data.hasOwnProperty(1)) return '/Casual';
            else if(data.hasOwnProperty(2)) return '/Easy';
            else if(data.hasOwnProperty(3)) return '/Medium';
            else if(data.hasOwnProperty(4)) return '/Hard';
        },
        normalParseRate(data){
            if(data.hasOwnProperty(0)) return '';
            let returnStr = "";
            let difficulties = [];
            let ranks = {
                "S":[],
                "A":[],
                "B":[]
            }
            for(const x in data){
                difficulties.push(Number(x));
                ranks.S.push(data[x].S);
                ranks.A.push(data[x].A);
                ranks.B.push(data[x].B);
            }
            if(ranks.B.includes(true)) returnStr = (ranks.B.indexOf(true) == 0) ? " (B+)" : ` (${this.parseDifficulty(difficulties[ranks.B.indexOf(true)])}: B+)`;
            if(ranks.A.includes(true)) returnStr = (ranks.A.indexOf(true) == 0) ? " (A+)" : ` (${this.parseDifficulty(difficulties[ranks.A.indexOf(true)])}: A+)`;

            return returnStr;
        },
        wikiaParse(data){
            if(this.map.split('-')[0] > 10) data = this.eventFilter(data);
            let list = {};
            let boss = (this.bossNodesData[this.map].length > 1) ? this.bossNodesData[this.map].join(', ') : this.bossNodesData[this.map][0];
            let nodes = this.getNodes(data);
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
            let arrayList = this.sortObject(list);
            let orderedList = sortJsonArray(arrayList, 'ship');
            for(const x of orderedList){
                text += `|${x.ship}:`;
                for(const node in x.nodes){
                    text += this.wikiaParseDifficulty(node, x.nodes[node]);
                }
                text += `\n`;
            }
            text += `}}`;
            this.output = text;
        },
        wikiaParseDifficulty(node, data){
            let returnStr = ` ${node}`;
            let ranks = "";
            if(data.hasOwnProperty(0)){
                returnStr += ` {},`;
            }
            else if(data.hasOwnProperty(1)){
                returnStr += `/Casual {${this.wikiaParseRanks(data)}},`;
            }
            else if(data.hasOwnProperty(2)){
                returnStr += `/Easy {${this.wikiaParseRanks(data)}},`;
            }
            else if(data.hasOwnProperty(3)){
                returnStr += `/Medium {${this.wikiaParseRanks(data)}},`;
            }
            else if(data.hasOwnProperty(4)){
                returnStr += `/Hard {${this.wikiaParseRanks(data)}},`;
            }
            return returnStr;
        },
        wikiaParseRanks(data){
            let returnStr = '';
            if(data.hasOwnProperty(1)){
                returnStr += `Casual: ${this.wikiaParseRate(data[1])},`;
            }
            else if(data.hasOwnProperty(2)){
                returnStr += `Easy: ${this.wikiaParseRate(data[2])},`;
            }
            else if(data.hasOwnProperty(3)){
                returnStr += `Medium: ${this.wikiaParseRate(data[3])},`;
            }
            else if(data.hasOwnProperty(4)){
                returnStr += `Hard: ${this.wikiaParseRate(data[4])},`;
            }
            return returnStr.substring(0, returnStr.length-1);
        },
        wikiaParseRate(data){
            let returnStr = '';
            if(data.S) returnStr += 'S';
            if(data.A) returnStr += 'A';
            if(data.B) returnStr += 'B';
            return returnStr;
        },
        markdownParse(data){
            let columns = 1;
            if(this.map.split('-')[0] > 10) data = this.eventFilter(data);
            let list = {};
            let boss = this.bossNodesData[this.map];
            let nodes = this.getNodes(data).split(", ");
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
            let text = `Node:`;
            for(const node of boss){
                text += `|${node} (Boss)`;
                if(nodes.indexOf(node) != -1) nodes.splice(nodes.indexOf(node), 1);
            }
            for(const node of nodes){
                text += `|${node}`;
            }
            text += "\n";
            columns += boss.length;
            columns += nodes.length;
            for(let i = 0; i < columns; i++){
                text += ":--|";
            }
            text += "\n";
            let arrayList = this.sortObject(list);
            let orderedList = sortJsonArray(arrayList, 'ship');
            for(const x of orderedList){
                text += this.markdownParseDifficulty(x, boss.concat(nodes));
            }
            this.output = text;
        },
        markdownParseDifficulty(x, nodes){
            let returnStr = `${x.ship}`;
            for(const node of nodes){
                if(x.nodes.hasOwnProperty(node)){
                    returnStr += `|${this.markdownParseRates(x.nodes[node])}`
                }
                else{
                    returnStr += "|";
                }
            }
            returnStr += "\n";
            return returnStr;
        },
        markdownParseRates(data){
            if(data.hasOwnProperty(0)) return '';
            let returnStr = "";
            let difficulties = [];
            let ranks = {
                "S":[],
                "A":[],
                "B":[]
            }
            for(const x in data){
                difficulties.push(Number(x));
                ranks.S.push(data[x].S);
                ranks.A.push(data[x].A);
                ranks.B.push(data[x].B);
            }
            if(ranks.S.includes(true)){
                let number = ranks.S.indexOf(true);
                if(difficulties[number] == 4){
                    returnStr = `${this.parseDifficulty(difficulties[ranks.S.indexOf(true)])}`
                }
                else{
                    returnStr = `${this.parseDifficulty(difficulties[ranks.S.indexOf(true)])}${(ranks.S.indexOf(true) == ranks.S.length) ? "" : "+"}`;
                }
            }
            if(ranks.A.includes(true)){
                let number = ranks.A.indexOf(true);
                if(difficulties[number] == 4){
                    returnStr = `${this.parseDifficulty(difficulties[ranks.A.indexOf(true)])}: A+`
                }
                else{
                    returnStr = `${this.parseDifficulty(difficulties[ranks.A.indexOf(true)])}${(ranks.A.indexOf(true) == ranks.A.length) ? ":" : "+"} A+`;
                }
            }
            if(ranks.B.includes(true)){
                let number = ranks.B.indexOf(true);
                if(difficulties[number] == 4){
                    returnStr = `${this.parseDifficulty(difficulties[ranks.B.indexOf(true)])}: B+`
                }
                else{
                    returnStr = `${this.parseDifficulty(difficulties[ranks.B.indexOf(true)])}${(ranks.B.indexOf(true) == ranks.B.length) ? ":" : "+"} B+`;
                }
            }
            return returnStr;
        }
    }
}
</script>

<style scoped>

</style>
