<template>
<div class="container">
    <p class="title is-spaced">
        Routing
    </p>
    <p>
        While you are free to copy other people's comps, do not make the mistake of assuming that the comp you're copying is guaranteed to be good. <br/>
        If you actually want to understand the mechanics, check out the <a href="http://en.kancollewiki.net/wiki/Kancolle_Wiki" rel="noopener noreferrer" target="_blank">wiki</a>, <a href="https://kancolle.fandom.com/wiki/KanColle_Wiki" rel="noopener noreferrer" target="_blank">wikia</a> or the <a href="https://www.reddit.com/r/kancolle/" rel="noopener noreferrer" target="_blank">subreddit</a> and its<a href="https://discord.gg/RtSadWM" rel="noopener noreferrer" target="_blank"> discord server</a>.
    </p>
    <p>
        Click on the sample in the table to get more information about the fleet setup (scroll down if it's not visible).
    </p>
    <p>
        For more dedicated branching analysis, check out Chami's <a href="http://kc.piro.moe/nav/#/" rel="noopener noreferrer" target="_blank">routing analysis tool</a>!
    </p>
    <div class="container">
        <mapselection :path="'routing'"/>
    </div>
    <div class="container" v-if="verifyMap(map)" :key="map">
        <displaymaprouting :map="map"/>
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
