<template>
    <div class="container" v-if="data != undefined">
        <h2 class="subtitle">Route taken in {{map}} {{formatDiff(data.difficulty)}}: {{formatRoute(data.edgeID)}}</h2>
        <h2>Still working on the node and event types, feel free to ignore this.</h2>
        <h2>Node: {{data.eventId}} ({{checkNodeType(data.eventId)}}??)</h2>
        <h2>Event: {{data.eventKind}} ({{checkEventType(data.eventKind)}}??)</h2>
        <table class="table">
            <tr>
                <th>Lvl</th>
                <th>Ship</th>
                <th>Tag</th>
                <th>Type</th>
                <th>Speed</th>
                <th>#1</th>
                <th>#2</th>
                <th>#3</th>
                <th>#4</th>
                <th>#5</th>
                <th>#6</th>
            </tr>
            <tr v-for="(ship, id) in data.fleet1" :key="id">
                    <td>
                        {{showLevel(ship)}}
                    </td>
                    <td>
                        <img :src="shipCard(ship)" :alt="ship.name" :title="shipCardName(ship)" style="width:160px; height:40px;" />
                    </td>
                    <td>
                        <img :src="tagIcon(ship)" :title="tagName(ship)" style="width:20px; height:40px;" />
                    </td>
                <template v-if="ship != -1">
                    <td>{{fleetComp(ship.type)}}</td>
                    <td>{{formatSpeed(ship.speed)}}</td>
                    <td v-for="(value, id) in ship.equip" :key="id">
                        <img :src="shipEquipIcon(value)" :title="shipEquipName(value)" style="width:40px; height:40px;" />
                    </td>
                    <td>
                        <img :src="shipEquipIcon(ship.exslot)" :title="shipEquipName(ship.exslot)" style="width:40px; height:40px;" />
                    </td>
                </template>
            </tr>
            <template v-if="'fleet2' in data">
                <tr>
                    <th>Lvl</th>
                    <th>Ship</th>
                    <th>Tag</th>
                    <th>Type</th>
                    <th>Speed</th>
                    <th>#1</th>
                    <th>#2</th>
                    <th>#3</th>
                    <th>#4</th>
                    <th>#5</th>
                    <th>#6</th>
                </tr>
                <tr v-for="(ship, id) in data.fleet2" :key="id">
                    <td>
                        {{showLevel(ship)}}
                    </td>
                    <td>
                        <img :src="shipCard(ship)" :alt="ship.name" :title="shipCardName(ship)" style="width:160px; height:40px;" />
                    </td>
                    <td>
                        <img :src="tagIcon(ship)" :title="tagName(ship)" style="width:20px; height:40px;" />
                    </td>
                    <template v-if="ship != -1">
                        <td>{{fleetComp(ship.type)}}</td>
                        <td>{{formatSpeed(ship.speed)}}</td>
                        <td v-for="(value, id) in ship.equip" :key="id">
                            <img :src="shipEquipIcon(value)" :title="shipEquipName(value)" style="width:40px; height:40px;" />
                        </td>
                        <td>
                            <img :src="shipEquipIcon(ship.exslot)" :title="shipEquipName(ship.exslot)" style="width:40px; height:40px;" />
                        </td>
                    </template>
                </tr>
            </template>
        </table>
    </div>
</template>

