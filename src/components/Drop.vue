<template>
<div class="container">
    <p class="title is-spaced">
        Ship Drop
    </p>
    <p class="subtitle">
        Beware that the accuracy of the drop rate may vary.
    </p>
    <div class="container">
        <mapselection :path="'drop'"/>
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
            mapNamesData: require('./../data/mapNames.json')
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
