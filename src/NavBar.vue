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
                    <a class="navbar-item" href="#" @click="setMap('1-1')">
                        1-1
                    </a>
                    <a class="navbar-item" href="#" @click="setMap('1-2')">
                        1-2
                    </a>
                    <a class="navbar-item" href="#" @click="setMap('1-3')">
                        1-3
                    </a>
                    <a class="navbar-item" href="#" @click="setMap('1-4')">
                        1-4
                    </a>
                    <a class="navbar-item" href="#" @click="setMap('1-5')">
                        1-5
                    </a>
                    <a class="navbar-item" href="#" @click="setMap('1-6')">
                        1-6
                    </a>
                </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
                <span class="navbar-item">
                    World 2
                </span>
                <div class="navbar-dropdown is-boxed">
                    <a class="navbar-item" href="#" @click="setMap('2-1')">
                        2-1
                    </a>
                    <a class="navbar-item" href="#" @click="setMap('2-2')">
                        2-2
                    </a>
                    <a class="navbar-item" href="#" @click="setMap('2-3')">
                        2-3
                    </a>
                    <a class="navbar-item" href="#" @click="setMap('2-4')">
                        2-4
                    </a>
                    <a class="navbar-item" href="#" @click="setMap('2-5')">
                        2-5
                    </a>
                </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
                <span class="navbar-item">
                    World 3
                </span>
                <div class="navbar-dropdown is-boxed">
                    <a class="navbar-item" href="#" @click="setMap('3-1')">
                        3-1
                    </a>
                    <a class="navbar-item" href="#" @click="setMap('3-2')">
                        3-2
                    </a>
                    <a class="navbar-item" href="#" @click="setMap('3-3')">
                        3-3
                    </a>
                    <a class="navbar-item" href="#" @click="setMap('3-4')">
                        3-4
                    </a>
                    <a class="navbar-item" href="#" @click="setMap('3-5')">
                        3-5
                    </a>
                </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
                <span class="navbar-item">
                    World 4
                </span>
                <div class="navbar-dropdown is-boxed">
                    <a class="navbar-item" href="#" @click="setMap('4-1')">
                        4-1
                    </a>
                    <a class="navbar-item" href="#" @click="setMap('4-2')">
                        4-2
                    </a>
                    <a class="navbar-item" href="#" @click="setMap('4-3')">
                        4-3
                    </a>
                    <a class="navbar-item" href="#" @click="setMap('4-4')">
                        4-4
                    </a>
                    <a class="navbar-item" href="#" @click="setMap('4-5')">
                        4-5
                    </a>
                </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
                <span class="navbar-item">
                    World 5
                </span>
                <div class="navbar-dropdown is-boxed">
                    <a class="navbar-item" href="#" @click="setMap('5-1')">
                        5-1
                    </a>
                    <a class="navbar-item" href="#" @click="setMap('5-2')">
                        5-2
                    </a>
                    <a class="navbar-item" href="#" @click="setMap('5-3')">
                        5-3
                    </a>
                    <a class="navbar-item" href="#" @click="setMap('5-4')">
                        5-4
                    </a>
                    <a class="navbar-item" href="#" @click="setMap('5-5')">
                        5-5
                    </a>
                </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
                <span class="navbar-item">
                    World 6
                </span>
                <div class="navbar-dropdown is-boxed">
                    <a class="navbar-item" href="#" @click="setMap('6-1')">
                        6-1
                    </a>
                    <a class="navbar-item" href="#" @click="setMap('6-2')">
                        6-2
                    </a>
                    <a class="navbar-item" href="#" @click="setMap('6-3')">
                        6-3
                    </a>
                    <a class="navbar-item" href="#" @click="setMap('6-4')">
                        6-4
                    </a>
                    <a class="navbar-item" href="#" @click="setMap('6-5')">
                        6-5
                    </a>
                </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
                <span class="navbar-item">
                    Fall 2017
                </span>
                <div class="navbar-dropdown is-boxed">
                    <a class="navbar-item" href="#">
                        E-1
                    </a>
                    <a class="navbar-item" href="#">
                        E-2
                    </a>
                    <a class="navbar-item" href="#">
                        E-3
                    </a>
                    <a class="navbar-item" href="#">
                        E-4
                    </a>
                </div>
            </div>
        </div>
    </div>
</nav>
</template>
<script>
export default {
  data: function() {
      return {
          map: undefined
      }
  },
  methods: {
      setMap(map){
          this.map = map;
          this.$emit("mapIsSet", this.map);
      }
  }
}
</script>

<style>

</style>
