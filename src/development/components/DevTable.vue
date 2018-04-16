<template>
    <div class="container">
        <div v-if="displayType == 1">
            <table class="table">
                <thead>
                    <tr>
                        <th>Card</th>
                        <th>Name EN</th>
                        <th>Name JP</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Card</th>
                        <th>Name EN</th>
                        <th>Name JP</th>
                        <th>Rate</th>
                    </tr>
                </tfoot>
                <tbody>

                </tbody>
            </table>
        </div>
        <div v-else-if="displayType == 2">
            <table class="table">
                <thead>
                    <tr>
                        <th>Card</th>
                        <th>Name EN</th>
                        <th>Name JP</th>
                        <th>Rate</th>
                        <th>HQLvl Required</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Card</th>
                        <th>Name EN</th>
                        <th>Name JP</th>
                        <th>Rate</th>
                        <th>HQLvl Required</th>
                    </tr>
                </tfoot>
                <tbody>
                    <tr v-for="(value, id) in data" :key="id">
                        <th>
                            <img :src="getEquipCard(value[0])" width="50" height="50">
                        </th>
                        <th style="vertical-align:middle;">
                            <img style="vertical-align:middle;" :src="getEquipIcon(value[0])" width="30" height="30">
                            {{equips[value[0]].en}}
                        </th>
                        <th style="vertical-align:middle;">
                            <img style="vertical-align:middle;" :src="getEquipIcon(value[0])" width="30" height="30">
                            {{equips[value[0]].jp}}
                        </th>
                        <th>
                            {{parseInt(value[1])*2}}%
                        </th>
                        <th style="text-align:center;">
                            {{parseInt(equips[value[0]].rare)*10}}
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data','displayType'],
    data: function(){
        return {
            equips: require('./../../data/equip.json')
        }
    },
    methods: {
        getEquipCard(id){
            return `./../../../assets/equipcards/${id}.png`;
        },
        getEquipIcon(id) {
            if(this.equips.hasOwnProperty(String(id))){
                return `./../../../assets/icons/equip/${this.equips[String(id)].icon}.png`;
            }
            else if(id == -1){
                return `./../../../assets/icons/equip/-1.png`;
            }
        }
    }
}
</script>

<style>

</style>
