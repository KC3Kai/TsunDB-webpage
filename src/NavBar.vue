<template>
<nav class="navbar" id="app">
        <div class="navbar-brand">
            <a class="navbar-item" id="item" @click="setTool(0)">
                <img src="/assets/icons/navicon.png" alt="TsunDB">
            </a>
            <span class="navbar-burger" data-target="navMenu" v-bind:class="{ 'is-active': navActive }" @click="toggleNavState()">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>
        <div id="navMenu" class="navbar-menu" v-bind:class="{ 'is-active': navActive }">
            <a class="navbar-item" id="item" @click="setTool(1)">
                Routing
            </a>
            <a class="navbar-item" id="item" @click="setTool(2)">
                Drop
            </a>
            <a class="navbar-item" id="item" @click="setTool(3)">
                Construction
            </a>
            <a class="navbar-item" id="item" @click="setTool(4)">
                Development
            </a>
            <a class="navbar-item" id="item" @click="setTool(5)">
                The Setting Tsun
            </a>
            <a class="navbar-item" id="item" @click="setTool(6)">
                The Rising Tsun
            </a>
        </div>
        
        <!--
        <div class="navbar-item has-dropdown is-hoverable" id="align">
            <span class="navbar-item">
                World 6
            </span>
            <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" @click="setMap('6-1', false)">
                    6-1
                </a>
                <a class="navbar-item" @click="setMap('6-2', false)">
                    6-2
                </a>
                <a class="navbar-item" @click="setMap('6-3', false)">
                    6-3
                </a>
                <a class="navbar-item" @click="setMap('6-4', false)">
                    6-4
                </a>
                <a class="navbar-item" @click="setMap('6-5', false)">
                    6-5
                </a>
            </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable" id="align">
            <span class="navbar-item">
                Winter 2018
            </span>
            <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" @click="setMap('41-1', true)">
                    E-1
                </a>
                <a class="navbar-item" @click="setMap('41-2', true)">
                    E-2
                </a>
                <a class="navbar-item" @click="setMap('41-3', true)">
                    E-3
                </a>
                <a class="navbar-item" @click="setMap('41-4', true)">
                    E-4
                </a>
                <a class="navbar-item" @click="setMap('41-5', true)">
                    E-5
                </a>
                <a class="navbar-item" @click="setMap('41-6', true)">
                    E-6
                </a>
                <a class="navbar-item" @click="setMap('41-7', true)">
                    E-7
                </a>
            </div>
        </div>
        -->
</nav>
</template>

<script>
export default {
    data: function() {
        return {
            tool: 0,
            navActive: false
        };
    },
    methods: {
        setTool(id){
            this.tool = id;
            this.$emit("toolIsSet", id);
        },
        toggleNavState() {
            this.navActive = !this.navActive
        }
    }
}
</script>

<style>
    #item{
        color:#999999;
    }
    #item:hover{
        color:#F0F0F0;
        background-color:#222222;
    }
    #itemselected{
        color:#999999;
        background-color:#222222;
    }
</style>
