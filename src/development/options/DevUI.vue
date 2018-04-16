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
                <img src="/assets/icons/resource/Fuel.png" height="25" width="25" style="vertical-align:middle;">
                <span id="white-text">
                    Fuel
                </span>
                <div id="dev-container">
                    <div id="left">
                        <a class="button is-info" id="special-dev-button" @click="changeResourceInput(1,'fuel')">&#923;</a>
                        <input class="input" id="resource-input" type="number" min="0" max="300" v-model="resources['fuel']" @input="setResourceInput($event.target.value,'fuel')">
                        <a class="button is-info" id="special-dev-button" @click="changeResourceInput(-1,'fuel')">V</a> 
                    </div>
                    <div id="right">
                        <div id="dev-resource-row">
                            <a class="button is-info" id="dev-button" @click="changeResourceInput(-10,'fuel')">-10</a>                            
                            <a class="button is-info" id="dev-button" @click="changeResourceInput(10,'fuel')">+10</a>
                            <a class="button is-info" id="dev-button" @click="changeResourceInput(-100,'fuel')">-100</a>
                            <a class="button is-info" id="dev-button" @click="changeResourceInput(100,'fuel')">+100</a>
                            <a class="button is-info" id="special-dev-button" @click="setResourceInput(300,'fuel')">Max</a>
                            <a class="button is-info" id="special-dev-button" @click="setResourceInput(10,'fuel')">Reset</a>
                            <a class="button is-info" id="special-dev-button" @click="setResourceInput(randomNumber(10,300),'fuel')">Random</a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" style="display:inline-block;">
            <div class="box" id="dev-box">
                <img src="/assets/icons/resource/Ammo.png" height="25" width="25" style="vertical-align:middle;">
                <span id="white-text">
                    Ammo
                </span>
                <div id="dev-container">
                    <div id="left">
                        <a class="button is-info" id="special-dev-button" @click="changeResourceInput(1,'ammo')">&#923;</a>
                        <input class="input" id="resource-input" type="number" min="0" max="300" v-model="resources['ammo']" @input="setResourceInput($event.target.value,'ammo')">
                        <a class="button is-info" id="special-dev-button" @click="changeResourceInput(-1,'ammo')">V</a> 
                    </div>
                    <div id="right">
                        <div id="dev-resource-row">
                            <a class="button is-info" id="dev-button" @click="changeResourceInput(-10,'ammo')">-10</a>                            
                            <a class="button is-info" id="dev-button" @click="changeResourceInput(10,'ammo')">+10</a>
                            <a class="button is-info" id="dev-button" @click="changeResourceInput(-100,'ammo')">-100</a>
                            <a class="button is-info" id="dev-button" @click="changeResourceInput(100,'ammo')">+100</a>
                            <a class="button is-info" id="special-dev-button" @click="setResourceInput(300,'ammo')">Max</a>
                            <a class="button is-info" id="special-dev-button" @click="setResourceInput(10,'ammo')">Reset</a>
                            <a class="button is-info" id="special-dev-button" @click="setResourceInput(randomNumber(10,300),'ammo')">Random</a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="box" id="dev-box">
                <img src="/assets/icons/resource/Steel.png" height="25" width="25" style="vertical-align:middle;">
                <span id="white-text">
                    Steel
                </span>
                <div id="dev-container">
                    <div id="left">
                        <a class="button is-info" id="special-dev-button" @click="changeResourceInput(1,'steel')">&#923;</a>
                        <input class="input" id="resource-input" type="number" min="0" max="300" v-model="resources['steel']" @input="setResourceInput($event.target.value,'steel')">
                        <a class="button is-info" id="special-dev-button" @click="changeResourceInput(-1,'steel')">V</a> 
                    </div>
                    <div id="right">
                        <div id="dev-resource-row">
                            <a class="button is-info" id="dev-button" @click="changeResourceInput(-10,'steel')">-10</a>                            
                            <a class="button is-info" id="dev-button" @click="changeResourceInput(10,'steel')">+10</a>
                            <a class="button is-info" id="dev-button" @click="changeResourceInput(-100,'steel')">-100</a>
                            <a class="button is-info" id="dev-button" @click="changeResourceInput(100,'steel')">+100</a>
                            <a class="button is-info" id="special-dev-button" @click="setResourceInput(300,'steel')">Max</a>
                            <a class="button is-info" id="special-dev-button" @click="setResourceInput(10,'steel')">Reset</a>
                            <a class="button is-info" id="special-dev-button" @click="setResourceInput(randomNumber(10,300),'steel')">Random</a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="box" id="dev-box">
                <img src="/assets/icons/resource/Bauxite.png" height="25" width="25" style="vertical-align:middle;">
                <span id="white-text">
                    Bauxite
                </span>
                <div id="dev-container">
                    <div id="left">
                        <a class="button is-info" id="special-dev-button" @click="changeResourceInput(1,'bauxite')">&#923;</a>
                        <input class="input" id="resource-input" type="number" min="0" max="300" v-model="resources['bauxite']" @input="setResourceInput($event.target.value,'bauxite')">
                        <a class="button is-info" id="special-dev-button" @click="changeResourceInput(-1,'bauxite')">V</a> 
                    </div>
                    <div id="right">
                        <div id="dev-resource-row">
                            <a class="button is-info" id="dev-button" @click="changeResourceInput(-10,'bauxite')">-10</a>                            
                            <a class="button is-info" id="dev-button" @click="changeResourceInput(10,'bauxite')">+10</a>
                            <a class="button is-info" id="dev-button" @click="changeResourceInput(-100,'bauxite')">-100</a>
                            <a class="button is-info" id="dev-button" @click="changeResourceInput(100,'bauxite')">+100</a>
                            <a class="button is-info" id="special-dev-button" @click="setResourceInput(300,'bauxite')">Max</a>
                            <a class="button is-info" id="special-dev-button" @click="setResourceInput(10,'bauxite')">Reset</a>
                            <a class="button is-info" id="special-dev-button" @click="setResourceInput(randomNumber(10,300),'bauxite')">Random</a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <p>
        <template v-if="shiptype == undefined">
            <strong>Secretary:</strong> None
        </template>
        <template v-else>
            <strong>Secretary:</strong> {{shiptype}}
        </template>
        <br />
        <template v-if="primary=='fuelsteel'">
            <strong>Primary:</strong> <img src="/assets/icons/resource/Fuel.png" height="25" width="25" style="vertical-align:middle;"><span style="vertical-align:middle;">&amp;</span><img src="/assets/icons/resource/Steel.png" height="25" width="25" style="vertical-align:middle;">
        </template>
        <template v-else-if="primary=='ammo'">
            <strong>Primary:</strong> <img src="/assets/icons/resource/Ammo.png" height="25" width="25" style="vertical-align:middle;">
        </template>
        <template v-else-if="primary=='baux'">
            <strong>Primary:</strong> <img src="/assets/icons/resource/Bauxite.png" height="25" width="25" style="vertical-align:middle;">
        </template>
        <template v-else>
            <strong>Primary:</strong> None
        </template>
        <br />
        <strong>Recipe:</strong> <img src="/assets/icons/resource/Fuel.png" height="25" width="25" style="vertical-align:middle;">{{resources['fuel']}}<img src="/assets/icons/resource/Ammo.png" height="25" width="25" style="vertical-align:middle;">{{resources['ammo']}}<img src="/assets/icons/resource/Steel.png" height="25" width="25" style="vertical-align:middle;">{{resources['steel']}}<img src="/assets/icons/resource/Bauxite.png" height="25" width="25" style="vertical-align:middle;">{{resources['bauxite']}}
    </p>
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
            primary: undefined,
            devdata: [],
            devpools: require('./../../data/devtable.json'),
            equips: require('./../../data/equip.json'),
            shiptypes: require('./../../data/shiptype.json')
        }
    },
    methods: {
        calculatePool(){
            if(this.shiptype == undefined) return this.primary = undefined;
            if(this.resources['fuel'] < 10) return this.primary = undefined;
            if(this.resources['ammo'] < 10) return this.primary = undefined;
            if(this.resources['steel'] < 10) return this.primary = undefined;
            if(this.resources['bauxite'] < 10) return this.primary = undefined;
            this.devdata = {};
            let group = undefined;
            if(this.resources['bauxite'] > Math.max(this.resources['fuel'], this.resources['ammo'], this.resources['steel'])){
                this.primary = 'baux';
            }
            else if(this.resources['ammo'] > Math.max(this.resources['fuel'], this.resources['steel']) && this.resources['ammo'] >= this.resources['bauxite']){
                this.primary = 'ammo';
            }
            else{
                this.primary = 'fuelsteel';
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
            this.devdata = this.calculatePoolException(group, this.primary, this.nationality);
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
                    pool['penguin'] += selectedPool[value];
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
        removeInitialZeros(value){
            value = String(value);
            while(value.slice(0,1) == "0"){
                value = value.slice(1);
            }
            return parseInt(value);
        },
        setNationality(value){
            this.nationality = value;
            this.calculatePool();
        },
        setResourceInput(value, type){
            value = this.removeInitialZeros(value);
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
        height:70%;
        background: radial-gradient(#333333,#505050);
        border: 1px solid silver;
    }
    #dev-container{
        display:flex;
    }
    #dev-resource-row{
        display:inline;
    }
    #dev-button{
        background: radial-gradient(#239E9F, #A2D3C5);
        margin-right: 5px;
        width:42%;
        height:10%;
        margin-bottom:5px;
    }
    #special-dev-button{
        background: radial-gradient(#239E9F, #A2D3C5);
        margin-right: 5px;
        margin-bottom:5px;
        width: 92%;
        height:10%;
    }
    #dev-button:hover, #special-dev-button:hover{
        background: radial-gradient(rgb(28, 126, 126), rgb(112, 145, 135));
    }
    #white-text{
        color: #FFFFFF;
        vertical-align: middle;
    }
    #align-center{
        align-content:center;
    }
    #resource-input{
        background: linear-gradient(#1F1F1F, #535353, #1F1F1F);
        border: 1px solid gold;
        color: white;
        font-size: 30px;
        text-align:center;
        width: 92%;
        height: 40%;
        margin-top:-4%;
        margin-bottom:-0%;
    }
</style>
