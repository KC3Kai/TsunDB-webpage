<template>
<div class="container">
    <p class="title is-spaced">
        The Rising Tsun
    </p>
    <p class="subtitle">
        Welcome to my hidden cottage, enjoy your stay!
    </p>
    <div class="content">
        <a :href="getSourceLink(id)" rel="noopener noreferrer" target="_blank">
            <img :src="getImage(id)">
        </a>
    </div>
    <div class="content">
        <strong>Made by <a :href="getAuthorLink(id)" rel="noopener noreferrer" target="_blank">{{getAuthor(id)}}</a></strong>
    </div>
</div>
</template>

<script>
export default {
    data: function(){
        return{
            dawnFluffData: require('./../data/dawnFluff.json'),
            id: 0
        }
    },
    mounted: function() {
        this.$nextTick(function () {
            this.generateRandomFluff();
        })
    },
    methods:{
        generateRandomFluff(){
            this.id = Math.floor(Math.random() * this.dawnFluffData.length);
        },
        getSourceLink(id){
            return this.dawnFluffData[this.id].href;
        },
        getImage(id){
            return require(`./../../assets/fluff/dawn/${this.dawnFluffData[this.id].src}`)
        },
        getAuthor(id){
            return this.dawnFluffData[this.id].author;
        },
        getAuthorLink(id){
            return this.dawnFluffData[this.id].authorhome;
        }
    }
}
</script>

<style scoped>

</style>
