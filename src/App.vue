<template>
<div>
    <navbar @mapIsSet="loadData($event)"></navbar>
    <table-special v-if="eventselected" :samples="samples" :map="map"></table-special>
    <table-normal v-else :samples="samples" :map="map"></table-normal>
</div>
</template>

<script>
import axios from 'axios';

export default {
    data: function() {
        return {
            eventselected: false,
            samples: [],
            map: undefined
        };
    },
    methods: {
        getJSON () {
            let data = axios.get('http://kckai.cybersnets.com/api/routes/data/' + this.map)
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
        }
    }
}
</script>

<style lang="css">
    @import "../node_modules/bulma/css/bulma.css";
</style>
