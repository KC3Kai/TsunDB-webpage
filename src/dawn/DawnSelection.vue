<template>
    <div class="container">
        <button :class="{'button is-info': option == 'routing', 'button': option != 'routing'}" @click="optionSelected('routing')">
            <span>
                SQL Routing Processor
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
