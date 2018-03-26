<template>
    <td>{{getBossNode(boss)}}</td>
</template>

<script>
export default {
    props: ['boss'],
    methods: {
        getBossNode: function(boss){
            let returnStr = "";
            let sortedArray = boss.sort();
            for(let i = 0; i < sortedArray.length; i++){
                if(sortedArray[i+1] == sortedArray[i]){
                    returnStr = `${sortedArray[i]}`;
                }
            }
            return returnStr;
        }
    }
}
</script>
