<template>
<div class="container">
    <p class="title is-spaced">
        Ship Drop
    </p>
    <p class="subtitle">
        Beware that the accuracy of the drop rate may vary.<br />
        All rare ships are marked with a red color, keep in mind that the rarity changes depending on whether its an event map or not.
    </p>
    <div class="container">
        <mapselection :path="'drop/maps'"/>
    </div>
    <div class="container" v-if="verifyMap(map)" :key="map">
        <displaymapdrop :map="map"/>
    </div>
</div>
</template>

<script>
export default {
    props: ['map'],
    data: function(){
        return{
            mapNamesData: require('./../../data/mapNames.json')
        }
    },
    methods:{
        verifyMap(map){
            return (this.mapNamesData.hasOwnProperty(map)) ? true : false;
        }
    }
}
</script>

<style scoped>

</style>
