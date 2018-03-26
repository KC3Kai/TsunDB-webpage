<template>
    <div class="container" v-if="data != undefined">
        <h2 class="subtitle">Route taken in World {{map}} {{formatDiff(data.difficulty)}}: {{formatRoute(data.edgeID)}}</h2>
        <h2 style="vertical-align:middle;">
            <strong>Node {{formatRoute(data.edgeID).slice(-1)}}:</strong>
            <img :src="checkEvent(data.eventId, data.eventKind)" style="width:30px; height:30px; vertical-align:middle;" />
            {{displayEvent(data.eventId, data.eventKind)}}
        </h2>
    </div>
</template>

<script>
export default {
    props: ['data', 'map'],
    data: function(){
        return {
            edges: require('./../data/edges.json')
        }
    },
    methods: {
        formatDiff: function(diff){
            switch(diff){
                case 1:
                    return " on 丁";
                    break;
                case 2:
                    return " on 丙";
                    break;
                case 3:
                    return " on 乙";
                    break;
                case 4:
                    return " on 甲";
                    break;
            }
        },
        formatRoute(route){
            let returnStr = "";
            if(this.map in this.edges){
                returnStr = String(this.edges[this.map][route[0]].join("-") + "-");
                for(let i = 1; i < route.length; i++){
                    returnStr += String(this.edges[this.map][route[i]][1]+"-");
                }
                returnStr = returnStr.slice(0,-1);
            }
            else {
                returnStr = String(route.join("-"));
            }
            return returnStr;
        },
        checkEvent(event, kind){
            let node = "";
            switch(event){
                case 0:
                    node = "start";
                    break;
                case 2: 
                    node = "resource";
                    break;
                case 3:
                    node = "storm";
                    break;
                case 4: 
                    switch(kind){
                        case 1: 
                            node = "battle";
                            break;
                        case 2: 
                            node = "night";
                            break;
                        case 4: 
                            node = "aerial";
                            break;
                        case 5:
                            node = "battle";
                            break;
                        case 6: 
                            node = "raid";
                            break;
                        case 7:
                            node = "nightday";
                            break;
                    }
                    break;
                case 5: 
                    node = "boss";
                    break;
                case 6: 
                    node = "empty";
                    break;
                case 7: 
                    node = "scout";
                    break;
                case 8: 
                    node = "anchor";
                    break;
                case 9: 
                    node = "flag";
                    break;
            }
            return `./../assets/nodes/${node}.png`;
        },
        displayEvent(event, kind){
            let node = "";
            switch(event){
                case 0:
                    node = "Start";
                    break;
                case 2: 
                    node = "Resource";
                    break;
                case 3:
                    node = "Maelstrom";
                    break;
                case 4: 
                    switch(kind){
                        case 1: 
                            node = "Normal Battle";
                            break;
                        case 2: 
                            node = "Night Battle";
                            break;
                        case 4: 
                            node = "Aerial Battle";
                            break;
                        case 5:
                            node = "Combined Fleet Battle";
                            break;
                        case 6: 
                            node = "Air Raid";
                            break;
                        case 7:
                            node = "Night to Day Battle";
                            break;
                    }
                    break;
                case 5: 
                    switch(kind){
                        case 1: 
                            node = "Boss (Normal)";
                            break;
                        case 5: 
                            node = "Boss (Combined Fleet)";
                            break;
                    }
                    break;
                case 6: 
                    switch(kind){
                        case 2: 
                            node = "Route Selection";
                            break;
                        default: 
                            node = "Must be my imagination...";
                            break;
                    }
                    break;
                case 7: 
                    node = "Resource Scout";
                    break;
                case 8: 
                    node = "Anchor";
                    break;
                case 9: 
                    node = "Transport offload point";
                    break;
            }
            return node;
        }
    }
}
</script>

<style>

</style>