<template>
    <div class="container">
        <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>
                        World 1
                    </span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    <router-link class="dropdown-item" :to="returnPath('1-1')">
                        1-1
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('1-2')">
                        1-2
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('1-3')">
                        1-3
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('1-4')">
                        1-4
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('1-5')">
                        1-5
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('1-6')">
                        1-6
                    </router-link>
                </div>
            </div>
        </div>
        <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>
                        World 2
                    </span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    <router-link class="dropdown-item" :to="returnPath('2-1')">
                        2-1
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('2-2')">
                        2-2
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('2-3')">
                        2-3
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('2-4')">
                        2-4
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('2-5')">
                        2-5
                    </router-link>
                </div>
            </div>
        </div>
        <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>
                        World 3
                    </span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    <router-link class="dropdown-item" :to="returnPath('3-1')">
                        3-1
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('3-2')">
                        3-2
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('3-3')">
                        3-3
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('3-4')">
                        3-4
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('3-5')">
                        3-5
                    </router-link>
                </div>
            </div>
        </div>
        <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>
                        World 7
                    </span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    <router-link class="dropdown-item" :to="returnPath('7-1')">
                        7-1
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('7-2')">
                        7-2
                    </router-link>
                </div>
            </div>
        </div>
        <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>
                        World 4
                    </span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    <router-link class="dropdown-item" :to="returnPath('4-1')">
                        4-1
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('4-2')">
                        4-2
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('4-3')">
                        4-3
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('4-4')">
                        4-4
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('4-5')">
                        4-5
                    </router-link>
                </div>
            </div>
        </div>
        <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>
                        World 5
                    </span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    <router-link class="dropdown-item" :to="returnPath('5-1')">
                        5-1
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('5-2')">
                        5-2
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('5-3')">
                        5-3
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('5-4')">
                        5-4
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('5-5')">
                        5-5
                    </router-link>
                </div>
            </div>
        </div>
        <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>
                        World 6
                    </span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    <router-link class="dropdown-item" :to="returnPath('6-1')">
                        6-1
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('6-2')">
                        6-2
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('6-3')">
                        6-3
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('6-4')">
                        6-4
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('6-5')">
                        6-5
                    </router-link>
                </div>
            </div>
        </div>
        <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>
                        Rainy Summer 2020
                    </span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    <router-link class="dropdown-item" :to="returnPath('48-1')">
                        E-1
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('48-2')">
                        E-2
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('48-3')">
                        E-3
                    </router-link>
                    <router-link class="dropdown-item" :to="returnPath('48-4')">
                        E-4
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['path'],
    methods:{
        returnPath(id){
            return `/${this.path}?map=${id}`;
        }
    }
}
</script>

<style>

</style>