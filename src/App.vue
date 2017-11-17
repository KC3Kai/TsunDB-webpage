<template>
<div>
    <navbar @mapIsSet="loadData($event)"></navbar>
    <div class="container" v-if="map == undefined">
        <h2 class="subtitle">Select a world first, you shitty admiral!</h2>
    </div>
    <div v-else>
        <h1 class="title">Map {{map}}</h1>
        <options class="container" @nextRouteToggled="nextRouteToggled($event)"></options>
        <pagination :offset="offset" @pageChanged="updatePage($event)"></pagination>
        <table-special v-if="eventselected" :samples="samples" :map="map" @fleetClicked="updateData($event)"></table-special>
        <table-normal v-else :samples="samples" :map="map" @fleetClicked="updateData($event)"></table-normal>
        <display-fleet :data="data" :map="map"></display-fleet>
        <pagination :offset="offset" @pageChanged="updatePage($event)"></pagination>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    data: function() {
        return {
            offset: 1,
            limit: 10,
            nextRoute: 0,
            eventselected: false,
            samples: [],
            map: undefined,
            data: undefined
        };
    },
    methods: {
        getJSON () {
            let data = axios.get(`http://kckai.cybersnets.com/api/routes/data/${this.map}?offset=${this.offset}&limit=${this.limit}&next_route=${this.nextRoute}`)
            .then(response => {
                return response;
            })
            .then(data => {
                this.samples = data.data;
            })
            .catch(err => console.error(err));
        },
        normalMapSelected () {
            this.eventselected = false;
        },
        eventMapSelected () {
            this.eventselected = true;
        },
        loadData(map){
            this.map = map;
            this.getJSON();
        },
        nextRouteToggled(nextRoute){
            this.nextRoute = nextRoute;
            this.getJSON();
        },
        updatePage(offset){
            this.offset = offset;
            this.getJSON();
        },
        updateData(data){
            console.log(data);
            this.data = data;
        }
    }
}
</script>

<style lang="css">
    @import "../node_modules/bulma/css/bulma.css";
</style>
