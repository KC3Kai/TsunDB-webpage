<template>
<div>
    <label class="checkbox">
    <input type="checkbox" :checked="nextRoute" @click="toggleNextRoute">
        Show samples with incomplete routing
    </label>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            nextRoute: 0
        };
    },
    methods:{
        toggleNextRoute(){
            this.nextRoute = this.nextRoute ? 0 : 1;
            this.$emit("nextRouteToggled", this.nextRoute);
        }
    }
}
</script>


<style>

</style>
