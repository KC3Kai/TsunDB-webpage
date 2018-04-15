<template>
<div class="container">
    <p class="title">
        The Setting Tsun
    </p>
    <p class="subtitle">
        <br />
        Welcome to the hideout, make yourself at home. =w=
    </p>
    <dusk-selection @optionSelected="option = $event"></dusk-selection>
    <droplist-gen v-if="option=='drop'"></droplist-gen>
    <enemycomp-gen v-else-if="option=='enemy'"></enemycomp-gen>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            option: undefined
        };
    },
}
</script>

<style>

</style>
