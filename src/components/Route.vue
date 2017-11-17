<template>
    <td>{{formatRoute(route)}}</td>
</template>

<script>


export default {
    props: ['route','map'],
    data: function(){
        return {
            edges: require('./../data/edges.json')
        }
    },
    methods: {
        formatRoute(route){
            let returnStr = "";
            if(this.edges.hasOwnProperty(this.map)){
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
        }
    }
}
</script>
