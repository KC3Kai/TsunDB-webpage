<template>
    <div class="container">
        <button class="button" @click="optionSelected('drop')">
            <span>
                Drop list
            </span>
            <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
        </button>
        <button class="button" @click="optionSelected('enemy')">
            <span>
                EnemyComp list
            </span>
            <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
        </button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {

        };
    },
    methods: {
        optionSelected(option) {
            this.$emit("optionSelected", option);
        }
    }
}
</script>

<style>

</style>
