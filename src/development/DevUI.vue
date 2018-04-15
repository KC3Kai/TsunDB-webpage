<template>
<div class="container">
    <div class="field is-horizontal">
        <div class="field-label">
            <label class="label is-pulled-left">Secretary Ship: </label>
        </div>
        <div class="field-body">
            <div class="field">
                <div class="control">
                    <div class="select">
                        <select @change="setSecretary($event.target.value)">
                            <option value="undefined" disabled selected>Select a ship type</option>
                            <option v-for="(shiptype,id) in shiptypes" :key="id" :value="shiptype">{{shiptype}}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="field is-horizontal">
        <div class="field-label">
            <label class="label is-pulled-left">Nationality: </label>
        </div>
        <div class="field-body">
            <div class="field">
                <div class="control">
                    <button :class="{'button is-info': nationality == 'italian', 'button': nationality != 'italian'}" value="italian" @click="setNationality($event.target.value)">
                        Italian
                    </button>
                    <button :class="{'button is-info': nationality == 'others', 'button': nationality != 'others'}" value="others" @click="setNationality($event.target.value)">
                        Others
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="container" id="parent">
        <div class="container">
            <div class="box" id="dev-box">
                <img src="/assets/icons/resource/Fuel.png" height="30" width="30" style="vertical-align:middle;">
                <span id="white-text">
                    Fuel
                </span>
                <div id="container">
                    <div>
                        <input class="input" type="number" min="0" max="300" v-model="resources['fuel']" @input="setResourceInput($event.target.value,'fuel')">
                    </div>
                    <br />
                    <div id="dev-button-row">
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(-1,'fuel')" :disabled="resources['fuel'] <= 10">-1</a>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(1,'fuel')" :disabled="resources['fuel'] >= 300">+1</a>
                        <a class="button is-info" id="special-dev-button" @click="setResourceInput(randomNumber(10,300),'fuel')">Random</a>
                    </div>
                    <div id="dev-button-row">
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(-10,'fuel')" :disabled="resources['fuel'] <= 10">-10</a>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(10,'fuel')" :disabled="resources['fuel'] >= 300">+10</a>
                        <a class="button is-info" id="special-dev-button" @click="setResourceInput(300,'fuel')">Max</a>
                    </div>
                    <div>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(-100,'fuel')" :disabled="resources['fuel'] <= 10">-100</a>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(100,'fuel')" :disabled="resources['fuel'] >= 300">+100</a>
                        <a class="button is-info" id="special-dev-button" @click="setResourceInput(10,'fuel')">Reset</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" style="display:inline-block;">
            <div class="box" id="dev-box">
                <img src="/assets/icons/resource/Ammo.png" height="30" width="30" style="vertical-align:middle;">
                <span id="white-text">
                    Ammo
                </span>
                <div id="container">
                    <div>
                        <input class="input" type="number" min="0" max="300" v-model="resources['ammo']" @input="setResourceInput($event.target.value,'ammo')">
                    </div>
                    <br />
                    <div id="dev-button-row">
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(-1,'ammo')" :disabled="resources['ammo'] <= 10">-1</a>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(1,'ammo')" :disabled="resources['ammo'] >= 300">+1</a>
                        <a class="button is-info" id="special-dev-button" @click="setResourceInput(randomNumber(10,300),'ammo')">Random</a>
                    </div>
                    <div id="dev-button-row">
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(-10,'ammo')" :disabled="resources['ammo'] <= 10">-10</a>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(10,'ammo')" :disabled="resources['ammo'] >= 300">+10</a>
                        <a class="button is-info" id="special-dev-button" @click="setResourceInput(300,'ammo')">Max</a>
                    </div>
                    <div>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(-100,'ammo')" :disabled="resources['ammo'] <= 10">-100</a>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(100,'ammo')" :disabled="resources['ammo'] >= 300">+100</a>
                        <a class="button is-info" id="special-dev-button" @click="setResourceInput(10,'ammo')">Reset</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="box" id="dev-box">
                <img src="/assets/icons/resource/Steel.png" height="30" width="30" style="vertical-align:middle;">
                <span id="white-text">
                    Steel
                </span>
                <div id="container">
                    <div>
                        <input class="input" type="number" min="0" max="300" v-model="resources['steel']" @input="setResourceInput($event.target.value,'steel')">
                    </div>
                    <br />
                    <div id="dev-button-row">
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(-1,'steel')" :disabled="resources['steel'] <= 10">-1</a>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(1,'steel')" :disabled="resources['steel'] >= 300">+1</a>
                        <a class="button is-info" id="special-dev-button" @click="setResourceInput(randomNumber(10,300),'steel')">Random</a>
                    </div>
                    <div id="dev-button-row">
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(-10,'steel')" :disabled="resources['steel'] <= 10">-10</a>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(10,'steel')" :disabled="resources['steel'] >= 300">+10</a>
                        <a class="button is-info" id="special-dev-button" @click="setResourceInput(300,'steel')">Max</a>
                    </div>
                    <div>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(-100,'steel')" :disabled="resources['steel'] <= 10">-100</a>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(100,'steel')" :disabled="resources['steel'] >= 300">+100</a>
                        <a class="button is-info" id="special-dev-button" @click="setResourceInput(10,'steel')">Reset</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="box" id="dev-box">
                <img src="/assets/icons/resource/Bauxite.png" height="30" width="30" style="vertical-align:middle;">
                <span id="white-text">
                    Bauxite
                </span>
                <div id="container">
                    <div>
                        <input class="input" type="number" min="0" max="300" v-model="resources['bauxite']" @input="setResourceInput($event.target.value,'bauxite')">
                    </div>
                    <br />
                    <div id="dev-button-row">
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(-1,'bauxite')" :disabled="resources['bauxite'] <= 10">-1</a>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(1,'bauxite')" :disabled="resources['bauxite'] >= 300">+1</a>
                        <a class="button is-info" id="special-dev-button" @click="setResourceInput(randomNumber(10,300),'bauxite')">Random</a>
                    </div>
                    <div id="dev-button-row">
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(-10,'bauxite')" :disabled="resources['bauxite'] <= 10">-10</a>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(10,'bauxite')" :disabled="resources['bauxite'] >= 300">+10</a>
                        <a class="button is-info" id="special-dev-button" @click="setResourceInput(300,'bauxite')">Max</a>
                    </div>
                    <div>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(-100,'bauxite')" :disabled="resources['bauxite'] <= 10">-100</a>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(100,'bauxite')" :disabled="resources['bauxite'] >= 300">+100</a>
                        <a class="button is-info" id="special-dev-button" @click="setResourceInput(10,'bauxite')">Reset</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br />
    <dev-table :data="devdata" :displayType="2"></dev-table>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            shiptype: undefined,
            nationality: "others",
            resources: {
                "fuel": 10,
                "ammo": 10,
                "steel": 10,
                "bauxite": 10
            },
            devdata: [],
            devpools: require('./../data/devtable.json'),
            equips: require('./../data/equip.json'),
            shiptypes: require('./../data/shiptype.json')
        }
    },
    methods: {
        calculatePool(){
            if(this.shiptype == undefined) return;
            if(this.resources['fuel'] < 10) return;
            if(this.resources['ammo'] < 10) return;
            if(this.resources['steel'] < 10) return;
            if(this.resources['bauxite'] < 10) return;
            this.devdata = {};
            let primary = undefined;
            let group = undefined;
            if(this.resources['bauxite'] > Math.max(this.resources['fuel'], this.resources['ammo'], this.resources['steel'])){
                primary = 'baux';
            }
            else if(this.resources['ammo'] > Math.max(this.resources['fuel'], this.resources['steel']) && this.resources['ammo'] >= this.resources['bauxite']){
                primary = 'ammo';
            }
            else{
                primary = 'fuelsteel';
            }
            switch(this.shiptype){
                case "DE": group = 'group1'; break;
                case "DD": group = 'group1'; break;
                case "CL": group = 'group1'; break;
                case "CLT": group = 'group1'; break;
                case "SS": group = 'group1'; break;
                case "AP": group = 'group1'; break;
                case "CT": group = 'group1'; break;
                case "AO": group = 'group1'; break;
                case "CA": group = 'group2'; break;
                case "FBB": group = 'group2'; break;
                case "BB": group = 'group2'; break;
                case "XBB": group = 'group2'; break;
                case "AR": group = 'group2'; break;
                case "CAV": group = 'group3'; break;
                case "CVL": group = 'group3'; break;
                case "BBV": group = 'group3'; break;
                case "CV": group = 'group3'; break;
                case "SSV": group = 'group3'; break;
                case "AV": group = 'group3'; break;
                case "LHA": group = 'group3'; break;
                case "CVB": group = 'group3'; break;
                case "AS": group = 'group3'; break;
            }
            this.devdata = this.calculatePoolException(group, primary, this.nationality);
        },
        calculatePoolException(group, primary, nationality){
            let selectedPool = this.devpools[group][primary];
            let pool = {};
            pool['penguin'] = 0;
            for(let value in selectedPool){
                let scrap = this.equips[value].scrap;
                if(value == '168'){
                    //T96 LBAA seems to have a different recipe calculation.
                    scrap = [240,260,10,250];
                }
                else {
                    scrap = scrap.map(i => i * 10);
                }
                if(this.resources['fuel'] >= scrap[0] && this.resources['ammo'] >= scrap[1] && this.resources['steel'] >= scrap[2] && this.resources['bauxite'] >= scrap[3]){
                    pool[value] = selectedPool[value];
                }
                else{
                    pool['penguin'] += 1;
                }
            }
            switch(group){
                case 'group1': 
                    if(nationality == 'italian' && primary == 'baux' && pool.hasOwnProperty('163')){
                        pool['25'] -= 1;
                        pool['163'] += 1;
                    }
                    break;
                case 'group2': 
                    if(nationality == 'italian' && primary == 'baux' && pool.hasOwnProperty('163')){
                        pool['22'] -= 1;
                        pool['25'] -= 1;
                        pool['163'] += 2;
                    }
                    break;
                case 'group3': 
                    if(this.resources['fuel'] >= 240 && this.resources['ammo'] >= 260 && this.resources['bauxite'] >= 250 && pool.hasOwnProperty('168') && (primary == 'ammo' || primary == 'baux')){
                        pool['21'] -= 1;
                        pool['23'] -= 1;
                        pool['24'] -= 1;
                        pool['25'] -= 1;
                        pool['168'] += 4;
                    }
                    break;
            }
            var poolSortedArray = [];
            for (var value in pool) {
                poolSortedArray.push([value, pool[value]]);
            }
            poolSortedArray.sort(function(a, b) {
                return b[1] - a[1];
            });
            return poolSortedArray;
        },
        changeResourceInput(value, type){
            this.resources[type] = this.resources[type] + value;
            if(this.resources[type] < 0){
                this.resources[type] = 0;
            }
            else if(this.resources[type] > 300){
                this.resources[type] = 300;
            }
            this.calculatePool();
        },
        setNationality(value){
            this.nationality = value;
            this.calculatePool();
        },
        setResourceInput(value, type){
            this.resources[type] = value;
            if(this.resources[type] < 0){
                this.resources[type] = 0;
            }
            else if(this.resources[type] > 300){
                this.resources[type] = 300;
            }
            this.calculatePool();
        },
        setSecretary(value){
            this.shiptype = value;
            this.calculatePool();
        },
        randomNumber(min,max){
            return Math.floor(Math.random() * (max - min) + 1) + min; 
        }
    }
}
</script>

<style>
    #dev-box{
        margin: 2%;
        width: 90%;
        background-color: #696969;
        border: 1px solid silver;
    }
    #dev-button-row{
        margin-bottom:7px;
    }
    #dev-button{
        margin-left: 5px;
        margin-right: 5px;
        width:20%;
    }
    #special-dev-button{
        margin-left: 5px;
        margin-right: 5px;
        width: 30%;
        float:right;
    }
    #white-text{
        color: #FFFFFF;
        vertical-align: middle;
    }
    #align-center{
        align-content:center;
    }
</style>
