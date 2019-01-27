<template>
    <table class="table" v-if="fleet.length > 0">
        <tr>
            <th>Lvl</th>
            <th>Ship</th>
            <th v-if="checkEventMap(map) == true">Tag</th>
            <th>Type</th>
            <th>Speed</th>
            <th>#1</th>
            <th>#2</th>
            <th>#3</th>
            <th>#4</th>
            <th>#5</th>
            <th>#6</th>
        </tr>
        <tr v-for="(ship, id) in fleet" :key="id">
                <td>
                    {{showLevel(ship)}}
                </td>
                <td>
                    <img :src="shipCard(ship)" :alt="ship.name" :title="shipCardName(ship)" style="width:160px; height:40px;" />
                </td>
                <td v-if="checkEventMap(map) == true">
                    <img v-if="ship.shiplock != 0" :src="tagIcon(ship)" :title="tagName(ship)" style="height:40px;" />
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
    </table>
</template>

<script>
export default {
    props:['map', 'fleet'],
    data: function(){
        return {
            ships: require('./../data/ship.json'),
            shiptype: require('./../data/shiptype.json'),
            equip: require('./../data/equip.json'),
            eventMaps: require('./../data/eventMaps.json')
        }
    },
	methods: {
        checkEventMap(map) {
            return (this.eventMaps.hasOwnProperty(String(map.slice(0,2))));
        },
        tagIcon(ship){
            if(this.eventMaps.hasOwnProperty(String(this.map.slice(0,2))) && ship.shiplock != 0){
                return `./assets/tags/${String(this.map.slice(0,2))}/${String(ship.shiplock)}.png`;
            }
        },
        tagName(ship){
            if(this.eventMaps.hasOwnProperty(String(this.map.slice(0,2))) && ship.shiplock != 0){
                return this.eventMaps[String(this.map.slice(0,2))].tags[String(ship.shiplock)];
            }
        },
        showLevel(ship){
            if(ship.level != undefined){
                return ship.level;
            }
        },
        shipCard(ship) {
            if(!this.ships.hasOwnProperty(String(ship.id))){
                return './assets/shipcards/Catbomb.png';
            }
            else {
                return `./assets/shipcards/${ship.id}.png`;
            }
        },
        shipCardName(ship){
            if(this.ships.hasOwnProperty(ship.id)){
                return `${this.ships[ship.id].jp} (${this.ships[ship.id].en})`;
            }
            else {
                return ship.name;
            }
        },
        shipEquipIcon(id) {
            if(this.equip.hasOwnProperty(String(id))){
                return `./assets/icons/equip/${this.equip[String(id)].icon}.png`;
            }
            else if(id == -1){
                return `./assets/icons/equip/-1.png`;
            }
        },
        shipEquipName(id) {
            if(this.equip.hasOwnProperty(String(id))){
                return this.equip[String(id)].en;
            }
        },
		fleetComp(type) {
            return this.shiptype[String(type)];
        },
        formatSpeed(speed){
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
        }
	}
}
</script>

<style>

</style>
