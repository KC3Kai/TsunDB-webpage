<template>
<div class="container">
    <p class="title is-spaced">
        Construction - How it works
    </p>
    <div class="content">
        <p class="subtitle">
            Step 1
        </p>
        <p class="box">
            In construction, there exists 4 pools from which you can get a ship from.<br />
            The available pools remains the same regardless of which flagship (secretary) you use for construction. <br />
            The selection of a pool is based on the resource input during the construction:
            <ul>
                <li><strong>Group 1</strong> - <img style="vertical-align:middle;" :src="getResourceIcon('fuel')" width="30" height="30">300+<img style="vertical-align:middle;" :src="getResourceIcon('steel')" width="30" height="30">400+<img style="vertical-align:middle;" :src="getResourceIcon('bauxite')" width="30" height="30">300+</li>
                <li><strong>Group 2</strong> - <img style="vertical-align:middle;" :src="getResourceIcon('fuel')" width="30" height="30">400+<img style="vertical-align:middle;" :src="getResourceIcon('steel')" width="30" height="30">600+</li>
                <li><strong>Group 3</strong> - <img style="vertical-align:middle;" :src="getResourceIcon('fuel')" width="30" height="30">200+<img style="vertical-align:middle;" :src="getResourceIcon('steel')" width="30" height="30">250+</li>
                <li><strong>Group 4</strong> - Do not meet any of the above requirements.</li>
            </ul>
            <strong>Note:</strong> Keep in mind that the check is done from top to bottom. If the requirements of multiple pools are fulfilled, only the the topmost one is used.
        </p>
    </div>
</div>
</template>

<script>
export default {

    methods:{
        getResourceIcon(type){
            return require(`./../../assets/icons/resource/${type}.png`);
        },
    }
}
</script>

<style scoped>

</style>
