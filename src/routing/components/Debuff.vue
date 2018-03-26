<template>
    <td>{{debuffCount(count)}}</td>
</template>

<script>
export default {
    props: ['count'],
    methods: {
        debuffCount: function(count){
            if(count == undefined){
                return 0;
            }
            return count;
        }
    }
}
</script>
