<template>
<div class="container">
    <p class="title is-spaced">
        Development Recipe Builder
    </p>
    <p class="subtitle">
        Select what you need and we will do the rest for you!<br />
        Any equipment that are unobtainable through your combination will be filtered.
        <div class="content">
            As a reminder:
            <ul>
                <li><strong>Category Torpedo</strong> - DE, DD, CL, CLT, SS, AP, CT or AO</li>
                <li><strong>Category Heavy</strong> - CA, FBB, BB, XBB or AR</li>
                <li><strong>Category Aviation</strong> - CAV, CVL, BBV, CV, SSV, AV, LHA, CVB or AS</li>
            </ul>
        </div>
    </p>
    <div class="content">
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label is-pulled-left">Category</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <span class="control" v-for="(pools, group) in builtGroups" :key="group">
                        <button v-if="selectedGroup == group" class="button is-info">
                            {{parseCategory(group)}}
                        </button>
                        <button v-else class="button" @click="toggleGroup(group)">
                            {{parseCategory(group)}}
                        </button>
                    </span>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label is-pulled-left">Primary Resource</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <span class="control" v-for="(pool) in builtGroups[selectedGroup]" :key="pool">
                        <button v-if="selectedPool == pool" class="button is-info">
                            <template v-if="pool == 'fuelsteel'">
                                <img :src="getResourceIcon('fuel')" width="30" height="30">
                                /
                                <img :src="getResourceIcon('steel')" width="30" height="30">
                            </template>
                            <template v-else-if="pool == 'ammo'">
                                <img :src="getResourceIcon('ammo')" width="30" height="30">
                            </template>
                            <template v-else-if="pool == 'baux'">
                                <img :src="getResourceIcon('bauxite')" width="30" height="30">
                            </template>
                        </button>
                        <button v-else class="button" @click="togglePool(pool)">
                            <template v-if="pool == 'fuelsteel'">
                                <img :src="getResourceIcon('fuel')" width="30" height="30">
                                /
                                <img :src="getResourceIcon('steel')" width="30" height="30">
                            </template>
                            <template v-else-if="pool == 'ammo'">
                                <img :src="getResourceIcon('ammo')" width="30" height="30">
                            </template>
                            <template v-else-if="pool == 'baux'">
                                <img :src="getResourceIcon('bauxite')" width="30" height="30">
                            </template>
                        </button>
                    </span>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label is-pulled-left">Foreign Ship Required?</label>
            </div>
            <div class="field-body">
                <div class="field">
                    {{nationality}}
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label is-pulled-left">Suggested Recipe(s)</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <span v-for="(resources, id) in calculateResources(selectedPool, selectedEquips)" :key="id">
                        <strong v-if="id == 1">&nbsp;OR&nbsp;</strong>
                        <img style="vertical-align:middle;" :src="getResourceIcon('fuel')" width="30" height="30">
                        {{resources[0]}}
                        <img style="vertical-align:middle;" :src="getResourceIcon('ammo')" width="30" height="30">
                        {{resources[1]}}
                        <img style="vertical-align:middle;" :src="getResourceIcon('steel')" width="30" height="30">
                        {{resources[2]}}
                        <img style="vertical-align:middle;" :src="getResourceIcon('bauxite')" width="30" height="30">
                        {{resources[3]}}
                    </span>
                </div>
            </div>
        </div>
        <table class="table is-striped is-hoverable">
            <thead>
                <tr>
                    <th>Card</th>
                    <th>Name EN</th>
                    <th>Name JP</th>
                    <th>Resource Req.</th>
                    <th>HQ</th>
                    <th>Rate</th>
                    <th></th>
                </tr>
            </thead>
            <tbody name="table" is="transition-group">
                <tr v-for="(equip, id) in selectedEquips" :key="equip">
                    <td>
                        <img :src="getEquipCard(equip)" width="50" height="50">
                    </td>
                    <td>
                        <img style="vertical-align:middle;" :src="getEquipIcon(equip)" width="30" height="30">
                        {{getEquipName(equip, "en")}}
                    </td>
                    <td>
                        <img style="vertical-align:middle;" :src="getEquipIcon(equip)" width="30" height="30">
                        {{getEquipName(equip, "jp")}}
                    </td>
                    <td>
                        <img style="vertical-align:middle;" :src="getResourceIcon('fuel')" width="30" height="30">
                        {{getResourceReq(equip, 0)}}
                        <img style="vertical-align:middle;" :src="getResourceIcon('ammo')" width="30" height="30">
                        {{getResourceReq(equip, 1)}}
                        <img style="vertical-align:middle;" :src="getResourceIcon('steel')" width="30" height="30">
                        {{getResourceReq(equip, 2)}}
                        <img style="vertical-align:middle;" :src="getResourceIcon('bauxite')" width="30" height="30">
                        {{getResourceReq(equip, 3)}}
                    </td>
                    <td>{{getEquipHqReq(equip)}}</td>
                    <td>{{calculateRate(selectedGroup, selectedPool, equip)}}</td>
                    <td>
                        <button class="button is-danger" @click="removeSelected(id)">Remove</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="content" v-for="(equips, type) in list" :key="type">
        <div class="title">
            <span v-scroll-to="'#app'"  id="pointer">&uarr;</span>{{type}}
        </div>
        <!-- <v-popover class="inline" offset="50" v-for="equip in equips" :key="equip">
            <img :src="getEquipCard(equip)" :title="getEquipTitle(equip)" height="100px" width="100px">
            <img slot="popover" :src="getEquipCard(equip)" :title="getEquipTitle(equip)">
        </v-popover> -->
        <transition-group name="fade">
            <template v-for="equip in equips">
                <img id="equip" v-if="!selectedEquips.includes(equip)" :src="getEquipCard(equip)" :title="getEquipTitle(equip)" height="150px" width="150px" :key="equip" @click="toggleEquipment(equip)">
            </template>
        </transition-group>
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
            list: undefined,
            defaultGroups: {
                group1:["fuelsteel", "ammo", "baux"],
                group2:["fuelsteel", "ammo", "baux"],
                group3:["fuelsteel", "ammo", "baux"]
            },
            builtGroups:{
                group1:["fuelsteel", "ammo", "baux"],
                group2:["fuelsteel", "ammo", "baux"],
                group3:["fuelsteel", "ammo", "baux"]
            },
            selectedEquips: [],
            selectedGroup: "group1",
            selectedPool: "fuelsteel",
            nationality: "No"
        }
    },
    mounted: function() {
        this.$nextTick(function () {
            this.buildList(this.defaultGroups);
        })
    },
    methods:{
        buildList(groups){
            let newObj = {};
            for(let group in groups){
                for(let pool of groups[group]){
                    for(let x in this.devTableData[group][pool]){
                        if(this.selectedEquips.includes(x)) continue;
                        let category = this.getCategory(this.equipData[x].type);
                        if(!(newObj.hasOwnProperty(category))) newObj[category] = [x];
                        if(!(newObj[category].includes(x))) newObj[category].push(x);
                    }
                }
            }
            this.list = newObj;
        },
        buildGroup(list){
            if(list.length == 0){
                this.builtGroups = {
                    group1:["fuelsteel", "ammo", "baux"],
                    group2:["fuelsteel", "ammo", "baux"],
                    group3:["fuelsteel", "ammo", "baux"]
                };
                this.buildList(this.defaultGroups);
            }
            else{
                let newObj = {};
                for(let group in this.devTableData){
                    for(let pool in this.devTableData[group]){
                        let contains = false;
                        for(let item of list){
                            if(this.devTableData[group][pool].hasOwnProperty(item)) contains = true;
                            else{
                                contains = false;
                                break;
                            }
                        }
                        if(contains){
                            if(!(newObj.hasOwnProperty(group))) newObj[group] = [];
                            newObj[group].push(pool);
                        }
                    }
                }
                this.nationality = this.checkNationality(list);
                this.builtGroups = newObj;
                this.selectedGroup = this.selectFirstCategory(newObj);
                this.selectedPool = this.selectFirstPrimary(this.selectedGroup, newObj);
                this.buildList(newObj);
            }
        },
        calculateRate(group, pool, equip){
            let rate = 0;
            for(let x in this.devTableData[group][pool]){
                if(x == equip) rate += this.devTableData[group][pool][x];
            }
            //Exceptions
            if(this.selectedEquips.includes('163')){
                //Ro.43
                switch(group){
                    case "group1":
                        if(equip == 25) rate -= 1;
                        if(equip == 163) rate += 1;
                    break;
                    case "group2":
                        if(equip == 22) rate -= 1;
                        if(equip == 25) rate -= 1;
                        if(equip == 163) rate += 2;
                    break;
                }
            }
            if(this.selectedEquips.includes('168')){
                //Type 96 LBAA
                switch(group){
                    case "group3":
                        if(equip == 21) rate -= 1;
                        if(equip == 23) rate -= 1;
                        if(equip == 24) rate -= 1;
                        if(equip == 25) rate -= 1;
                        if(equip == 168) rate += 4;
                    break;
                }
            }
            return `${Number(rate)*2}%`;
        },
        calculateResources(pool, list){
            let returnArr = [];
            let resources = [10, 10, 10, 10];
            for(let item of list){
                let req = [
                    this.getResourceReq(item, 0),
                    this.getResourceReq(item, 1),
                    this.getResourceReq(item, 2),
                    this.getResourceReq(item, 3)
                ];
                for(let x in resources){
                    if(resources[x] < req[x]) resources[x] = req[x];
                }
            }
            switch(pool){
                case "fuelsteel":
                    if(resources[0] >= Math.max(resources[1],resources[3]) || resources[2] >= Math.max(resources[1],resources[3])) returnArr.push(resources);
                    else{
                        let copy1 = [...resources];
                        copy1[0] = Math.max(...copy1)+1;
                        returnArr.push(copy1);
                        let copy2 = [...resources];
                        copy2[2] = Math.max(...copy2)+1;
                        returnArr.push(copy2);
                    }
                    break;
                case "ammo":
                    if(resources[1] > Math.max(resources[0], resources[2]) && resources[1] >= resources[3]) returnArr.push(resources);
                    else{
                        resources[1] = Math.max(...resources)+1;
                        returnArr.push(resources);
                    }
                    break;
                case "baux":
                    if(resources[3] > Math.max(resources[0], resources[1], resources[2])) returnArr.push(resources);
                    else{
                        resources[3] = Math.max(...resources)+1;
                        returnArr.push(resources);
                    }
                    break;
            }
            return returnArr;
        },
        checkNationality(list){
            let nationality = "No";
            for(let x of list){
                //Italian check
                if(x == 163){
                    nationality = "Yes, Italian";
                    break;
                }
            }
            return nationality;
        },
        getCategory(type){
            let category = "";
            switch(type){
                case 1: category = "Main Guns"; break;
                case 2: category = "Main Guns"; break;
                case 3: category = "Main Guns"; break;
                case 4: category = "Secondary Guns"; break;
                case 5: category = "Torpedoes"; break;
                case 6: category = "Carrier/Land Aircraft"; break;
                case 7: category = "Carrier/Land Aircraft"; break;
                case 8: category = "Carrier/Land Aircraft"; break;
                case 9: category = "Carrier/Land Aircraft"; break;
                case 10: category = "Seaplanes"; break;
                case 11: category = "Seaplanes"; break;
                case 12: category = "Radars"; break;
                case 13: category = "Radars"; break;
                case 14: category = "ASW"; break;
                case 15: category = "ASW"; break;
                case 17: category = "Engines"; break;
                case 18: category = "Shells"; break;
                case 19: category = "Shells"; break;
                case 21: category = "Anti-Aircraft Guns"; break;
                case 22: category = "Torpedoes"; break;
                case 27: category = "Bulges"; break;
                case 28: category = "Bulges"; break;
                case 30: category = "Drum"; break;
                case 47: category = "Carrier/Land Aircraft"; break;
            }
            return category;
        },
        getEquipCard(id){
            return require(`./../../../assets/equipcards/${id}.png`);
        },
        getEquipHqReq(id){
            return `${Number(this.equipData[id].rare)*10}+`;
        },
        getEquipIcon(id){
            let icon = this.equipData[id].icon;
            return require(`./../../../assets/icons/equip/${icon}.png`);
        },
        getEquipName(id, lang){
            return this.equipData[id][lang];
        },
        getEquipTitle(id){
            return `${this.equipData[id].jp} (${this.equipData[id].en})`;
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
        parseCategory(type){
            let returnStr = "";
            switch(type){
                case "group1": returnStr = "Torpedo"; break;
                case "group2": returnStr = "Heavy"; break;
                case "group3": returnStr = "Aviation"; break;
            }
            return returnStr;
        },
        selectFirstCategory(group){
            let returnStr = "";
            for(let x in group){
                returnStr = x;
                break;
            }
            return returnStr;
        },
        selectFirstPrimary(selected, group){
            let returnStr = "";
            for(let x of group[selected]){
                returnStr = x;
                break;
            }
            return returnStr;
        },
        toggleEquipment(id){
            if(this.selectedEquips.includes(id)) return;
            this.selectedEquips.push(id);
            this.buildGroup(this.selectedEquips);
        },
        toggleGroup(value){
            this.selectedPool = this.selectFirstPrimary(value, this.builtGroups);
            this.selectedGroup = value;
        },
        togglePool(value){
            this.selectedPool = value;
        },
        removeSelected(id){
            this.selectedEquips = this.selectedEquips.slice(0, id);
            this.buildGroup(this.selectedEquips);
        }
    }
}
</script>

<style scoped>
    #pointer{
      cursor: pointer;
    }
    .inline{
        display:inline-block;
    }
    .inline img{
        margin-right:5px;
    }
    #equip{
        margin-right:5px;
        cursor: pointer;
        transition: visibility 0s, opacity 0.5s linear;
    }
    #equip:hover{
        opacity: .7;
    }
    table{
        border-style: solid;
        border-width: 2px;
        border-color:#DBDBDB;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
    .table-enter-active, .table-leave-active {
        transition: opacity .5s
    }
    .table-enter, .table-leave-to{
        opacity: 0;
    }
</style>
