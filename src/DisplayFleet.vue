<template>
    <div class="container" v-if="data != undefined">
        <h2 class="subtitle">Route taken in {{map}} {{formatDiff(data.difficulty)}}: {{formatRoute(data.edgeID)}}</h2>
        <h2>Still working on the node and event types, feel free to ignore this.</h2>
        <h2>Node: {{data.eventId}} ({{checkNodeType(data.eventId)}}??)</h2>
        <h2>Event: {{data.eventKind}} ({{checkEventType(data.eventKind)}}??)</h2>
        <table class="table">
            <tr>
                <th>Ship</th>
                <th>Type</th>
                <th>Speed</th>
                <th>#1</th>
                <th>#2</th>
                <th>#3</th>
                <th>#4</th>
                <th>#5</th>
            </tr>
            <tr v-for="ship in data.fleet1" :key="ship">
                <td>{{ship.name}}</td>
                <td>{{fleetComp(ship.type)}}</td>
                <td>{{formatSpeed(ship.speed)}}</td>
                <td v-for="value in ship.equip" :key="value">
                    <img :src="shipEquip(value)" style="width:40px; height:40px;" />
                </td>
                <td>
                    <img :src="shipEquip(ship.exslot)" style="width:40px; height:40px;" />
                </td>
            </tr>
            <template v-if="'fleet2' in data">
                <tr>
                    <th>Ship</th>
                    <th>Type</th>
                    <th>Speed</th>
                    <th>#1</th>
                    <th>#2</th>
                    <th>#3</th>
                    <th>#4</th>
                    <th>#5</th>
                </tr>
                <tr v-for="ship in data.fleet2" :key="ship">
                    <td>{{ship.name}}</td>
                    <td>{{fleetComp(ship.type)}}</td>
                    <td>{{formatSpeed(ship.speed)}}</td>
                    <td v-for="value in ship.equip" :key="value">
                        <img :src="shipEquip(value)" style="width:40px; height:40px;" />
                    </td>
                    <td>
                        <img :src="shipEquip(ship.exslot)" style="width:40px; height:40px;" />
                    </td>
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
            shiptype: require('./data/shiptype.json'),
            equip: require('./data/equip.json'),
            equiplink: require('./data/equiplink.json')
        }
    },
	methods: {
        shipEquip: function(id) {
            if(id != -1){
                return this.equiplink[String(this.equip[String(id)].icon)];
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
                    return " on 丙";
                    break;
                case 2:
                    return " on 乙";
                    break;
                case 3:
                    return " on 甲";
                    break;
            }
        }
	}
}
</script>

<style>

</style>
