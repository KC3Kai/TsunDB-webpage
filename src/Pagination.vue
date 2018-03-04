<template>
<div class="container">
    <nav class="pagination" role="navigation" aria-label="pagination">
    <ul class="pagination-list">
        <template v-if="page < 3">
        <li>
            <a class="pagination-link is-current" v-if="page == 1" aria-label="1" aria-current="page">1</a>
            <a class="pagination-link" v-else aria-label="1" @click="changePage(1)">1</a>
        </li>
        <li>
            <a class="pagination-link is-current" v-if="page == 2" aria-label="To 2" aria-current="page">2</a>
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
            <a class="pagination-link" aria-label="To Previous" @click="changePage(parseInt(page)-1)">{{parseInt(page)-1}}</a>
        </li>
        <li>
            <a class="pagination-link is-current" aria-label="46" aria-current="page">{{page}}</a>
        </li>
        <li>
            <a class="pagination-link" aria-label="To Next" @click="changePage(parseInt(page)+1)">{{parseInt(page)+1}}</a>
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
    props: ['page','max'],
    methods: {
        changePage(page){
            this.$emit("pageChanged", page-1);
        },
        jumpPage(event){
            this.$emit("pageChanged", event.target.value);
        }
    }
}
</script>

<style>

</style>
