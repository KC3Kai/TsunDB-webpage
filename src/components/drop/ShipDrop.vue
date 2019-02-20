<template>
<div class="container">
    <p class="title is-spaced">
        Ship Drop - Search
    </p>
    <p class="subtitle">
        Searching for the ship you want has never been so easy!
    </p>
    <div class="container">
        <div class="tile is-ancestor">
            <div class="tile is-parent is-4">
                <div class="tile is-child">
                    <div class="content">
                        <div class="field is-horizontal">
                            <div class="field-label">
                                <label class="label is-pulled-left">Ship</label>
                            </div>
                            <div class="field-body">
                                <div class="field">
                                    <input class="input" placeholder="e.g. 1 or Mutsuki or 睦月 or むつき" @input="toggleShip($event.target.value)">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container" v-if="ship != undefined" :key="ship">
        <displayshipdrop :ship="ship"/>
    </div>
</div>
</template>

<script>
export default {
    props: ['ship'],
    data: function(){
        return{
            shipData: require('./../../data/ship.json')
        }
    },
    methods:{
        toggleShip(value){
            let returnStr;
            if(value == '') return;
            if(this.shipData.hasOwnProperty(value)){
                returnStr = `?ship=${value}`;
            }
            else{
                for(let x in this.shipData){
                    if(this.shipData[x].jp == value || this.shipData[x].en == value || this.shipData[x].kana == value){
                        returnStr = `?ship=${x}`;
                        break;
                    }
                }
            }
            if(returnStr) this.$router.push(`/drop/search${returnStr}`);
        }
    }
}
</script>

<style scoped>

</style>
