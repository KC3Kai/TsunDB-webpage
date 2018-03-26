<template>
    <td>{{formatSpeed(speed)}}</td>
</template>

<script>
export default {
	props: ['speed'],
	methods: {
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
		}
	}
}
</script>
