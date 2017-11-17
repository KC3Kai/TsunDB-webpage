<template>
    <div class="container" v-if="data != undefined">
        <h2 class="subtitle">Route taken in {{map}}: {{formatRoute(data.edgeID)}}</h2>
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
                <td v-for="value in ship.equip" :key="value">{{value}}</td>
                <td>{{ship.exslot}}</td>
            </tr>
            <span v-if="'fleet2' in data">
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
                    <td v-for="value in ship.equip" :key="value">{{value}}</td>
                    <td>{{ship.exslot}}</td>
                </tr>
            </span>
        </table>
    </div>
</template>

<script>
export default {
    props:['map','data','ship'],
    data: function(){
        return {
            edges: require('./data/edges.json')
        }
    },
	methods: {
		fleetComp: function(type) {
			let returnStr = "";
            switch(type){
                case 1:
                    returnStr = "DE";
                    break;
                case 2:
                    returnStr = "DD";
                    break;
                case 3:
                    returnStr = "CL";
                    break;
                case 4:
                    returnStr = "CLT";
                    break;
                case 5:
                    returnStr = "CA";
                    break;
                case 6:
                    returnStr = "CAV";
                    break;
                case 7:
                    returnStr = "CVL";
                    break;
                case 8:
                    returnStr = "FBB";
                    break;
                case 9:
                    returnStr = "BB";
                    break;
                case 10:
                    returnStr = "BBV";
                    break;
                case 11:
                    returnStr = "CV";
                    break;
                case 12:
                    returnStr = "B";
                    break;
                case 13:
                    returnStr = "SS";
                    break;
                case 14:
                    returnStr = "SSV";
                    break;
                case 15:
                    returnStr = "AP";
                    break;
                case 16:
                    returnStr = "AV";
                    break;
                case 17:
                    returnStr = "LHA";
                    break;
                case 18:
                    returnStr = "CVB";
                    break;
                case 19:
                    returnStr = "AR";
                    break;
                case 20:
                    returnStr = "AS";
                    break;
                case 21:
                    returnStr = "CT";
                    break;
                case 22:
                    returnStr = "AO";
                    break;
			}
			return returnStr;
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
        }
	}
}
</script>

<style>

</style>
