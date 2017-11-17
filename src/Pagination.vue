<template>
<div class="container">
    <nav class="pagination" role="navigation" aria-label="pagination">
    <ul class="pagination-list">
        <template v-if="offset < 3">
        <li>
            <a class="pagination-link is-current" v-if="offset == 1" aria-label="1" aria-current="page">1</a>
            <a class="pagination-link" v-else aria-label="1" @click="changePage(1)">1</a>
        </li>
        <li>
            <a class="pagination-link is-current" v-if="offset == 2" aria-label="To 2" aria-current="page">2</a>
            <a class="pagination-link" v-else aria-label="To 2" @click="changePage(2)">2</a>
        </li>
        <li>
            <a class="pagination-link" aria-label="To 3" @click="changePage(3)">3</a>
        </li>
        <!--
        <li>
            <span class="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
            <a class="pagination-link" aria-label="To 100" @click="changePage(100)">100</a>
        </li>
        -->
        </template>
        <!--
        <template v-else-if="offset > 98">
        <li>
            <a class="pagination-link" aria-label="To 1" @click="changePage(1)">1</a>
        </li>
        <li>
            <span class="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
            <a class="pagination-link" aria-label="1" @click="changePage(1)">1</a>
        </li>
        <li>
            <a class="pagination-link is-current" v-if="offset == 99" aria-label="To 99" aria-current="page">99</a>
            <a class="pagination-link" v-else aria-label="To 99" @click="changePage(99)">99</a>
        </li>
        <li>
            <a class="pagination-link is-current" v-if="offset == 100" aria-label="To 100" aria-current="page">100</a>
            <a class="pagination-link" v-else aria-label="To 100" @click="changePage(100)">100</a>
        </li>
        </template>
        -->
        <template v-else>
        <li>
            <a class="pagination-link" aria-label="To 1" @click="changePage(1)">1</a>
        </li>
        <li>
            <span class="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
            <a class="pagination-link" aria-label="To Previous" @click="changePage(parseInt(offset)-1)">{{parseInt(offset)-1}}</a>
        </li>
        <li>
            <a class="pagination-link is-current" aria-label="46" aria-current="page">{{offset}}</a>
        </li>
        <li>
            <a class="pagination-link" aria-label="To Next" @click="changePage(parseInt(offset)+1)">{{parseInt(offset)+1}}</a>
        </li>
        <li>
            <span class="pagination-ellipsis">&hellip;</span>
        </li>
        <!--
        <li>
            <a class="pagination-link" aria-label="To 100" @click="changePage(100)">100</a>
        </li>
        -->
        </template>
        <div>
            <input class="input" type="number" placeholder="Jump to..." @input="jumpPage">
        </div>
    </ul>
    </nav>
</div>
</template>

<script>
export default {
    props: ['offset','max'],
    methods: {
        changePage(offset){
            this.$emit("pageChanged", offset);
        },
        jumpPage(event){
            this.$emit("pageChanged", event.target.value);
        }
    }
}
</script>

<style>

</style>
