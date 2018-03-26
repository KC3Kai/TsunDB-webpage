<template>
    <td>{{displayClear(clear)}}</td>
</template>

<script>
export default{
	props: ['clear'],
	methods: {
		displayClear: function(clear){
			return (clear == 1) ? "TRUE" : "FALSE";
		}
	}
}
</script>