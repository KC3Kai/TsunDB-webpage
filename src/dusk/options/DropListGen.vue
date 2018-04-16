<template>
<div class="container">
    <p class="subtitle">
        <br />
        Generate the drop list which you can copy paste on wikia.
    </p>
    <!-- <mapselection @mapIsSet="generateData($event)"></mapselection> -->
</div>
</template>

<script>
export default {
    data: function() {
        return {
            map: undefined,
            samples: [],
            generatedData: ""
        };
    },
    methods: {
        generateData(map){
            if(map == this.map) return;
            this.map = map;
            this.getJSON();
        },
        getJSON() {
            let container = {
                action: 'unique'
            }
            let data = axios.get(`https://tsundb.kc3.moe/api/routing/${this.map}`, {
                params: container,
                paramsSerializer: function(params){
                    return qs.stringify(params, {
                        arrayFormat: 'brackets',
                        encode: false
                    })
                }
            })
            .then(response => {
                return response;
            })
            .then(data => {
                this.samples = data.data;
            })
            .catch(err => console.error(err));
        }
    }
}
</script>

<style>

</style>
