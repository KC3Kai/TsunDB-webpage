<template>
    <nav class="navbar is-transparent" role="navigiation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
                <img src="./../../../assets/icons/navicon.png" alt="TsunDB">
            </router-link>
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" v-on:click="showNav = !showNav" :class="{'is-active' : showNav}">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navMenu" class="navbar-menu" :class="{'is-active' : showNav}">
            <div class="navbar-start">
                <router-link class="navbar-item" :to="{ path: '/routing' }">
                    Routing
                </router-link>
                <div class="navbar-item has-dropdown is-hoverable">
                    <router-link class="navbar-item" :to="{ path: '/drop/maps' }">
                        Ship Drop
                    </router-link>
                    <div class="navbar-dropdown" is-boxed>
                        <router-link class="navbar-item" :to="{ path: '/drop/maps' }">
                            Map Based
                        </router-link>
                        <router-link class="navbar-item" :to="{ path: '/drop/search' }">
                            Ship Search
                        </router-link>
                    </div>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                    <router-link class="navbar-item" :to="{ path: '/construction' }">
                        Construction
                    </router-link>
                    <div class="navbar-dropdown" is-boxed>
                        <router-link class="navbar-item" :to="{ path: '/construction' }">
                            How it works
                        </router-link>
                    </div>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                    <router-link class="navbar-item" :to="{ path: '/development' }">
                        Development
                    </router-link>
                    <div class="navbar-dropdown" is-boxed>
                        <router-link class="navbar-item" :to="{ path: '/development' }">
                            How it works
                        </router-link>
                        <router-link class="navbar-item" :to="{ path: '/development/pools' }">
                            Development Pools
                        </router-link>
                        <router-link class="navbar-item" :to="{ path: '/development/sandbox' }">
                            Development Sandbox
                        </router-link>
                        <router-link class="navbar-item" :to="{ path: '/development/builder' }">
                            Recipe Builder
                        </router-link>
                    </div>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                    <router-link class="navbar-item" :to="{ path: '/dusk' }">
                        The Setting Tsun
                    </router-link>
                    <div class="navbar-dropdown" is-boxed>
                        <router-link class="navbar-item" :to="{ path: '/dusk/timers' }">
                            Timers
                        </router-link>
                        <router-link class="navbar-item" :to="{ path: '/dusk/droplist' }">
                            Ship Drop List Generator
                        </router-link>
                    </div>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                    <router-link class="navbar-item" :to="{ path: '/dawn' }">
                        The Rising Tsun
                    </router-link>
                    <div class="navbar-dropdown" is-boxed>
                        <router-link class="navbar-item" :to="{ path: '/dawn/id_tl' }">
                            Ship/Equip ID Translation
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="navbar-end">
            <a class="navbar-item" href="https://patreon.com/kc3kai" rel="noopener noreferrer" target="_blank">
                <img id="patreon-button" src="./../../../assets/become-a-patron.png">
            </a>
            <router-link class="navbar-item" :to="{ path: '/todo' }">
                To-Do List
            </router-link>
        </div>
    </nav>
</template>

<script>
export default {
    data: function() {
        return {
            showNav: false
        };
    },
    methods: {
        
    }
}
</script>

<style scope>
    .navbar{
        background-color: #222222;
    }
    .navbar-item{
        color:#999999;
    }
    .navbar-item:hover{
        color:#F0F0F0;
        background-color:#222222;
    }
    #nav-toggle-state {
    display: none;
    }

    #nav-toggle-state:checked ~ .nav-menu {
    display: block;
    }

    #patreon-button:hover{
        opacity:0.5;
    }
</style>