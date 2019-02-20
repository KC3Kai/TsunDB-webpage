<template>
<div class="container">
NoKappa
</div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['ship'],
    data: function(){
        return{
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
            this.getData(this.$route.query.ship);
        })
    },
    methods:{
        async getData(ship){
            console.log(ship);
            let container = {
                ship: ship
            };
            await axios.post(`https://tsundb.kc3.moe/api/drops`, {
                header:{
                    'Content-Type': 'application/json',
                },
                body: container
            })
            .then(response => response.data)
            .then(data => this.data = data)
            .catch(err => console.error(err));
            console.log(this.data);
            return await this.data;
        },
    }
}
</script>

<style scoped>

</style>
