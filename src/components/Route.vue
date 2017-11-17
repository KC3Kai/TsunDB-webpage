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
            console.log(this.map);
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
        }
    }
}
</script>
