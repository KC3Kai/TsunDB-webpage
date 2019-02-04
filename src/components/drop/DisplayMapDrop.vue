<template>
<div class="container">
    <div class="tile is-ancestor">
        <div class="tile is-parent is-5">
            <div class="tile is-child">
                <p class="title">Filters</p>
                <div class="content">
                    <div class="field is-horizontal">
                        <div class="field-label">
                            <label class="label is-pulled-left">Node </label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <span :class="selectedNode == node ? 'button is-info' : 'button'" @click="toggleNode(node)" v-for="node in nodesData[map]" :key="node">
                                    &nbsp;{{node}}&nbsp;&nbsp;
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label">
                            <label class="label is-pulled-left">Ranks </label>
                        </div>
                        <div class="field-body">
                            <div class="field has-addons">
                                <span :class="selectedRanks == 'SAB' ? 'button is-info is-fullwidth' : 'button is-fullwidth'" @click="toggleRanks('SAB')">
                                    SAB
                                </span>
                                <span :class="selectedRanks == 'SA' ? 'button is-info is-fullwidth' : 'button is-fullwidth'" @click="toggleRanks('SA')">
                                    SA
                                </span>
                                <span :class="selectedRanks == 'S' ? 'button is-info is-fullwidth' : 'button is-fullwidth'" @click="toggleRanks('S')">
                                    S
                                </span>
                                <span :class="selectedRanks == 'A' ? 'button is-info is-fullwidth' : 'button is-fullwidth'" @click="toggleRanks('A')">
                                    A
                                </span>
                                <span :class="selectedRanks == 'B' ? 'button is-info is-fullwidth' : 'button is-fullwidth'" @click="toggleRanks('B')">
                                    B
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal" v-if="checkIsEventMap(map)">
                        <div class="field-label">
                            <label class="label is-pulled-left">Difficulty</label>
                        </div>
                        <div class="field-body">
                            <div class="field has-addons">
                                <span :class="selectedDifficulty == 4 ? 'button is-info is-fullwidth' : 'button is-fullwidth'" @click="toggleDifficulty(4)">
                                    甲
                                </span>
                                <span :class="selectedDifficulty == 3 ? 'button is-info is-fullwidth' : 'button is-fullwidth'" @click="toggleDifficulty(3)">
                                    乙
                                </span>
                                <span :class="selectedDifficulty == 2 ? 'button is-info is-fullwidth' : 'button is-fullwidth'" @click="toggleDifficulty(2)">
                                    丙
                                </span>
                                <span :class="selectedDifficulty == 1 ? 'button is-info is-fullwidth' : 'button is-fullwidth'" @click="toggleDifficulty(1)">
                                    丁
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tile is-parent is-7">
            <div class="tile is-child">
                <p class="title">{{getMapTitle(map)}}</p>
                <div class="content">
                    <img :src="getMapFile(map)">
                </div>
            </div>
        </div>
    </div>
    <table class="table is-striped is-hoverable box">
        <thead>
            <tr>
                <th>Ship</th>
                <th>名前</th>
                <th>Name</th>
                <th>S-Count</th>
                <th>S-%</th>
                <th>A-Count</th>
                <th>A-%</th>
                <th>B-Count</th>
                <th>B-%</th>
                <th>Total-Count</th>
                <th>Total-%</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>Ship</th>
                <th>名前</th>
                <th>Name</th>
                <th>S-Count</th>
                <th>S-%</th>
                <th>A-Count</th>
                <th>A-%</th>
                <th>B-Count</th>
                <th>B-%</th>
                <th>Total-Count</th>
                <th>Total-%</th>
            </tr>
        </tfoot>
    </table>
</div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';

export default {
    props: ['map'],
    data: function(){
        return{
            edgesData: require('./../../data/edges.json'),
            eventMapsData: require('./../../data/eventMaps.json'),
            mapNamesData: require('./../../data/mapNames.json'),
            nodesData: require('./../../data/nodes.json'),
            shipData: require('./../../data/ship.json'),
            shipTypeData: require('./../../data/shiptype.json'),
            data: undefined,
            selectedDifficulty: 0,
            selectedNode: undefined,
            selectedRanks: "SAB"
        }
    },
    methods:{
        checkIsEventMap(map){
            if(this.eventMapsData.hasOwnProperty(String(map.slice(0,2)))){
                this.selectedDifficulty = 4;
                return true;
            }
            return false;
        },
        async getData(map){
            let container = {
                map: map,
                nodes: this.parseNode(map),
                ranks: this.parseRanks(this.selectedRanks),
                difficulty: this.selectedDifficulty
            };
            await axios.get(`https://tsundb.kc3.moe/api/drops`, {
                params: container,
                paramsSerializer: function(params){
                    return qs.stringify(params, {
                        arrayFormat: 'repeat',
                        encode: false
                    })
                }
            })
            .then(response => response.data)
            .then(data => this.data = data)
            .catch(err => console.error(err));
            console.log(this.data);
            return await this.data;
        },
        getMapTitle(map){
            return `World ${map}: ${this.mapNamesData[map].en}`;
        },
        getMapFile(map){
            return require(`./../../../assets/maps/${map}.png`);
        },
        parseNode(map){
            let arr = [];
            for(let x in this.edgesData[map]){
                if(this.edgesData[map][x][1] == this.selectedNode) arr.push(Number(x));
            }
            return arr;
        },
        parseRanks(ranks){
            let value = [];
            switch(ranks){
                case "SAB": value = ["S","A","B"]; break;
                case "SA": value = ["S","A"]; break;
                case "S": value = ["S"]; break;
                case "A": value = ["A"]; break;
                case "B": value = ["B"]; break;
            }
            return value;
        },
        toggleDifficulty(value){
            this.selectedDifficulty = value;
            this.getData(this.$route.query.map);
        },
        toggleNode(value){
            this.selectedNode = value;
            this.getData(this.$route.query.map);
        },
        toggleRanks(value){
            this.selectedRanks = value;
            this.getData(this.$route.query.map);
        }
    }
}
</script>

<style scoped>

</style>
