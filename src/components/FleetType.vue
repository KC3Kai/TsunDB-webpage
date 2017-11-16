<template>
    <td>{{formatFleetType(type)}}</td>
</template>

<script>
    export default{
    	props: ['type'],
		methods: {
			formatFleetType: function(type){
				returnStr = "";
				switch(type){
					case 0:
						returnStr = "Single";
						break;
					case 1:
						returnStr = "CTF";
						break;
					case 2:
						returnStr = "STF";
						break;
					case 3:
						returnStr = "TCF";
						break;
				}
				return returnStr;
			}
		}
    }
</script>