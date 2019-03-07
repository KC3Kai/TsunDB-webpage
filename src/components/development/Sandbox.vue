<template>
<div class="container">
    <p class="title is-spaced">
        Development - Sandbox
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
                            <select @change="toggleShipType" v-model="selectedShipType">
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
    <div class="container">
        <div class="tile is-ancestor">
            <div class="tile is-parent is-6">
                <div class="tile is-child">
                    <div class="field is-horizontal">
                        <div class="field-label">
                            <label class="label is-pulled-left">Fuel</label>
                        </div>
                        <div class="field-body">
                            <div class="field has-addons">
                                <span class="button" id="dev-button" @click="toggleResourceInput(resources['fuel']-100, 'fuel')">
                                    -100
                                </span>
                                <span class="button" id="dev-button" @click="toggleResourceInput(resources['fuel']-10, 'fuel')">
                                    -10
                                </span>
                                <span class="control">
                                    <input class="input" type="number" min="0" max="300" v-model="resources['fuel']" @input="toggleResourceInput($event.target.value, 'fuel')">
                                </span>
                                <span class="button" id="dev-button" @click="toggleResourceInput(resources['fuel']+10, 'fuel')">
                                    +10
                                </span>
                                <span class="button" id="dev-button" @click="toggleResourceInput(resources['fuel']+100, 'fuel')">
                                    +100
                                </span>
                                <span class="button" id="dev-button" @click="toggleResourceInput(300, 'fuel')">
                                    Max
                                </span>
                                <span class="button" id="dev-button" @click="toggleResourceInput(10, 'fuel')">
                                    Reset
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label">
                            <label class="label is-pulled-left">Ammo</label>
                        </div>
                        <div class="field-body">
                            <div class="field has-addons">
                                <span class="button" id="dev-button" @click="toggleResourceInput(resources['ammo']-100, 'ammo')">
                                    -100
                                </span>
                                <span class="button" id="dev-button" @click="toggleResourceInput(resources['ammo']-10, 'ammo')">
                                    -10
                                </span>
                                <span class="control">
                                    <input class="input" type="number" min="0" max="300" v-model="resources['ammo']" @input="toggleResourceInput($event.target.value, 'ammo')">
                                </span>
                                <span class="button" id="dev-button" @click="toggleResourceInput(resources['ammo']+10, 'ammo')">
                                    +10
                                </span>
                                <span class="button" id="dev-button" @click="toggleResourceInput(resources['ammo']+100, 'ammo')">
                                    +100
                                </span>
                                <span class="button" id="dev-button" @click="toggleResourceInput(300, 'ammo')">
                                    Max
                                </span>
                                <span class="button" id="dev-button" @click="toggleResourceInput(10, 'ammo')">
                                    Reset
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label">
                            <label class="label is-pulled-left">Steel</label>
                        </div>
                        <div class="field-body">
                            <div class="field has-addons">
                                <span class="button" id="dev-button" @click="toggleResourceInput(resources['steel']-100, 'steel')">
                                    -100
                                </span>
                                <span class="button" id="dev-button" @click="toggleResourceInput(resources['steel']-10, 'steel')">
                                    -10
                                </span>
                                <span class="control">
                                    <input class="input" type="number" min="0" max="300" v-model="resources['steel']" @input="toggleResourceInput($event.target.value, 'steel')">
                                </span>
                                <span class="button" id="dev-button" @click="toggleResourceInput(resources['steel']+10, 'steel')">
                                    +10
                                </span>
                                <span class="button" id="dev-button" @click="toggleResourceInput(resources['steel']+100, 'steel')">
                                    +100
                                </span>
                                <span class="button" id="dev-button" @click="toggleResourceInput(300, 'steel')">
                                    Max
                                </span>
                                <span class="button" id="dev-button" @click="toggleResourceInput(10, 'steel')">
                                    Reset
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label">
                            <label class="label is-pulled-left">Bauxite</label>
                        </div>
                        <div class="field-body">
                            <div class="field has-addons">
                                <span class="button" id="dev-button" @click="toggleResourceInput(resources['bauxite']-100, 'bauxite')">
                                    -100
                                </span>
                                <span class="button" id="dev-button" @click="toggleResourceInput(resources['bauxite']-10, 'bauxite')">
                                    -10
                                </span>
                                <span class="control">
                                    <input for="dev-button" class="input" type="number" min="0" max="300" v-model="resources['bauxite']" @input="toggleResourceInput($event.target.value, 'bauxite')">
                                </span>
                                <span class="button" id="dev-button" @click="toggleResourceInput(resources['bauxite']+10, 'bauxite')">
                                    +10
                                </span>
                                <span class="button" id="dev-button" @click="toggleResourceInput(resources['bauxite']+100, 'bauxite')">
                                    +100
                                </span>
                                <span class="button" id="dev-button" @click="toggleResourceInput(300, 'bauxite')">
                                    Max
                                </span>
                                <span class="button" id="dev-button" @click="toggleResourceInput(10, 'bauxite')">
                                    Reset
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tile is-parent is-6">
                <div class="tile is-child">
                    <span class="subtitle">
                        Admiral's favourite flavors
                    </span>
                    <div class="field is-horizontal">
                        <div class="field-body">
                            <div class="field has-addons">
                                <span class="control">
                                    <span :class="selectedFlavour == 'asw' ? 'button is-info' : 'button'" @click="toggleFlavour('asw')">
                                        General ASW
                                    </span>
                                </span>
                                <span class="control">
                                    <span :class="selectedFlavour == 'ha' ? 'button is-info' : 'button'" @click="toggleFlavour('ha')">
                                        10cm HA
                                    </span>
                                </span>
                                <span class="control">
                                    <span :class="selectedFlavour == '25mm' ? 'button is-info' : 'button'" @click="toggleFlavour('25mm')">
                                        25mm Triples
                                    </span>
                                </span>
                                <span class="control">
                                    <span :class="selectedFlavour == 'shells' ? 'button is-info' : 'button'" @click="toggleFlavour('shells')">
                                        T91+T3 Shells
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-body">
                            <div class="field has-addons">
                                <span class="control">
                                    <span :class="selectedFlavour == 'saiun' ? 'button is-info' : 'button'" @click="toggleFlavour('saiun')">
                                        General Planes+Saiun
                                    </span>
                                </span>
                                <span class="control">
                                    <span :class="selectedFlavour == 'lbaa' ? 'button is-info' : 'button'" @click="toggleFlavour('lbaa')">
                                        T96 LBAA
                                    </span>
                                </span>
                                <span class="control">
                                    <span :class="selectedFlavour == 'radars' ? 'button is-info' : 'button'" @click="toggleFlavour('radars')">
                                        Radars
                                    </span>
                                </span>
                                <span class="control">
                                    <span :class="selectedFlavour == 'heavy' ? 'button is-info' : 'button'" @click="toggleFlavour('heavy')">
                                        41cm+46cm
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-body">
                            <div class="field has-addons">
                                <span class="control">
                                    <span :class="selectedFlavour == 'ro43' ? 'button is-info' : 'button'" @click="toggleFlavour('ro43')">
                                        Ro.43+ASW
                                    </span>
                                </span>
                                <span class="control">
                                    <span :class="selectedFlavour == 'drum' ? 'button is-info' : 'button'" @click="toggleFlavour('drum')">
                                        Drums
                                    </span>
                                </span>
                                <span class="control">
                                    <span :class="selectedFlavour == 'engine' ? 'button is-info' : 'button'" @click="toggleFlavour('engine')">
                                        Engines
                                    </span>
                                </span>
                                <span class="control">
                                    <span :class="selectedFlavour == 'radarshell' ? 'button is-info' : 'button'" @click="toggleFlavour('radarshell')">
                                        Shells+Radar Combo
                                    </span>
                                </span>
                                <span class="control">
                                    <span :class="selectedFlavour == 'apradarbulge' ? 'button is-info' : 'button'" @click="toggleFlavour('apradarbulge')">
                                        AP+Radar+Bulge Combo
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container" v-if="selectedType != undefined">
        <p class="title">
            Category {{parseCategory(selectedType)}} - {{getPool()}} Primary
        </p>
        <p class="subtitle">
            <strong>Recipe:</strong> <img :src="getResourceIcon('fuel')" height="25" width="25" style="vertical-align:middle;">{{resources['fuel']}}<img :src="getResourceIcon('ammo')" height="25" width="25" style="vertical-align:middle;">{{resources['ammo']}}<img :src="getResourceIcon('steel')" height="25" width="25" style="vertical-align:middle;">{{resources['steel']}}<img :src="getResourceIcon('bauxite')" height="25" width="25" style="vertical-align:middle;">{{resources['bauxite']}}
        </p>
        <p class="subtitle" v-if="selectedFlavour != undefined">
            <strong>Flavour Comment: </strong>{{getFlavourComment()}}
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
            selectedPool: undefined,
            selectedShipType: '',
            selectedType: undefined,
            nationality: 'other',
            poolData: undefined,
            resources: {
                'fuel':10,
                'ammo':10,
                'steel':10,
                'bauxite':10
            },
            selectedFlavour: undefined
        }
    },
    methods:{
        calculateRate(value){
            return `${Number(value)*2}%`;
        },
        getData(){
            if(this.selectedType == undefined) return;
            this.selectedPool = this.parsePoolType(this.resources['fuel'], this.resources['ammo'], this.resources['steel'], this.resources['bauxite']);
            let data = this.devTableData[`group${this.selectedType}`][this.selectedPool];
            let pool = {};
            pool['penguin'] = 0;
            for(let id in data){
                if(id == 168){
                    if(this.resources['fuel'] >= 240 && this.resources['ammo'] >= 260 && this.resources['steel'] >= 10 && this.resources['bauxite'] >= 250){
                        pool[id] = data[id];
                    }
                    else{
                        pool['penguin'] += data[id];
                    }
                }
                else{
                    let scrap = this.equipData[id].scrap.map(x => x*10);
                    if(this.resources['fuel'] >= scrap[0] && this.resources['ammo'] >= scrap[1] && this.resources['steel'] >= scrap[2] && this.resources['bauxite'] >= scrap[3]){
                        pool[id] = data[id];
                    }
                    else{
                        pool['penguin'] += data[id];
                    }
                }
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
                    if(this.resources['fuel'] >= 240 && this.resources['ammo'] >= 260 && this.resources['bauxite'] >= 250 && (this.selectedPool == 'ammo' || this.selectedPool == 'baux') && pool.hasOwnProperty('168')){
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
        getFlavourComment(){
            let returnStr = "";
            switch(this.selectedFlavour){
                case "asw": returnStr = "General recipe for ASW."; break;
                case "ha": returnStr = "Best 10cm High-angle drop rate."; break;
                case "25mm": returnStr = "Flagship ship type is irrelevant."; break;
                case "shells": returnStr = "General recipe for both shells."; break;
                case "saiun": returnStr = "Allows you to obtain Saiun. Most popular plane recipe."; break;
                case "lbaa": returnStr = "Also possible to use Ammo primary with the same drop rate."; break;
                case "radars": returnStr = "General recipe for all radars. Also possible to use carriers instead."; break;
                case "heavy": returnStr = "General recipe for heavy guns."; break;
                case "ro43": returnStr = "Same as ASW general recipe, but now with an Italian DD."; break;
                case "drum": returnStr = "If you don't know what to develop and you want to clear the daily quests."; break;
                case "engine": returnStr = "General recipe for engines."; break;
                case "radarshell": returnStr = "Combines Radars and AP Shells."; break;
                case "apradarbulge": returnStr = "Combines Radars, AP Shells and Bulges."; break;
            }
            return returnStr;
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
        parsePoolType(fuel, ammo, steel, bauxite){
            let returnStr = "baux";
                if(ammo >= bauxite) returnStr = "ammo";
                if((fuel >= ammo && fuel >= bauxite) || (steel >= ammo && steel >= bauxite)) returnStr = "fuelsteel"; 
            return returnStr;
        },
        toggleFlavour(value){
            this.selectedFlavour = value;
            switch(value){
                case "asw":
                    this.resources = {
                        'fuel':10,
                        'ammo':30,
                        'steel':10,
                        'bauxite':31
                    }
                    this.toggleShipType("DD");
                    this.nationality = 'other';
                    break;
                case "ha":
                    this.resources = {
                        'fuel':10,
                        'ammo':10,
                        'steel':30,
                        'bauxite':10
                    }
                    this.toggleShipType("CV");
                    this.nationality = 'other';
                    break;
                case "25mm":
                    this.resources = {
                        'fuel':10,
                        'ammo':30,
                        'steel':10,
                        'bauxite':10
                    }
                    this.toggleShipType("DD");
                    this.nationality = 'other';
                    break;
                case "shells":
                    this.resources = {
                        'fuel':10,
                        'ammo':90,
                        'steel':90,
                        'bauxite':30
                    }
                    this.toggleShipType("FBB");
                    this.nationality = 'other';
                    break;
                case "saiun":
                    this.resources = {
                        'fuel':20,
                        'ammo':60,
                        'steel':10,
                        'bauxite':110
                    }
                    this.toggleShipType("CV");
                    this.nationality = 'other';
                    break;
                case "lbaa":
                    this.resources = {
                        'fuel':240,
                        'ammo':260,
                        'steel':10,
                        'bauxite':261
                    }
                    this.toggleShipType("CV");
                    this.nationality = 'other';
                    break;
                case "radars":
                    this.resources = {
                        'fuel':10,
                        'ammo':10,
                        'steel':250,
                        'bauxite':250
                    }
                    this.toggleShipType("CV");
                    this.nationality = 'other';
                    break;
                case "heavy":
                    this.resources = {
                        'fuel':10,
                        'ammo':251,
                        'steel':250,
                        'bauxite':10
                    }
                    this.toggleShipType("FBB");
                    this.nationality = 'other';
                    break;
                case "ro43":
                    this.resources = {
                        'fuel':10,
                        'ammo':30,
                        'steel':10,
                        'bauxite':31
                    }
                    this.toggleShipType("DD");
                    this.nationality = 'italian';
                    break;
                case "drum":
                    this.resources = {
                        'fuel':10,
                        'ammo':10,
                        'steel':10,
                        'bauxite':10
                    }
                    this.toggleShipType("DD");
                    this.nationality = 'other';
                    break;
                case "engine":
                    this.resources = {
                        'fuel':100,
                        'ammo':10,
                        'steel':200,
                        'bauxite':10
                    }
                    this.toggleShipType("FBB");
                    this.nationality = 'other';
                    break;
                case "radarshell":
                    this.resources = {
                        'fuel':10,
                        'ammo':30,
                        'steel':250,
                        'bauxite':250
                    }
                    this.toggleShipType("FBB");
                    this.nationality = 'other';
                    break;
                case "apradarbulge":
                    this.resources = {
                        'fuel':10,
                        'ammo':30,
                        'steel':300,
                        'bauxite':250
                    }
                    this.toggleShipType("FBB");
                    this.nationality = 'other';
                    break;
            }
            this.getData();
        },
        toggleNationality(value){
            this.selectedFlavour = undefined;
            this.nationality = value;
            this.getData();
        },
        toggleResourceInput(value, type){
            this.selectedFlavour = undefined;
            if(value < 0) value = 0;
            this.resources[type] = Number(value);
            if(this.resources[type] < 0) this.resources[type] = 0;
            if(this.resources[type] > 300) this.resources[type] = 300;
            this.getData();
        },
        toggleShipType(value){
            if(value.target) this.selectedFlavour = undefined;
            this.selectedShipType = value.target ? value.target.value : value;
            switch(this.selectedShipType){
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
    #dev-button{
        background: radial-gradient(#286666, #79beab);
        border: 1px solid grey;
        color: white;
    }
    table{
        border-style: solid;
        border-width: 2px;
        border-color:#DBDBDB;
    }
</style>
