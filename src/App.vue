<template>
<div>
    <navbar @mapIsSet="loadData($event)"></navbar>
    <options class="container" @nextRouteToggled="nextRouteToggled($event)"></options>
    <pagination :offset="offset" @pageChanged="updatePage($event)"></pagination>
    <table-special v-if="eventselected" :samples="samples" :map="map"></table-special>
    <table-normal v-else :samples="samples" :map="map"></table-normal>
    <pagination :offset="offset" @pageChanged="updatePage($event)"></pagination>
</div>
</template>

<script>
import axios from 'axios';

export default {
    data: function() {
        return {
            offset: 1,
            limit: 50,
            nextRoute: 0,
            eventselected: false,
            samples: [],
            map: undefined
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
        }
    }
}
</script>

<style lang="css">
    @import "../node_modules/bulma/css/bulma.css";
</style>
