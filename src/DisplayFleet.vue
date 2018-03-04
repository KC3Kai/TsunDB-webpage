<template>
    <div class="container" v-if="data != undefined">
        <h2 class="subtitle">Route taken in {{map}} {{formatDiff(data.difficulty)}}: {{formatRoute(data.edgeID)}}</h2>
        <h2 style="vertical-align:middle;">
            <strong>Node {{formatRoute(data.edgeID).slice(-1)}}:</strong>
            <img :src="checkEvent(data.eventId, data.eventKind)" style="width:30px; height:30px; vertical-align:middle;" />
            {{displayEvent(data.eventId, data.eventKind)}}
        </h2>
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
        checkEvent(event, kind){
            let node = "";
            switch(event){
                case 0:
                    node = "start";
                    break;
                case 2: 
                    node = "resource";
                    break;
                case 3:
                    node = "storm";
                    break;
                case 4: 
                    switch(kind){
                        case 1: 
                            node = "battle";
                            break;
                        case 2: 
                            node = "night";
                            break;
                        case 4: 
                            node = "aerial";
                            break;
                        case 5:
                            node = "battle";
                            break;
                        case 6: 
                            node = "raid";
                            break;
                        case 7:
                            node = "nightday";
                            break;
                    }
                    break;
                case 5: 
                    node = "boss";
                    break;
                case 6: 
                    node = "empty";
                    break;
                case 7: 
                    node = "scout";
                    break;
                case 8: 
                    node = "anchor";
                    break;
                case 9: 
                    node = "flag";
                    break;
            }
            return `./../assets/nodes/${node}.png`;
        },
        displayEvent(event, kind){
            let node = "";
            switch(event){
                case 0:
                    node = "Start";
                    break;
                case 2: 
                    node = "Resource";
                    break;
                case 3:
                    node = "Maelstrom";
                    break;
                case 4: 
                    switch(kind){
                        case 1: 
                            node = "Normal Battle";
                            break;
                        case 2: 
                            node = "Night Battle";
                            break;
                        case 4: 
                            node = "Aerial Battle";
                            break;
                        case 5:
                            node = "Combined Fleet Battle";
                            break;
                        case 6: 
                            node = "Air Raid";
                            break;
                        case 7:
                            node = "Night to Day Battle";
                            break;
                    }
                    break;
                case 5: 
                    switch(kind){
                        case 1: 
                            node = "Boss (Normal)";
                            break;
                        case 5: 
                            node = "Boss (Combined Fleet)";
                            break;
                    }
                    break;
                case 6: 
                    switch(kind){
                        case 2: 
                            node = "Route Selection";
                            break;
                        default: 
                            node = "Must be my imagination...";
                            break;
                    }
                    break;
                case 7: 
                    node = "Resource Scout";
                    break;
                case 8: 
                    node = "Anchor";
                    break;
                case 9: 
                    node = "Transport offload point";
                    break;
            }
            return node;
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
