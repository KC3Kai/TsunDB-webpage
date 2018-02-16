<template>
<nav class="navbar is-transparent" id="app">
    <div class="navbar-brand">
        <a class="navbar-item" href="">
            TsunShip
        </a>
    </div>
    <div class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item" href="">
                Home
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
                <span class="navbar-item">
                    World 1
                </span>
                <div class="navbar-dropdown is-boxed">
                    <a class="navbar-item" @click="setMap('1-1', false)">
                        1-1
                    </a>
                    <a class="navbar-item" @click="setMap('1-2', false)">
                        1-2
                    </a>
                    <a class="navbar-item" @click="setMap('1-3', false)">
                        1-3
                    </a>
                    <a class="navbar-item" @click="setMap('1-4', false)">
                        1-4
                    </a>
                    <a class="navbar-item" @click="setMap('1-5', false)">
                        1-5
                    </a>
                    <a class="navbar-item" @click="setMap('1-6', false)">
                        1-6
                    </a>
                </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
                <span class="navbar-item">
                    World 2
                </span>
                <div class="navbar-dropdown is-boxed">
                    <a class="navbar-item" @click="setMap('2-1', false)">
                        2-1
                    </a>
                    <a class="navbar-item" @click="setMap('2-2', false)">
                        2-2
                    </a>
                    <a class="navbar-item" @click="setMap('2-3', false)">
                        2-3
                    </a>
                    <a class="navbar-item" @click="setMap('2-4', false)">
                        2-4
                    </a>
                    <a class="navbar-item" @click="setMap('2-5', false)">
                        2-5
                    </a>
                </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
                <span class="navbar-item">
                    World 3
                </span>
                <div class="navbar-dropdown is-boxed">
                    <a class="navbar-item" @click="setMap('3-1', false)">
                        3-1
                    </a>
                    <a class="navbar-item" @click="setMap('3-2', false)">
                        3-2
                    </a>
                    <a class="navbar-item" @click="setMap('3-3', false)">
                        3-3
                    </a>
                    <a class="navbar-item" @click="setMap('3-4', false)">
                        3-4
                    </a>
                    <a class="navbar-item" @click="setMap('3-5', false)">
                        3-5
                    </a>
                </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
                <span class="navbar-item">
                    World 4
                </span>
                <div class="navbar-dropdown is-boxed">
                    <a class="navbar-item" @click="setMap('4-1', false)">
                        4-1
                    </a>
                    <a class="navbar-item" @click="setMap('4-2', false)">
                        4-2
                    </a>
                    <a class="navbar-item" @click="setMap('4-3', false)">
                        4-3
                    </a>
                    <a class="navbar-item" @click="setMap('4-4', false)">
                        4-4
                    </a>
                    <a class="navbar-item" @click="setMap('4-5', false)">
                        4-5
                    </a>
                </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
                <span class="navbar-item">
                    World 5
                </span>
                <div class="navbar-dropdown is-boxed">
                    <a class="navbar-item" @click="setMap('5-1', false)">
                        5-1
                    </a>
                    <a class="navbar-item" @click="setMap('5-2', false)">
                        5-2
                    </a>
                    <a class="navbar-item" @click="setMap('5-3', false)">
                        5-3
                    </a>
                    <a class="navbar-item" @click="setMap('5-4', false)">
                        5-4
                    </a>
                    <a class="navbar-item" @click="setMap('5-5', false)">
                        5-5
                    </a>
                </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
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
            <div class="navbar-item has-dropdown is-hoverable">
                <span class="navbar-item">
                    Fall 2017
                </span>
                <div class="navbar-dropdown is-boxed">
                    <a class="navbar-item" @click="setMap('40-1', true)">
                        E-1
                    </a>
                    <a class="navbar-item" @click="setMap('40-2', true)">
                        E-2
                    </a>
                    <a class="navbar-item" @click="setMap('40-3', true)">
                        E-3
                    </a>
                    <a class="navbar-item" @click="setMap('40-4', true)">
                        E-4
                    </a>
                </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
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
        </div>
    </div>
</nav>
</template>
<script>
export default {
  methods: {
      setMap(map, mapType){
          this.$emit("mapIsSet", [map,mapType]);
      }
  }
}
</script>

<style>

</style>
