<template>
<div class="container">
    <p class="subtitle">
        <br />
        Processes the SQL export into something more readable. Currently useless for most people except Tibi and Tsuba.
    </p>
    <mapselection @mapIsSet="loadMap($event)"></mapselection>
    <br />
    <textarea class="textarea" placeholder='e.g. [{"fleetsetup":[1,1,2,2,3,16],"edgeend":1,"count":1,"fleetspeed":5},{"fleetsetup":[1,1,2,2,13,16],"edgeend":1,"count":2,"fleetspeed":5}]' @input="inputJson"></textarea>
    <strong v-if=invalid>Invalid JSON!</strong>
    <table class="table is-bordered" v-for="(fleet, id1) of data" :key="id1">
        <tr>
            <th colspan="4">{{id1}}</th>
        </tr>
		<tr>
            <th>Speed</th>
            <th>Route</th>
            <th>Rate</th>
            <th>Sample</th>
		</tr>
        <template v-for="(speed, id2) of fleet">
            <template v-for="(count, route) of speed">
                <tr :key="route">
                    <td :key="route">{{id2}}</td>
                    <td :key="route">{{route}}</td>
                    <td :key="route">{{count.rate}}%</td>
                    <td :key="route">{{count.count}}</td>
                </tr>
            </template>
        </template>
       
        <!--
        <tr>
            <td rowspan="3">SS-SS-SSV-SSV-SSV-SSV</td>
            <td>Slow</td>
            <td>1 -> A</td>
            <td>100%</td>
        </tr>
        <tr>
            <td rowspan="2">Fast</td>
            <td>1 -> A</td>
            <td>50%</td>
        </tr>
        <tr>
            <td>1 -> C</td>
            <td>50%</td>
        </tr>
        -->
	</table>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            data: undefined,
            invalid: undefined,
            map: undefined,
            raw: undefined,
            update: false,
            edges: require('./../../data/edges.json'),
            shiptype: require('./../../data/shiptype.json')
        };
    },
    methods: {
        inputJson(event){
            this.raw = event.target.value;
            this.update = true;
            this.processJson();
        },
        processJson(){
            if(this.map == undefined)return;
            if(this.raw == undefined)return;
            if(!this.update){
                return;
            }
            else {
                this.update == false;
            }
            try{
                this.invalid = false;
                let output = {};
                let value = JSON.parse(this.raw);
                for(let object of value){
                    let fleetsetup = this.formatShipType(object.fleetsetup);
                    let fleetspeed = this.formatFleetSpeed(object.fleetspeed);
                    let edgeend = this.formatRoute(object.edgeend);
                    if(!output.hasOwnProperty(String(fleetsetup))){
                        output[String(fleetsetup)] = {};
                    }
                    if(!output[String(fleetsetup)].hasOwnProperty(String(fleetspeed))){
                        output[String(fleetsetup)][String(fleetspeed)] = {"total" : 0};
                    }
                    output[String(fleetsetup)][String(fleetspeed)][String(edgeend)] = {"count" : object.count};
                    output[String(fleetsetup)][String(fleetspeed)]["total"] += object.count;
                }
                this.data = this.formatRate(output);
            }
            catch(err){
                this.invalid = true;
            }
        },
        formatRoute(route){
            //remind myself to automate this, through a map selection component
            return this.edges[this.map][String(route)].join(' -> ');
        },
        formatShipType(fleet){
            let returnStr = "";
            fleet = fleet.map(x => this.shiptype[x]);
            for(let x of fleet){
                returnStr += `${x}-`;
            }
            return returnStr.slice(0, -1);
        },
        formatFleetSpeed(speed){
            let returnStr = "";
            switch(speed){
                case 5: returnStr = "Slow"; break;
                case 10: returnStr = "Fast"; break;
                case 15: returnStr = "Fast+"; break;
                case 20: returnStr = "Fastest"; break;
            }
            return returnStr;
        },
        formatRate(data){
            for(let x in data){
                for(let y in data[x]){
                    let max = data[x][y].total;
                    delete data[x][y].total;
                    for(let z in data[x][y]){
                        data[x][y][z]["rate"] = Math.round((data[x][y][z].count / max) * 100);
                    }
                }
            }
            return data;
        },
        loadMap(map){
            if(this.map == map) return;
            this.map = map;
            this.processJson();
        }
    }
}
</script>

<style>

</style>
