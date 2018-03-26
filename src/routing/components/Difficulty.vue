<template>
    <td>{{formatDiff(diff)}}</td>
</template>

<script>
export default {
    props: ['diff'],
    methods: {
        formatDiff: function(diff){
            let returnStr = "None";
            switch(diff){
                case 1:
                    returnStr = "丁";
                    break;
                case 2:
                    returnStr = "丙";
                    break;
                case 3:
                    returnStr = "乙";
                    break;
                case 4:
                    returnStr = "甲";
                    break;
            }
            return returnStr;
        }
    }
}
</script>
