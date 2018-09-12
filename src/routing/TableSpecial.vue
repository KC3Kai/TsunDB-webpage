<template>
    <table>
		<tr>
			<th></th>
			<th>Route</th>
			<th>Cleared?</th>
			<th>HQ</th>
			<th>Fleet Type</th>
			<th>Main Fleet</th>
			<th>Escort Fleet</th>
			<th>Speed</th>
			<th>LoS<br>Cn1</th>
			<th>LoS<br>Cn2</th>
			<th>LoS<br>Cn3</th>
			<th>LoS<br>Cn4</th>
			<th>Difficulty</th>
			<th>Type</th>
			<th>Gauge</th>
			<th>Phase</th>
			<th>Debuff</th>
		</tr>
		<tr v-for="(sample, id) in samples" :key="id">
			<a :class="[clicked == calculateNumber(offset, id) ? 'button is-small is-info' : 'button is-small']" :value="calculateNumber(offset, id)" @click="displayFleet(sample, calculateNumber(offset, id))">Info</a>
			<routing-col :route="sample.edgeid" :map="map"></routing-col>
			<clear-col :clear="sample.cleared"></clear-col>
			<hq-col :lvl="sample.hqlvl"></hq-col>
			<fleet-type-col :type="sample.fleettype"></fleet-type-col>
			<fleet-col :fleet="sample.fleet1"></fleet-col>
			<fleet-col :fleet="sample.fleet2"></fleet-col>
			<speed-col :speed="sample.fleetspeed"></speed-col>
			<los-col v-for="los in sample.los" :los="los.toFixed(2)" :key="los"></los-col>
			<difficulty-col :diff="sample.difficulty"></difficulty-col>
			<gaugetype-col :type="sample.gaugetype"></gaugetype-col>
			<gauge-col :current="sample.currentmaphp" :max="sample.maxmaphp"></gauge-col>
			<phase-col :phase="sample.gaugenum"></phase-col>
			<debuff-col :count="sample.debuffsound"></debuff-col>
		</tr>
	</table>
</template>

<script>
    export default {
		props:['samples','map','offset'],
		data: function(){
			return{
                clicked: undefined
			}
		},
		methods: {
			displayFleet(data,id){
				console.log(data);
                this.clicked = id;
				this.$emit("fleetClicked", data);
            },
            calculateNumber(offset, id){
                return (offset*10)+id;
            }
		}
    }
</script>

<style>
</style>
