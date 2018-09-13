<template>
<div class="container" v-if="map != undefined">
    <br/>
    <template v-if="checkEventMap(map) == true">
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label is-pulled-left">Difficulty: </label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <div class="select">
                            <select @change="filterDifficulty">
                                <option value="undefined">All</option>
                                <option value="1">丁</option>
                                <option value="2">丙</option>
                                <option value="3">乙</option>
                                <option value="4">甲</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label is-pulled-left">Fleet Type: </label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <div class="select">
                            <select @change="filterFleetType">
                                <option value="undefined">All</option>
                                <option value="0">Single/Strike Force</option>
                                <option value="1">Carrier Task Force</option>
                                <option value="2">Surface Task Force</option>
                                <option value="3">Transport Escort</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="field is-horizontal">
                <div class="field-label">
                    <label class="label is-pulled-left">Phase: </label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <div class="select">
                                <select @change="filterGaugeNum">
                                    <option value="undefined">All</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br />
    </template>
    <div class="field is-horizontal">
        <div class="field-label">
            <label class="label is-pulled-left">Route Filter: </label>
        </div>
        <div class="field-body">
            <form class="field">
                <div class="control">
                    <div class="select" id="select-column">
                        <select @change="firstNode" v-model="node1">
                            <option :value="undefined" disabled style="display:none">From node...</option>
                            <option v-for="node in nodes[this.map]" :key="node">{{node}}</option>
                        </select>
                    </div>
                </div>
                <div class="control">
                    <div class="select" id="select-column">
                        <select @change="secondNode" v-model="node2">
                            <option :value="undefined" disabled style="display:none">to node...</option>
                            <option v-for="node in nodes[this.map]" :key="node">{{node}}</option>
                        </select>
                    </div>
                </div>
                <div class="control">
                    <div class="select" id="select-column">
                        <select @change="thirdNode" v-model="node3" disabled>
                            <option :value="undefined" disabled style="display:none">and node...</option>
                            <option v-for="node in nodes[this.map]" :key="node">{{node}}</option>
                        </select>
                    </div>
                </div>
                <div class="control">
                    <div class="button is-dark" @click="resetNodes">
                        Clear Nodes
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div class="field is-horizontal">
        <div class="field-label">
            <label class="label is-pulled-left">Show only post-clear: </label>
        </div>
        <div class="field-body">
            <div class="field">
                <div class="control">
                    <input type="checkbox" :checked="cleared" @click="toggleCleared">
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['map'],
    data: function() {
        return {
            gaugenum: undefined,
            cleared: false,
            node1: undefined,
            node2: undefined,
            node3: undefined,
            edges: require('./../data/edges.json'),
            nodes: require('./../data/nodes.json'),
            eventMaps: require('./../data/eventMaps.json')
        };
    },
    methods:{
        checkEventMap(map){
            return (this.eventMaps.hasOwnProperty(String(map.slice(0,2))));
        },
        firstNode(node){
            this.node1 = node.target.value;
            if(this.node2 != undefined){
                this.filterNodes();
            }
        },
        secondNode(node){
            this.node2 = node.target.value;
            if(this.node1 != undefined){
                this.filterNodes();
            }
        },
        thirdNode(node){
            this.node3 = node.target.value;
            if(this.node2 != undefined){
                this.filterNodes();
            }
        },
        resetNodes(){
            this.node1 = undefined;
            this.node2 = undefined;
            this.node3 = undefined;
            this.filterNodes();
        },
        filterDifficulty(id){
            this.$emit("filterChanged", ["difficulty",id.target.value]);
        },
        filterNodes(){
            let returnArray = [];
            if(this.node1 == undefined && this.node2 == undefined){
                this.toggleNextRoute(0);
                this.$emit("filterChanged", ["nodes", returnArray]);
            }
            else {
                for(let i = 1; i <= Object.keys(this.edges[String(this.map)]).length; i++){
                    if(this.node1 == this.edges[String(this.map)][i][0]){
                        if(this.node2 == this.edges[String(this.map)][i][1]){
                            returnArray = i;
                            break;
                        }
                    }
                }
                if(this.node2 != undefined && this.node3 != undefined){
                    for(let i = 1; i <= Object.keys(this.edges[String(this.map)]).length; i++){
                        if(this.node2 == this.edges[String(this.map)][i][0]){
                            if(this.node3 == this.edges[String(this.map)][i][1]){
                                returnArray.push(i);
                                break;
                            }
                        }
                    }
                }
                this.toggleNextRoute(1);
                this.$emit("filterChanged", ["nodes", returnArray]);
            }
        },
        filterFleetType(event){
            this.$emit("filterChanged", ["fleettype",event.target.value]);
        },
        filterGaugeNum(event){
            this.$emit("filterChanged", ["gaugenum",event.target.value]);
        },
        toggleCleared(){
            this.cleared = this.cleared ? false : true;
            this.$emit("filterChanged", ["cleared",this.cleared]);
        },
        toggleNextRoute(event){
            this.$emit("deadend", event);
        }
    }
}
</script>


<style>
#shrink{
    width:10%;
}

#select-column{
    margin-bottom:5px;
}
</style>
