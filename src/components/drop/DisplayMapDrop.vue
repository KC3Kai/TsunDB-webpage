<template>
<div class="container">
    <div class="tile is-ancestor">
        <div class="tile is-parent is-5">
            <div class="tile is-child">
                <p class="title">Filters</p>
                <div class="content">
                    <div class="field is-horizontal">
                        <div class="field-label">
                            <label class="label is-pulled-left">Node </label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <template v-for="node in nodesData[map]">
                                    <span :class="selectedNode == node ? 'button is-info' : 'button'" v-if="isNaN(node)" @click="toggleNode(node)" :key="node">
                                        &nbsp;{{node}}&nbsp;&nbsp;
                                    </span>
                                </template>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label">
                            <label class="label is-pulled-left">Ranks </label>
                        </div>
                        <div class="field-body">
                            <div class="field has-addons">
                                <span :class="selectedRanks == 'SAB' ? 'button is-info is-fullwidth' : 'button is-fullwidth'" @click="toggleRanks('SAB')">
                                    SAB
                                </span>
                                <span :class="selectedRanks == 'SA' ? 'button is-info is-fullwidth' : 'button is-fullwidth'" @click="toggleRanks('SA')">
                                    SA
                                </span>
                                <span :class="selectedRanks == 'S' ? 'button is-info is-fullwidth' : 'button is-fullwidth'" @click="toggleRanks('S')">
                                    S
                                </span>
                                <span :class="selectedRanks == 'A' ? 'button is-info is-fullwidth' : 'button is-fullwidth'" @click="toggleRanks('A')">
                                    A
                                </span>
                                <span :class="selectedRanks == 'B' ? 'button is-info is-fullwidth' : 'button is-fullwidth'" @click="toggleRanks('B')">
                                    B
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal" v-if="checkIsEventMap(map)">
                        <div class="field-label">
                            <label class="label is-pulled-left">Difficulty</label>
                        </div>
                        <div class="field-body">
                            <div class="field has-addons">
                                <span :class="selectedDifficulty == 4 ? 'button is-info is-fullwidth' : 'button is-fullwidth'" @click="toggleDifficulty(4)">
                                    甲
                                </span>
                                <span :class="selectedDifficulty == 3 ? 'button is-info is-fullwidth' : 'button is-fullwidth'" @click="toggleDifficulty(3)">
                                    乙
                                </span>
                                <span :class="selectedDifficulty == 2 ? 'button is-info is-fullwidth' : 'button is-fullwidth'" @click="toggleDifficulty(2)">
                                    丙
                                </span>
                                <span :class="selectedDifficulty == 1 ? 'button is-info is-fullwidth' : 'button is-fullwidth'" @click="toggleDifficulty(1)">
                                    丁
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label">
                            <label class="label is-pulled-left">Common</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <span v-if="hideCommon" class="button is-danger" @click="toggleHide(false)">
                                    Hidden
                                </span>
                                <span v-else class="button is-success" @click="toggleHide(true)">
                                    Shown
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
                    <transition name="fade">
                        <img v-on:load="imageIsLoaded" :src="getMapFile(map)" v-show="imageLoaded">
                    </transition>
                </div>
            </div>
        </div>
    </div>
    <div class="content">
        <p class="title">
            Node {{selectedNode}}{{parseDifficulty(selectedDifficulty)}}
        </p>
    </div>
    <table class="table is-striped is-hoverable">
        <thead>
            <tr>
                <th>Ship</th>
                <th>名前</th>
                <th>Name</th>
                <th>S-%</th>
                <th>A-%</th>
                <th>B-%</th>
                <th>Total-Count</th>
                <th>Total-%</th>
            </tr>
        </thead>
        <tbody name="table" is="transition-group">
            <template v-for="(ship, id) in this.data">
                <tr v-if="filterCommonShip(id, map)" :key="id">
                    <td><img :src="getShipBanner(id)" :title="getShipName(id)" style="width:160px; height:40px;"></td>
                    <td :style="checkCommonShip(id, map) ? 'color:black;' : 'color:red;'">{{getShipName(id, "jp")}}</td>
                    <td :style="checkCommonShip(id, map) ? 'color:black;' : 'color:red;'">{{getShipName(id, "en")}}</td>
                    <td><abbr :title="parseCount(ship.S)">{{calculateRate(ship.S, "S")}}</abbr></td>
                    <td><abbr :title="parseCount(ship.A)">{{calculateRate(ship.A, "A")}}</abbr></td>
                    <td><abbr :title="parseCount(ship.B)">{{calculateRate(ship.B, "B")}}</abbr></td>
                    <td>{{parseTotalCount(ship)}}</td>
                    <td>{{calculateTotalRate(ship)}}</td>
                </tr>
            </template>
        </tbody>
        <tfoot>
            <tr>
                <th>Ship</th>
                <th>名前</th>
                <th>Name</th>
                <th>S-%</th>
                <th>A-%</th>
                <th>B-%</th>
                <th>Total-Count</th>
                <th>Total-%</th>
            </tr>
        </tfoot>
    </table>
