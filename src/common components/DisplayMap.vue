<template>
<div>
    <br/>
    <p class="title">
        {{displayMapTitle(map)}}
    </p>
    <img :src="createMap(map)" height="1000" width="600" v-if="map != undefined">
</div>
</template>

<script>
export default {
    props: ['map'],
    data: function() {
        return {
            mapNames: require('./../data/mapNames.json')
        };
    },
    methods: {
        createMap(map) {
            return `./../../assets/maps/${map}.png`;
        },
        displayMapTitle(map){
            if(map == undefined) return;
            return `World ${map}: ${this.mapNames[map].en}`;
        }
    }
}
</script>

<style>

</style>