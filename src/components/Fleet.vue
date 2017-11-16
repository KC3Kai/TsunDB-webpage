<template>
    <td>{{fleetComp(fleet)}}</td>
</template>

<script>
    export default{
    	props: ['fleet'],
		methods: {
			fleetComp: function(fleet) {
				let returnStr = "";
				for(let i = 0; i < fleet.length; i++){
					switch(fleet[i].type){
						case 1:
							returnStr += "DE-";
							break;
						case 2:
							returnStr += "DD-";
							break;
						case 3:
							returnStr += "CL-";
							break;
						case 4:
							returnStr += "CLT-";
							break;
						case 5:
							returnStr += "CA-";
							break;
						case 6:
							returnStr += "CAV-";
							break;
						case 7:
							returnStr += "CVL-";
							break;
						case 8:
							returnStr += "FBB-";
							break;
						case 9:
							returnStr += "BB-";
							break;
						case 10:
							returnStr += "BBV-";
							break;
						case 11:
							returnStr += "CV-";
							break;
						case 12:
							returnStr += "B-";
							break;
						case 13:
							returnStr += "SS-";
							break;
						case 14:
							returnStr += "SSV-";
							break;
						case 15:
							returnStr += "AP-";
							break;
						case 16:
							returnStr += "AV-";
							break;
						case 17:
							returnStr += "LHA-";
							break;
						case 18:
							returnStr += "CVB-";
							break;
						case 19:
							returnStr += "AR-";
							break;
						case 20:
							returnStr += "AS-";
							break;
						case 21:
							returnStr += "CT-";
							break;
						case 22:
							returnStr += "AO-";
							break;
					}
				}
				if(returnStr != ""){
					returnStr = returnStr.slice(0,-1);
				}
				return returnStr;
			}
		}
    }
</script>