<template>
<div class="container">
    <p class="title">
        The Rising Tsun
    </p>
    <p class="subtitle">
        <br />
        The place where tsunderes use black magic to discover info.
    </p>
    <dawn-selection @optionSelected="option = $event"></dawn-selection>
    <sql-routing-processor v-if="option=='routing'"></sql-routing-processor>
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
