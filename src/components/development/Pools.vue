<template>
<div class="container">
    <p class="title">
        Development Pools
    </p>
    <div class="content">
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label is-pulled-left">Ship Type </label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <div class="select">
                            <select @change="toggleShipType">
                                <option :value="''">Select a type</option>
                                <option v-for="shiptype in shipTypeData" :key="shiptype" :value="shiptype">{{shiptype}}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label is-pulled-left">Primary Resource </label>
            </div>
            <div class="field-body">
                <div class="field has-addons">
                    <span class="control">
                        <span :class="selectedPool == 'fuelsteel' ? 'button is-info' : 'button'" @click="togglePool('fuelsteel')">
                            Fuel/Steel
                        </span>
                    </span>
                    <span class="control">
                        <span :class="selectedPool == 'ammo' ? 'button is-info' : 'button'" @click="togglePool('ammo')">
                            Ammo
                        </span>
                    </span>
                    <span class="control">
                        <span :class="selectedPool == 'baux' ? 'button is-info' : 'button'" @click="togglePool('baux')">
                            Bauxite
                        </span>
                    </span>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label is-pulled-left">Nationality</label>
            </div>
            <div class="field-body">
                <div class="field has-addons">
                    <span class="control">
                        <span :class="nationality == 'italian' ? 'button is-info' : 'button'" @click="toggleNationality('italian')">
                            Italian
                        </span>
                    </span>
                    <span class="control">
                        <span :class="nationality == 'other' ? 'button is-info' : 'button'" @click="toggleNationality('other')">
                            Others
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="container" v-if="selectedType != undefined">
        <p class="title">
            Category {{parseCategory(selectedType)}} - {{getPool()}} Primary
        </p>
        <table class="table is-striped is-hoverable">
            <thead>
                <tr>
                    <th>Card</th>
                    <th>Name EN</th>
                    <th>Name JP</th>
                    <th>Resource Req.</th>
                    <th>HQ</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(equip) in poolData" :key="equip.id">
                    <td><img :src="getEquipCard(equip.id)" width="50" height="50"></td>
                    <td>
                        <img style="vertical-align:middle;" :src="getEquipIcon(equip.id)" width="30" height="30">
                        {{getEquipName(equip.id, "en")}}
                    </td>
                    <td>
                        <img style="vertical-align:middle;" :src="getEquipIcon(equip.id)" width="30" height="30">
                        {{getEquipName(equip.id, "jp")}}
                    </td>
                    <td>
                        <img style="vertical-align:middle;" :src="getResourceIcon('fuel')" width="30" height="30">
                        {{getResourceReq(equip.id, 0)}}
                        <img style="vertical-align:middle;" :src="getResourceIcon('ammo')" width="30" height="30">
                        {{getResourceReq(equip.id, 1)}}
                        <img style="vertical-align:middle;" :src="getResourceIcon('steel')" width="30" height="30">
                        {{getResourceReq(equip.id, 2)}}
                        <img style="vertical-align:middle;" :src="getResourceIcon('bauxite')" width="30" height="30">
                        {{getResourceReq(equip.id, 3)}}
                    </td>
                    <td>{{getEquipHqReq(equip.id)}}</td>
                    <td>{{calculateRate(equip.rate)}}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>Card</th>
                    <th>Name EN</th>
                    <th>Name JP</th>
                    <th>Resource Req.</th>
                    <th>HQ</th>
                    <th>Rate</th>
                </tr>
            </tfoot>
        </table>
    </div>
</div>
</template>

