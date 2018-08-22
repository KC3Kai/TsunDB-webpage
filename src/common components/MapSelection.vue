<template>
    <div class="container">
        <div class="dropdown is-active">
            <div class="dropdown-trigger">
                <button class="button" @click="toggleList(1)">
                    <span>
                        World 1
                    </span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" v-if="world == 1">
                <div class="dropdown-content">
                    <a class="dropdown-item" @click="mapSelected('1-1')">
                        1-1
                    </a>
                    <a class="dropdown-item" @click="mapSelected('1-2')">
                        1-2
                    </a>
                    <a class="dropdown-item" @click="mapSelected('1-3')">
                        1-3
                    </a>
                    <a class="dropdown-item" @click="mapSelected('1-4')">
                        1-4
                    </a>
                    <a class="dropdown-item" @click="mapSelected('1-5')">
                        1-5
                    </a>
                    <a class="dropdown-item" @click="mapSelected('1-6')">
                        1-6
                    </a>
                </div>
            </div>
        </div>
        <div class="dropdown is-active">
            <div class="dropdown-trigger">
                <button class="button" @click="toggleList(2)">
                    <span>
                        World 2
                    </span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" v-if="world == 2">
                <div class="dropdown-content">
                    <a class="dropdown-item" @click="mapSelected('2-1')">
                        2-1
                    </a>
                    <a class="dropdown-item" @click="mapSelected('2-2')">
                        2-2
                    </a>
                    <a class="dropdown-item" @click="mapSelected('2-3')">
                        2-3
                    </a>
                    <a class="dropdown-item" @click="mapSelected('2-4')">
                        2-4
                    </a>
                    <a class="dropdown-item" @click="mapSelected('2-5')">
                        2-5
                    </a>
                </div>
            </div>
        </div>
        <div class="dropdown is-active">
            <div class="dropdown-trigger">
                <button class="button" @click="toggleList(3)">
                    <span>
                        World 3
                    </span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" v-if="world == 3">
                <div class="dropdown-content">
                    <a class="dropdown-item" @click="mapSelected('3-1')">
                        3-1
                    </a>
                    <a class="dropdown-item" @click="mapSelected('3-2')">
                        3-2
                    </a>
                    <a class="dropdown-item" @click="mapSelected('3-3')">
                        3-3
                    </a>
                    <a class="dropdown-item" @click="mapSelected('3-4')">
                        3-4
                    </a>
                    <a class="dropdown-item" @click="mapSelected('3-5')">
                        3-5
                    </a>
                </div>
            </div>
        </div>
        <div class="dropdown is-active">
            <div class="dropdown-trigger">
                <button class="button" @click="toggleList(7)">
                    <span>
                        World 7
                    </span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" v-if="world == 7">
                <div class="dropdown-content">
                    <a class="dropdown-item" @click="mapSelected('7-1')">
                        7-1
                    </a>
                </div>
            </div>
        </div>
        <div class="dropdown is-active">
            <div class="dropdown-trigger">
                <button class="button" @click="toggleList(4)">
                    <span>
                        World 4
                    </span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" v-if="world == 4">
                <div class="dropdown-content">
                    <a class="dropdown-item" @click="mapSelected('4-1')">
                        4-1
                    </a>
                    <a class="dropdown-item" @click="mapSelected('4-2')">
                        4-2
                    </a>
                    <a class="dropdown-item" @click="mapSelected('4-3')">
                        4-3
                    </a>
                    <a class="dropdown-item" @click="mapSelected('4-4')">
                        4-4
                    </a>
                    <a class="dropdown-item" @click="mapSelected('4-5')">
                        4-5
                    </a>
                </div>
            </div>
        </div>
        <div class="dropdown is-active">
            <div class="dropdown-trigger">
                <button class="button" @click="toggleList(5)">
                    <span>
                        World 5
                    </span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" v-if="world == 5">
                <div class="dropdown-content">
                    <a class="dropdown-item" @click="mapSelected('5-1')">
                        5-1
                    </a>
                    <a class="dropdown-item" @click="mapSelected('5-2')">
                        5-2
                    </a>
                    <a class="dropdown-item" @click="mapSelected('5-3')">
                        5-3
                    </a>
                    <a class="dropdown-item" @click="mapSelected('5-4')">
                        5-4
                    </a>
                    <a class="dropdown-item" @click="mapSelected('5-5')">
                        5-5
                    </a>
                </div>
            </div>
        </div>
        <div class="dropdown is-active">
            <div class="dropdown-trigger">
                <button class="button" @click="toggleList(6)">
                    <span>
                        World 6
                    </span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" v-if="world == 6">
                <div class="dropdown-content">
                    <a class="dropdown-item" @click="mapSelected('6-1')">
                        6-1
                    </a>
                    <a class="dropdown-item" @click="mapSelected('6-2')">
                        6-2
                    </a>
                    <a class="dropdown-item" @click="mapSelected('6-3')">
                        6-3
                    </a>
                    <a class="dropdown-item" @click="mapSelected('6-4')">
                        6-4
                    </a>
                    <a class="dropdown-item" @click="mapSelected('6-5')">
                        6-5
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            world: undefined
        };
    },
    methods: {
        toggleList(world) {
            (world == this.world) ? this.world = undefined : this.world = world;
        },
        mapSelected(map) {
            this.world = undefined;
            this.$emit("mapIsSet", map);
        }
    }
}
</script>

<style>

</style>