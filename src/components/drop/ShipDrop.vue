<template>
<div class="container">
    <p class="title is-spaced">
        Ship Drop - Search
    </p>
    <p class="subtitle">
        Searching for the ship you want has never been so easy! Beware of small sample sizes and weird reports though...<br />
        Aliases/Nicknames are possible! If you have a suggestion, feel free to PM me about it!<br /><br />
        Hint: You can click on the rows if you don't want to scroll down.
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
            <div class="tile is-parent is-3">
                <div class="tile is-child">
                    <div class="content">
                        <div class="field is-horizontal">
                            <div class="field-label">
                                <img :src="getShipBanner(shipId)" :title="getShipName(shipId)" :key="shipId">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container" v-if="shipId != -1" :key="shipId">
        <displayshipdrop :ship="shipId"/>
    </div>
</div>
</template>

<script>
export default {
    props: ['ship'],
    data: function(){
        return{
            shipData: require('./../../data/ship.json'),
            shipdropAliases: require('./../../data/shipdropAliases.json'),
            shipId: -1,
            validId: false
        }
    },
    mounted: function() {
        this.$nextTick(function () {
            this.setShipId(this.ship);
        })
    },
    methods:{
        toggleShip(value){
            this.setShipId(this.formatString(value));
            if(this.validId) this.$router.push(`/drop/search?ship=${value}`);
        },
        formatString(value){
            if(value == '') return value;
            let newArr = value.split('');
            let returnArr = [];
            for(let id in newArr){
                if(id == 0) returnArr.push(newArr[id].toUpperCase());
                else if(id > 0 && newArr[id-1] == " ") returnArr.push(newArr[id].toUpperCase());
                else returnArr.push(newArr[id].toLowerCase());
            }
            return returnArr.join('');
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
        },
        setShipId(value){
            console.log(value);
            this.shipId = -1;
            this.validId = false;
            if(value == '' || value == undefined) return;
            if(this.shipData.hasOwnProperty(value)){
                this.shipId = value;
                this.validId = true;
            }
            else if(this.shipdropAliases.hasOwnProperty(value)){
                this.shipId = this.shipdropAliases[value];
                this.validId = true;
            }
            else{
                for(let x in this.shipData){
                    if(this.shipData[x].jp == value || this.shipData[x].en == value || this.shipData[x].kana == value){
                        this.shipId = x;
                        this.validId = true;
                        break;
                    }
                }
            }
        }
    }
}
</script>

<style scoped>

</style>
