<template>
    <td>{{formatGaugeType(type)}}</td>
</template>

<script>
export default {
    props: ['type'],
    methods: {
        formatGaugeType: function(type){
            let returnStr = "None";
            switch(type){
                case 2:
                    returnStr = "HP";
                    break;
                case 3:
                    returnStr = "TP";
                    break;
            }
            return returnStr;
        }
    }
}
</script>
