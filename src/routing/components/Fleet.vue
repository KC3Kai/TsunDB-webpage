<template>
	<td>{{fleetComp(fleet)}}</td>
</template>

<script>
export default {
	props: ['fleet'],
    data: function(){
        return {
			shiptype: require('./../../data/shiptype.json')
		}
    },
	methods: {
		fleetComp: function(fleet) {
			let returnStr = "";
			for(let i = 0; i < fleet.length; i++){
				if(fleet[i] == -1){
					returnStr += '??';
				}
				else{
					returnStr += this.shiptype[String(fleet[i].type)];
				}
				returnStr += "-";
			}
			if(returnStr != ""){
				returnStr = returnStr.slice(0,-1);
			}
			return returnStr;
		}
	}
}
</script>

<style>

</style>