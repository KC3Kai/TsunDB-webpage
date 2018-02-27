<template>
<div>
    <div v-if="eventMap()" class="field is-horizontal">
        <div class="field-label">
            <label class="label is-pulled-left">Difficulty: </label>
        </div>
        <div class="field-body">
            <div class="field">
                <div class="control">
                    <div class="select">
                        <select @change="filterDifficulty">
                            <option value="undefined">All</option>
                            <option value="1">丁</option>
                            <option value="2">丙</option>
                            <option value="3">乙</option>
                            <option value="4">甲</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="field is-horizontal">
        <div class="field-label">
            <label class="label is-pulled-left">Single Node Filter: </label>
        </div>
        <div class="field-body">
            <div class="field">
                <div class="control">
                    <input class="input" id="shrink" type="text" placeholder="SoonTM" maxlength="1">
                </div>
            </div>
        </div>
    </div>
    <div class="field is-horizontal">
        <div class="field-label">
            <label class="label is-pulled-left">Include incomplete routes: </label>
        </div>
        <div class="field-body">
            <div class="field">
                <div class="control">
                    <input type="checkbox" :checked="nextRoute" @click="toggleNextRoute">
                </div>
            </div>
        </div>
    </div>
    <br />
</div>
</template>

<script>
export default {
    props: ['map'],
    data: function() {
        return {
            nextRoute: 0,
            edges: require('./data/edges.json')
        };
    },
    methods:{
        toggleNextRoute(){
            this.nextRoute = this.nextRoute ? 0 : 1;
            this.$emit("nextRouteToggled", this.nextRoute);
        },
        filterDifficulty(id){
            console.log();
            this.$emit("filterDifficulty", id.target.value);
        },
        eventMap(){
            return (this.map.slice(0,2) == 41) ? true : false;
        }
    }
}
</script>


<style>
#shrink{
    width:10%;
}
</style>
