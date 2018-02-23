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
			<th>Debuff</th>
		</tr>
		<tr v-for="sample in samples" :key="sample">
			<a class="button is-small" @click="displayFleet(sample)">Info</a>
			<routing-col :route="sample.edgeID" :map="map"></routing-col>
			<clear-col :clear="sample.cleared"></clear-col>
			<hq-col :lvl="sample.hqLvl"></hq-col>
			<fleet-type-col :type="sample.fleetType"></fleet-type-col>
			<fleet-col :fleet="sample.fleet1"></fleet-col>
			<fleet-col :fleet="sample.fleet2"></fleet-col>
			<speed-col :speed="sample.fleetSpeed"></speed-col>
			<los-col v-for="los in sample.los" :los="los.toFixed(2)" :key="los"></los-col>
			<difficulty-col :diff="sample.difficulty"></difficulty-col>
			<gaugetype-col :type="sample.gaugeType"></gaugetype-col>
			<gauge-col :current="sample.currentMapHP" :max="sample.maxMapHP"></gauge-col>
			<debuff-col :count="sample.debuffSound"></debuff-col>
		</tr>
	</table>
</template>

<script>
    export default {
		props:['samples','map'],
		methods: {
			displayFleet(data){
            	this.$emit("fleetClicked", data);
     	   }
		}
    }
</script>

<style>
</style>
