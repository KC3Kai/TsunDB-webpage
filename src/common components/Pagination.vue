<template>
<div class="container">
    <br />
    <nav class="pagination" role="navigation" aria-label="pagination">
    <ul class="pagination-list">
        <template v-if="page < 2">
        <li>
            <a class="pagination-link is-current" v-if="page == 0" aria-label="1" aria-current="page">1</a>
            <a class="pagination-link" v-else aria-label="1" @click="changePage(0)">1</a>
        </li>
        <li>
            <a class="pagination-link is-current" v-if="page == 1" aria-label="To 2" aria-current="page">2</a>
            <a class="pagination-link" v-else aria-label="To 2" @click="changePage(1)">2</a>
        </li>
        <li>
            <a class="pagination-link" aria-label="To 3" @click="changePage(2)">3</a>
        </li>
        </template>
        <template v-else>
        <li>
            <a class="pagination-link" aria-label="To 1" @click="changePage(0)">1</a>
        </li>
        <li>
            <span class="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
            <a class="pagination-link" aria-label="To Previous" @click="changePage(parseInt(page)-1)">{{parseInt(page)}}</a>
        </li>
        <li>
            <a class="pagination-link is-current" aria-label="46" aria-current="page">{{page+1}}</a>
        </li>
        <li>
            <a class="pagination-link" aria-label="To Next" @click="changePage(parseInt(page)+1)">{{parseInt(page)+2}}</a>
        </li>
        <li>
            <span class="pagination-ellipsis">&hellip;</span>
        </li>
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
    data: function() {
        return {
            page: 0,
            max: undefined
        };
    },
    methods: {
        changePage(page){
            this.page = page;
            this.$emit("pageChanged", page);
        },
        jumpPage(event){
            this.page = parseInt(event.target.value)-1;
            if(this.page < 0 || this.page == undefined || isNaN(this.page)){
                this.page = 0;
            }
            this.$emit("pageChanged", this.page);
        }
    }
}
</script>

<style>

</style>