</div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['map'],
    data: function(){
        return{
            imageLoaded: false,
            configData: require('./../../data/config.json'),
            commonShipData: require('./../../data/commonShip.json'),
            edgesData: require('./../../data/edges.json'),
            eventMapsData: require('./../../data/eventMaps.json'),
            mapNamesData: require('./../../data/mapNames.json'),
            nodesData: require('./../../data/nodes.json'),
            shipData: require('./../../data/ship.json'),
            shipTypeData: require('./../../data/shiptype.json'),
            data: undefined,
            rankCount: {
                "S": 0,
                "A": 0,
                "B": 0
            },
            selectedDifficulty: 4,
            selectedNode: "A",
            selectedRanks: "SAB",
            hideCommon: false,
        }
    },
    mounted: function() {
        this.$nextTick(function () {
            this.getData(this.$route.query.map);
        })
    },
    methods:{
        calculateRate(value, rank){
            if(value == 0 || value == undefined) return "0.00%";
            return `${this.floorTwoDecimal(Number(value/this.rankCount[rank])*100)}%`;
        },
        calculateTotalRate(ship){
            let totalCount = this.parseTotalCount(ship);
            let total = this.rankCount["S"]+this.rankCount["A"]+this.rankCount["B"];
            return `${this.floorTwoDecimal(Number(totalCount/total)*100)}%`;
        },
        checkIsEventMap(map){
            if(this.eventMapsData.hasOwnProperty(String(map.slice(0,2)))){
                return true;
            }
            else{
                this.selectedDifficulty = 0;
                return false;
            }
        },
        checkCommonShip(id, map){
            if(this.checkIsEventMap(map)){
                return this.commonShipData.event.includes(Number(id));
            }
            else{
                return this.commonShipData.normal.includes(Number(id));
            }
        },
        filterCommonShip(id, map){
            if(this.hideCommon){
                if(this.checkCommonShip(id, map)) return false;
            }
            return true;
        },
        floorTwoDecimal(value){
            return Math.floor(Number(value) * 100) / 100;
        },
        getData(map){
            this.data = undefined;
            let container = {
                map: map,
                nodes: this.parseNode(map),
                ranks: this.parseRanks(this.selectedRanks),
                difficulty: this.selectedDifficulty
            };
            axios.post(`${this.configData.host}/drops`, container)
            .then(response => response.data)
            .then(data => {
                this.data = data;
                this.rankCount = {
                    "S": 0,
                    "A": 0,
                    "B": 0
                };
                for(let x in this.data){
                    this.rankCount["S"] += this.data[x].S;
                    this.rankCount["A"] += this.data[x].A;
                    this.rankCount["B"] += this.data[x].B;
                }
            })
            .catch(err => console.error(err));
        },
        getMapTitle(map){
            return `World ${map}: ${this.mapNamesData[map].en}`;
        },
        getMapFile(map){
            return require(`./../../../assets/maps/${map}.png`);
        },
        getShipBanner(id){
            return require(`./../../../assets/shipcards/${id}.png`);
        },
        getShipName(id, lang = "en"){
            if(this.shipData.hasOwnProperty(id)) return this.shipData[id][lang];
        },
        imageIsLoaded(){
            this.imageLoaded = true;
        },
        parseCount(value){
            return (value != undefined) ? value : 0;
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
        parseNode(map){
            let arr = [];
            for(let x in this.edgesData[map]){
                if(this.edgesData[map][x][1] == this.selectedNode) arr.push(Number(x));
            }
            return arr;
        },
        parseRanks(ranks){
            let value = [];
            switch(ranks){
                case "SAB": value = ["S","A","B"]; break;
                case "SA": value = ["S","A"]; break;
                case "S": value = ["S"]; break;
                case "A": value = ["A"]; break;
                case "B": value = ["B"]; break;
            }
            return value;
        },
        parseTotalCount(ship){
            let returnValue = 0;
            for(let x in ship){
                returnValue += ship[x];
            }
            return returnValue;
        },
        toggleDifficulty(value){
            this.selectedDifficulty = Number(value);
            this.getData(this.$route.query.map);
        },
        toggleHide(value){
            this.hideCommon = value;
        },
        toggleNode(value){
            this.selectedNode = value;
            this.getData(this.$route.query.map);
        },
        toggleRanks(value){
            this.selectedRanks = value;
            this.getData(this.$route.query.map);
        }
    }
}
</script>

<style scoped>
    table{
        border-style: solid;
        border-width: 2px;
        border-color:#DBDBDB;
    }
    .fade-enter-active {
        transition: opacity 1s ease-in-out;
    }
    .fade-enter-to{
        opacity: 1;
    }
    .fade-enter {
        opacity: 0;
    }
    .table-enter-active, .table-leave-active {
        transition: opacity .5s
    }
    .table-enter, .table-leave-to{
        opacity: 0;
    }
</style>
