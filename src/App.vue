<template>
<div id="scroll">
    <navbar @mapIsSet="loadData($event)"></navbar>
    <div class="container" v-if="map == undefined">
        <p class="subtitle">
            Select a world, you shitty admiral! 
            <br />
            <br />
            <br />
            <br />
            <img src="./../assets/main/kasunuinui left.png" alt="" style="width:20%; height:20%;">
            <img src="./../assets/main/kasunuinui right.png" alt="" style="width:20%; height:20%;">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </p>
    </div>
    <div class="container" v-else>
        <h1 class="title">{{displayMap(map)}}</h1>
        <span>
            <options class="container" :map="map" @nextRouteToggled="nextRouteToggled($event)" @filterDifficulty="filterDifficulty($event)" @filterNodes="filterNodes($event)"></options>
            <pagination :page="offset + 1" @pageChanged="updatePage($event)"></pagination>
            <table-special class="container" v-if="eventselected" :samples="samples" :map="map" @fleetClicked="updateData($event)"></table-special>
            <table-normal class="container" v-else :samples="samples" :map="map" @fleetClicked="updateData($event)"></table-normal>
            <display-fleet :data="data" :map="map"></display-fleet>
            <pagination :page="offset + 1" @pageChanged="updatePage($event)"></pagination>
        </span>
    </div>
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
            nextRoute: 0,
            edge_id: undefined,
            difficulty: undefined,
            cleared: 0,
            eventselected: false,
            samples: [],
            map: undefined,
            data: undefined,
            eventMapId: require('./data/eventMaps.json')
        };
    },
    methods: {
        getJSON () {
            let data = axios.get(`http://kckai.cybersnets.com/api/routes/data/${this.map}`, {
                params: {
                    offset: this.offset*this.limit,
                    limit: this.limit,
                    next_route: this.nextRoute,
                    difficulty: this.difficulty,
                    edge_id: this.edge_id
                },
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
        },
        normalMapSelected () {
            this.eventselected = false;
        },
        eventMapSelected () {
            this.eventselected = true;
        },
        loadData([map, mapType]){
            this.eventselected = mapType;
            this.map = map;
            this.getJSON();
        },
        nextRouteToggled(nextRoute){
            this.nextRoute = nextRoute;
            this.getJSON();
        },
        filterDifficulty(id){
            this.difficulty = id;
            this.getJSON();
        },
        filterNodes(nodes){
            this.edge_id = nodes;
            this.getJSON();
        },
        updatePage(offset){
            this.offset = offset;
            this.getJSON();
        },
        updateData(data){
            console.log(data);
            this.data = data;
        },
        displayMap(map){
            let returnStr = "";
            if(this.eventMapId.hasOwnProperty(String(map.slice(0,2)))){
                returnStr += `${this.eventMapId[String(map.slice(0,2))].world} E-${map.slice(-1)}`;
            }
            else{
                returnStr += `World ${map}`;
            }
            return returnStr;
        }
    }
}
</script>

<style lang="css">
    @import "../node_modules/bulma/css/bulma.css";
    #scroll{
        overflow-x: auto;
        overflow-y: hidden;
    }
    #scroll > .container{
        margin-top:2%;
        margin-left:5%;
    }
</style>
