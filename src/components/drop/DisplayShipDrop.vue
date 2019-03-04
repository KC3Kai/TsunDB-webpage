<template>
<div class="container">
    <div class="content">
        <img :src="getShipBanner(ship)" :title="getShipName(ship)">
    </div>
    Coming soon!
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
            this.getData(this.$route.query.ship);
        })
    },
    methods:{
        async getData(ship){
            let container = {
                ship: parseInt(ship)
            };
            await axios.post(`${this.configData.host}/droplocs`, container)
            .then(response => response.data)
            .then(data => this.data = data)
            .catch(err => console.error(err));
            console.log(this.data);
            return await this.data;
        },
        getShipBanner(id){
            try{
                return require(`./../../../assets/shipcards/${id}.png`);
            }
            catch(err){
                return require(`./../../../assets/shipcards/-1.png`);
            }
        },
        getShipName(id){
            if(this.shipData.hasOwnProperty(id)) return `${this.shipData[id].jp} (${this.shipData[id].en})`;
        }
    }
}
</script>

<style scoped>

</style>
