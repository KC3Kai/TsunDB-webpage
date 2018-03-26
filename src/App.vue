<template>
<div id="scroll">
    <navbar @toolIsSet="selectedTool = $event" id="navbar"></navbar>
    <home v-if="selectedTool == 0"></home>
    <routing v-else-if="selectedTool == 1"></routing>
    <drop v-else-if="selectedTool == 2"></drop>
    <construction v-else-if="selectedTool == 3"></construction>
    <development v-else-if="selectedTool == 4"></development>
    <dusk v-else-if="selectedTool == 5"></dusk>
    <dawn v-else-if="selectedTool == 6"></dawn>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            selectedTool: 0,
        };
    },
    methods: {

    }
}
</script>

<style>
    @import "../node_modules/bulma/css/bulma.css";
    #navbar {
        background-color: #222222;
    }

    p {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    #parent{
        display: flex;
    }

    #left{
        width: 50%;
    }

    #right{
        flex: 1;
    }
</style>