<script>
export default {
    data: function(){
        return{
            devTableData: require('./../../data/devtable.json'),
            equipData: require('./../../data/equip.json'),
            shipTypeData: require('./../../data/shiptype.json'),
            selectedPool: 'fuelsteel',
            selectedType: undefined,
            nationality: 'other',
            poolData: undefined
        }
    },
    methods:{
        calculateRate(value){
            return `${Number(value)*2}%`;
        },
        getData(){
            if(this.selectedType == undefined) return;
            let data = this.devTableData[`group${this.selectedType}`][this.selectedPool];
            let pool = {};
            for(let id in data){
                pool[id] = data[id];
            }
            switch(this.selectedType){
                case 1:
                    if(this.nationality == 'italian' && this.selectedPool == 'baux' && pool.hasOwnProperty('163')){
                        pool['25'] -= 1;
                        pool['163'] += 1;
                    }
                    break;
                case 2:
                    if(this.nationality == 'italian' && this.selectedPool == 'baux' && pool.hasOwnProperty('163')){
                        pool['22'] -= 1;
                        pool['25'] -= 1;
                        pool['163'] += 2;
                    }
                    break;
                case 3:
                    if((this.selectedPool == 'ammo' || this.selectedPool == 'baux') && pool.hasOwnProperty('168')){
                        pool['21'] -= 1;
                        pool['23'] -= 1;
                        pool['24'] -= 1;
                        pool['25'] -= 1;
                        pool['168'] += 4;
                    }
                    break;
            }
            let newPool = [];
            for(let item in pool){
                newPool.push({id: item, rate: pool[item]});
            }
            newPool.sort((a, b) => (a.rate > b.rate) ? -1 : 1);
            this.poolData = newPool;
        },
        getEquipCard(id){
            return require(`./../../../assets/equipcards/${id}.png`);
        },
        getEquipIcon(id){
            let icon = this.equipData[id].icon;
            return require(`./../../../assets/icons/equip/${icon}.png`);
        },
        getEquipName(id, lang){
            return this.equipData[id][lang];
        },
        getEquipHqReq(id){
            return `${Number(this.equipData[id].rare)*10}+`;
        },
        getResourceIcon(type){
            return require(`./../../../assets/icons/resource/${type}.png`);
        },
        getResourceReq(id, type){
            if(id == 168){
                let values = [240,260,10,250];
                return values[type];
            }
            else{
                return Number(this.equipData[id].scrap[type])*10;
            }
        },
        getPool(){
            let returnStr = "";
            switch(this.selectedPool){
                case 'fuelsteel': returnStr = "Fuel/Steel"; break;
                case 'ammo': returnStr = "Ammo"; break;
                case 'baux': returnStr = "Bauxite"; break;
            }
            return returnStr;
        },
        parseCategory(type){
            let returnStr = "";
            switch(type){
                case 1: returnStr = "Torpedo"; break;
                case 2: returnStr = "Heavy"; break;
                case 3: returnStr = "Aviation"; break;
            }
            return returnStr;
        },
        toggleNationality(value){
            this.nationality = value;
            this.getData();
        },
        togglePool(value){
            this.selectedPool = value;
            this.getData();
        },
        toggleShipType(value){
            switch(value.target.value){
                case "DE": this.selectedType = 1; break;
                case "DD": this.selectedType = 1; break;
                case "CL": this.selectedType = 1; break;
                case "CLT": this.selectedType = 1; break;
                case "SS": this.selectedType = 1; break;
                case "AP": this.selectedType = 1; break;
                case "CT": this.selectedType = 1; break;
                case "AO": this.selectedType = 1; break;
                case "CA": this.selectedType = 2; break;
                case "FBB": this.selectedType = 2; break;
                case "BB": this.selectedType = 2; break;
                case "XBB": this.selectedType = 2; break;
                case "AR": this.selectedType = 2; break;
                case "CAV": this.selectedType = 3; break;
                case "CVL": this.selectedType = 3; break;
                case "BBV": this.selectedType = 3; break;
                case "CV": this.selectedType = 3; break;
                case "SSV": this.selectedType = 3; break;
                case "AV": this.selectedType = 3; break;
                case "LHA": this.selectedType = 3; break;
                case "CVB": this.selectedType = 3; break;
                case "AS": this.selectedType = 3; break;
            }
            this.getData();
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
</style>