<script>
export default {
    props:['map','data','ship'],
    data: function(){
        return {
            edges: require('./data/edges.json'),
            ships: require('./data/ship.json'),
            shiptype: require('./data/shiptype.json'),
            shipnames: require('./data/shipJPtoEN.json'),
            equip: require('./data/equip.json'),
            eventMaps: require('./data/eventMaps.json')
        }
    },
	methods: {
        tagIcon: function(ship){
            if(ship.shiplock == undefined){
                return `./assets/main/unknown.png`;
            }
            else if(this.eventMaps.hasOwnProperty(String(this.map.slice(0,2))) && ship.shiplock != 0){
                return `./assets/tags/${String(this.map.slice(0,2))}/${String(ship.shiplock)}.png`;
            }
        },
        tagName: function(ship){
            if(this.eventMaps.hasOwnProperty(String(this.map.slice(0,2))) && ship.shiplock != 0){
                return this.eventMaps[String(this.map.slice(0,2))].tags[String(ship.shiplock)];
            }
        },
        showLevel: function(ship){
            if(ship.level != undefined){
                return ship.level;
            }
        },
        shipCard: function(ship) {
            if(ship == -1 || !this.ships.hasOwnProperty(String(ship.name))){
                return './assets/shipcards/Catbomb.png';
            }
            else {
                return `./assets/shipcards/${this.ships[String(ship.name)]}.png`;
            }
        },
        shipCardName: function(ship){
            if(ship == -1){
                return '退避/撃沈 (Retreated/Sunk)';
            }
            else{
                if(ship.name == this.shipnames[ship.name]){
                    return ship.name;
                }
                else {
                    return `${ship.name} (${this.shipnames[ship.name]})`;
                }
            }
        },
        shipEquipIcon: function(id) {
            if(this.equip.hasOwnProperty(String(id))){
                return `./assets/icons/${this.equip[String(id)].icon}.png`;
            }
            else if(id != -1){
                return `./assets/main/unknown.png`;
            }
        },
        shipEquipName: function(id) {
            if(this.equip.hasOwnProperty(String(id))){
                return this.equip[String(id)].en;
            }
        },
		fleetComp: function(type) {
            return this.shiptype[String(type)];
        },
        formatSpeed: function(speed){
			let returnStr = "";
			switch(speed){
				case 5:
					returnStr = "Slow";
					break;
				case 10:
					returnStr = "Fast";
					break;
				case 15:
					returnStr = "Fast+";
					break;
				case 20:
					returnStr = "Fastest";
					break;
			}
			return returnStr;
        },
        formatRoute(route){
            let returnStr = "";
            if(this.map in this.edges){
                returnStr = String(this.edges[this.map][route[0]].join("-") + "-");
                for(let i = 1; i < route.length; i++){
                    returnStr += String(this.edges[this.map][route[i]][1]+"-");
                }
                returnStr = returnStr.slice(0,-1);
            }
            else {
                returnStr = String(route.join("-"));
            }
            return returnStr;
        },
        checkNodeType(node){
            let returnStr = "";
            switch(node){
                case 0:
                    returnStr = "Empty";
                    break;
                case 1:
                    returnStr = "Day Battle";
                    break;
                case 2:
                    returnStr = "Night Battle";
                    break;
                case 3: 
                    returnStr = "Night Battle";
                    break;
                case 4: 
                    returnStr = "Air Battle";
                    break;
                case 5:
                    returnStr = "Boss Node";
                    break;
                case 6:
                    returnStr = "Long Range Air Battle";
                    break;
            }
            return returnStr;
        },
        checkEventType(event){
            let returnStr = "";
            switch(event){
                case 0:
                    returnStr = "Start";
                    break;
                case 1:
                    returnStr = "Empty";
                    break;
                case 2:
                    returnStr = "Resource";
                    break;
                case 3:
                    returnStr = "Storm";
                    break;
                case 4:
                    returnStr = "Battle";
                    break;
                case 5:
                    returnStr = "Boss";
                    break;
                case 6:
                    returnStr = "Empty";
                    break;
                case 7: 
                    returnStr = "Air";
                    break;
                case 8:
                    returnStr = "Escort";
                    break;
                case 9:
                    returnStr = "Escort";
                    break;
                case 10:
                    returnStr = "Air Raid";
                    break;
            }
            return returnStr;
        },
        formatDiff: function(diff){
            switch(diff){
                case 1:
                    return " on 丁";
                    break;
                case 2:
                    return " on 丙";
                    break;
                case 3:
                    return " on 乙";
                    break;
                case 4:
                    return " on 甲";
                    break;
            }
        }
	}
}
</script>

<style>

</style>
