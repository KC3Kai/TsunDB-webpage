<template>
    <div class="container">
        <button :class="{'button is-info': option == 'drop', 'button': option != 'drop'}" @click="optionSelected('drop')">
            <span>
                Drop list
            </span>
            <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
        </button>
        <button :class="{'button is-info': option == 'enemy', 'button': option != 'enemy'}" @click="optionSelected('enemy')">
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
            option: undefined
        };
    },
    methods: {
        optionSelected(option) {
            this.option = option;
            this.$emit("optionSelected", option);
        }
    }
}
</script>

<style>

</style>
