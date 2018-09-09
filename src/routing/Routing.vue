<template>
<div class="container">
    <p class="title">
        Routing
    </p>
    <p class="subtitle">
        <br />
        While you are free to copy other people's comps, do not make the mistake of assuming that the comp you're copying is guaranteed to be good. <br/>
        If you actually want to understand the mechanics, check out the <a href="http://kancolle.wikia.com" rel="noopener noreferrer" target="_blank">wikia</a> instead or head over to the <a href="https://www.reddit.com/r/kancolle/" rel="noopener noreferrer" target="_blank">subreddit</a>or their<a href="https://discord.gg/RtSadWM" rel="noopener noreferrer" target="_blank"> discord server</a>.
        <br />
        <br />
        Click on Info to get more information about the fleet setup (scroll down if it's not visible).
    </p>
    <mapselection @mapIsSet="loadMap($event)"></mapselection>
    <div id="parent">
        <routingoptions id="left" :map="map" @filterChanged="filterChanged($event)"></routingoptions>
        <displaymap id="right" :map="map"></displaymap>
    </div>
    <pagination v-if="map != undefined" @pageChanged="changePage($event)"></pagination>
    <template v-if="map != undefined">
        <table-special :samples="samples" :map="map" :offset="parseInt(offset)" v-if="checkEventMap(map)" @fleetClicked="data=$event"></table-special>
        <table-normal :samples="samples" :map="map" :offset="parseInt(offset)" v-else @fleetClicked="data=$event"></table-normal>
    </template>
    <display-fleet-title :data="data" :map="map"></display-fleet-title>
    <display-fleet v-if="data != undefined" :fleet="data.fleet1" :map="map"></display-fleet>
    <display-fleet v-if="data != undefined" :fleet="data.fleet2" :map="map"></display-fleet>
</div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';

export default {
    data: function() {
        return {
            offset: 0,
            limit: 10,
            map: undefined,
            nextRoute: 0,
            edge_id: undefined,
            difficulty: undefined,
            cleared: 0,
            eventselected: false,
            samples: [],
            map: undefined,
            data: undefined,
            eventMaps: require('./../data/eventMaps.json')
        };
    },
    methods: {
        checkEventMap(map){
            return (this.eventMaps.hasOwnProperty(String(map.slice(0,2))));
        },
        loadMap(map) {
            if(this.map == map) return;
            this.map = map;
            this.data = undefined;
            this.getJSON();
        },
        changePage(offset){
            if(offset == this.offset) return;
            this.offset = offset;
            this.getJSON();
        },
        filterChanged([type, value]){
            switch(type){
                case "cleared": 
                    this.cleared = value;
                    break;
                case "deadend": 
                    this.nextRoute = value;
                    break;
                case "difficulty":
                    this.difficulty = value;
                    break;
                case "nodes": 
                    this.edge_id = value;
                    break;
            }
            this.getJSON();
        },
        getJSON () {
            let container = {
                offset: this.offset*this.limit,
                limit: this.limit,
                next_route: this.nextRoute,
            }
            if(this.difficulty != undefined){
                container.difficulty = this.difficulty;
            }
            if(this.edge_id != undefined){
                container.edge_id = this.edge_id;
            }
            if(this.cleared){
                container.cleared = this.cleared;
            }
            let type = this.checkEventMap(this.map) ? "eventrouting" : "routing";
            let data = axios.get(`https://tsundb.kc3.moe/api/${type}/${this.map}`, {
                params: container,
                paramsSerializer: function(params){
                    return qs.stringify(params, {
                        arrayFormat: 'brackets',
                        encode: false
                    })
                }
            })
            .then(response => {
                return response;
            })
            .then(data => {
                this.samples = data.data;
            })
            .catch(err => console.error(err));
        }
    }
}
</script>

<style>

</style>
