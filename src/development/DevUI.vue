<template>
<div class="container">
    <div class="container" id="parent">
        <div class="container">
            <div class="box" id="dev-box">
                <img src="/assets/icons/resource/Fuel.png" height="30" width="30" style="vertical-align:middle;">
                <span id="white-text">
                    Fuel
                </span>
                <div id="container">
                    <div>
                        <input class="input" type="number" min="10" max="300" v-model="resources['fuel']" @input="setResourceInput($event.target.value,'fuel')">
                    </div>
                    <br />
                    <div id="dev-button-row">
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(-1,'fuel')" :disabled="resources['fuel'] <= 10">-1</a>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(1,'fuel')" :disabled="resources['fuel'] >= 300">+1</a>
                        <a class="button is-info" id="special-dev-button" @click="setResourceInput(randomNumber(10,300),'fuel')">Random</a>
                    </div>
                    <div id="dev-button-row">
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(-10,'fuel')" :disabled="resources['fuel'] <= 10">-10</a>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(10,'fuel')" :disabled="resources['fuel'] >= 300">+10</a>
                        <a class="button is-info" id="special-dev-button" @click="setResourceInput(300,'fuel')">Max</a>
                    </div>
                    <div>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(-100,'fuel')" :disabled="resources['fuel'] <= 10">-100</a>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(100,'fuel')" :disabled="resources['fuel'] >= 300">+100</a>
                        <a class="button is-info" id="special-dev-button" @click="setResourceInput(10,'fuel')">Reset</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="box" id="dev-box">
                <img src="/assets/icons/resource/Steel.png" height="30" width="30" style="vertical-align:middle;">
                <span id="white-text">
                    Steel
                </span>
                <div id="container">
                    <div>
                        <input class="input" type="number" min="10" max="300" v-model="resources['steel']" @input="setResourceInput($event.target.value,'steel')">
                    </div>
                    <br />
                    <div id="dev-button-row">
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(-1,'steel')" :disabled="resources['steel'] <= 10">-1</a>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(1,'steel')" :disabled="resources['steel'] >= 300">+1</a>
                        <a class="button is-info" id="special-dev-button" @click="setResourceInput(randomNumber(10,300),'steel')">Random</a>
                    </div>
                    <div id="dev-button-row">
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(-10,'steel')" :disabled="resources['steel'] <= 10">-10</a>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(10,'steel')" :disabled="resources['steel'] >= 300">+10</a>
                        <a class="button is-info" id="special-dev-button" @click="setResourceInput(300,'steel')">Max</a>
                    </div>
                    <div>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(-100,'steel')" :disabled="resources['steel'] <= 10">-100</a>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(100,'steel')" :disabled="resources['steel'] >= 300">+100</a>
                        <a class="button is-info" id="special-dev-button" @click="setResourceInput(10,'steel')">Reset</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" style="display:inline-block;">
            <div class="box" id="dev-box">
                <img src="/assets/icons/resource/Ammo.png" height="30" width="30" style="vertical-align:middle;">
                <span id="white-text">
                    Ammo
                </span>
                <div id="container">
                    <div>
                        <input class="input" type="number" min="10" max="300" v-model="resources['ammo']" @input="setResourceInput($event.target.value,'ammo')">
                    </div>
                    <br />
                    <div id="dev-button-row">
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(-1,'ammo')" :disabled="resources['ammo'] <= 10">-1</a>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(1,'ammo')" :disabled="resources['ammo'] >= 300">+1</a>
                        <a class="button is-info" id="special-dev-button" @click="setResourceInput(randomNumber(10,300),'ammo')">Random</a>
                    </div>
                    <div id="dev-button-row">
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(-10,'ammo')" :disabled="resources['ammo'] <= 10">-10</a>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(10,'ammo')" :disabled="resources['ammo'] >= 300">+10</a>
                        <a class="button is-info" id="special-dev-button" @click="setResourceInput(300,'ammo')">Max</a>
                    </div>
                    <div>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(-100,'ammo')" :disabled="resources['ammo'] <= 10">-100</a>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(100,'ammo')" :disabled="resources['ammo'] >= 300">+100</a>
                        <a class="button is-info" id="special-dev-button" @click="setResourceInput(10,'ammo')">Reset</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="box" id="dev-box">
                <img src="/assets/icons/resource/Bauxite.png" height="30" width="30" style="vertical-align:middle;">
                <span id="white-text">
                    Bauxite
                </span>
                <div id="container">
                    <div>
                        <input class="input" type="number" min="10" max="300" v-model="resources['bauxite']" @input="setResourceInput($event.target.value,'bauxite')">
                    </div>
                    <br />
                    <div id="dev-button-row">
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(-1,'bauxite')" :disabled="resources['bauxite'] <= 10">-1</a>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(1,'bauxite')" :disabled="resources['bauxite'] >= 300">+1</a>
                        <a class="button is-info" id="special-dev-button" @click="setResourceInput(randomNumber(10,300),'bauxite')">Random</a>
                    </div>
                    <div id="dev-button-row">
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(-10,'bauxite')" :disabled="resources['bauxite'] <= 10">-10</a>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(10,'bauxite')" :disabled="resources['bauxite'] >= 300">+10</a>
                        <a class="button is-info" id="special-dev-button" @click="setResourceInput(300,'bauxite')">Max</a>
                    </div>
                    <div>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(-100,'bauxite')" :disabled="resources['bauxite'] <= 10">-100</a>
                        <a class="button is-info" id="dev-button" @click="changeResourceInput(100,'bauxite')" :disabled="resources['bauxite'] >= 300">+100</a>
                        <a class="button is-info" id="special-dev-button" @click="setResourceInput(10,'bauxite')">Reset</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br />
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th>EquipCard</th>
                    <th>Name</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th>EquipCard</th>
                    <th>Name</th>
                    <th>Rate</th>
                </tr>
            </tfoot>
            <tbody>

            </tbody>
        </table>
    </div>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            shiptype: undefined,
            resources: {
                "fuel": 10,
                "ammo": 10,
                "steel": 10,
                "bauxite": 10
            }
        }
    },
    methods: {
        changeResourceInput(value, type){
            this.resources[type] = this.resources[type] + value;
            if(this.resources[type] < 10){
                this.resources[type] = 10;
            }
            else if(this.resources[type] > 300){
                this.resources[type] = 300;
            }
        },
        setResourceInput(value, type){
            this.resources[type] = value;
            if(this.resources[type] < 10){
                this.resources[type] = 10;
            }
            else if(this.resources[type] > 300){
                this.resources[type] = 300;
            }
        },
        randomNumber(min,max){
            return Math.floor(Math.random() * (max - min) + 1) + min; 
        }
    }
}
</script>

<style>
    #dev-box{
        margin: 2%;
        width: 90%;
        background-color: #696969;
        border: 1px solid silver;
    }
    #dev-button-row{
        margin-bottom:7px;
    }
    #dev-button{
        margin-left: 5px;
        margin-right: 5px;
        width:20%;
    }
    #special-dev-button{
        margin-left: 5px;
        margin-right: 5px;
        width: 30%;
        float:right;
    }
    #white-text{
        color: #FFFFFF;
        vertical-align: middle;
    }
    #align-center{
        align-content:center;
    }
</style>
