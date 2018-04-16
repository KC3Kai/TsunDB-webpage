<template>
<div class="container">
    <p class="title">
        Development
    </p>
    <p class="subtitle">
        <br />
        The place where you get plenty of penguins.
    </p>
    <div class="field is-horizontal">
        <div class="field-body">
            <div class="field">
                <div class="control">
                    <button :class="{'button is-info': selectedOption == 0, 'button': selectedOption != 0}" value="0" @click="setOption($event.target.value)">
                        Sandbox
                    </button>
                    <button :class="{'button is-info': selectedOption == 1, 'button': selectedOption != 1}" value="1" @click="setOption($event.target.value)">
                        Show all pools
                    </button>
                    <button :class="{'button is-info': selectedOption == 2, 'button': selectedOption != 2}" value="2" @click="setOption($event.target.value)">
                        How does it work?
                    </button>
                </div>
            </div>
        </div>
    </div>
    <br />
    <dev-ui v-if="selectedOption == 0"></dev-ui>
    <dev-pools v-else-if="selectedOption == 1"></dev-pools>
    <dev-guide v-else-if="selectedOption == 2"></dev-guide>
</div>
</template>

<script>
export default {
    data: function(){
        return {
            selectedOption: 0
        }
    },
    methods: {
        setOption(option){
            this.selectedOption = parseInt(option);
        }
    }
}
</script>

<style>

</style>
