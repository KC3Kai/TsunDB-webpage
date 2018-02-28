<template>
    <table class="table">
		<tr>
			<th></th>
			<th>Route</th>
			<th>Cleared?</th>
			<th>HQ</th>
			<th>Main Fleet</th>
			<th>Speed</th>
			<th>LoS<br>Cn1</th>
			<th>LoS<br>Cn2</th>
			<th>LoS<br>Cn3</th>
			<th>LoS<br>Cn4</th>
		</tr>
		<tr v-for="(sample, id) in samples" :key="id">
			<a class="button is-small" @click="displayFleet(sample)">Info</a>
			<routing-col :route="sample.edgeID" :map="map"></routing-col>
			<clear-col :clear="sample.cleared"></clear-col>
			<hq-col :lvl="sample.hqLvl"></hq-col>
			<fleet-col :fleet="sample.fleet1"></fleet-col>
			<speed-col :speed="sample.fleetSpeed"></speed-col>
			<los-col v-for="los in sample.los" :los="los.toFixed(2)" :key="los"></los-col>
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
