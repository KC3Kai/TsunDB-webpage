<template>
<div class="container">
    <p class="title is-spaced">
        The Setting Tsun
    </p>
    <p class="subtitle">
        Resting after a long day of hard work...
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
            duskFluffData: require('./../data/duskFluff.json'),
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
            this.id = Math.floor(Math.random() * this.duskFluffData.length);
        },
        getSourceLink(id){
            return this.duskFluffData[this.id].href;
        },
        getImage(id){
            return require(`./../../assets/fluff/dusk/${this.duskFluffData[this.id].src}`)
        },
        getAuthor(id){
            return this.duskFluffData[this.id].author;
        },
        getAuthorLink(id){
            return this.duskFluffData[this.id].authorhome;
        }
    }
}
</script>

<style scoped>

</style>
