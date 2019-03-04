<template>
<div class="container">
    <div class="content" v-if="data != undefined">
        Coming soon!
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['ship'],
    data: function(){
        return{
            configData: require('./../../data/config.json'),
            edgesData: require('./../../data/edges.json'),
            eventMapsData: require('./../../data/eventMaps.json'),
            mapNamesData: require('./../../data/mapNames.json'),
            nodesData: require('./../../data/nodes.json'),
            shipData: require('./../../data/ship.json'),
            shipTypeData: require('./../../data/shiptype.json'),
            data: undefined
        }
    },
    mounted: function() {
        this.$nextTick(function () {
            this.getData(this.ship);
        })
    },
    methods:{
        formatData(data){
            return data;
        },
        async getData(ship){
            let container = {
                ship: parseInt(ship)
            };
            await axios.post(`${this.configData.host}/droplocs`, container)
            .then(response => response.data)
            .then(data => this.data = this.formatData(data))
            .catch(err => console.error(err));
            console.log(this.data);
            return await this.data;
        },
    }
}
</script>

<style scoped>

</style>
