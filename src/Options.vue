<template>
<div class="container">
    <label class="checkbox">
        <input type="checkbox" :checked="nextRoute" @click="toggleNextRoute">
            Show samples with incomplete routing
    </label>
    <label>
        <input class="input" type="text" placeholder="Route (eg. 1-A-B-C)">
    </label>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            nextRoute: 0,
            edges: require('./data/edges.json')
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
