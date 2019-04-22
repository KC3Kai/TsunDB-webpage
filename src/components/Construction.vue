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
            Each group has exactly 100 unique ships and the available pools remains the same regardless of which flagship (secretary) you use for construction. <br />
            The selection of a pool is based on the resource input during the construction:
            <ul>
                <li><strong>Pool 1</strong> - <img style="vertical-align:middle;" :src="getResourceIcon('fuel')" width="30" height="30">300+<img style="vertical-align:middle;" :src="getResourceIcon('steel')" width="30" height="30">400+<img style="vertical-align:middle;" :src="getResourceIcon('bauxite')" width="30" height="30">300+</li>
                <li><strong>Pool 2</strong> - <img style="vertical-align:middle;" :src="getResourceIcon('fuel')" width="30" height="30">400+<img style="vertical-align:middle;" :src="getResourceIcon('steel')" width="30" height="30">600+</li>
                <li><strong>Pool 3</strong> - <img style="vertical-align:middle;" :src="getResourceIcon('fuel')" width="30" height="30">250+<img style="vertical-align:middle;" :src="getResourceIcon('steel')" width="30" height="30">200+</li>
                <li><strong>Pool 4</strong> - Do not meet any of the above requirements.</li>
            </ul>
            <strong>Note:</strong> Keep in mind that the check is done from top to bottom. If the requirements of multiple pools are fulfilled, only the the topmost one is used.
        </p>
        <p class="subtitle">
            Step 2a
        </p>
        <p class="box">
            Once you start a construction, a random ship will be selected based on a formula using 2 values that are generated.<br />
            For reference and simplicity, the values will be referred as <strong>Random1</strong>, <strong>Random2</strong>, <strong>Res</strong> and <strong>ID</strong>. <br /><br />
            Value <strong>Random1</strong> is a random number that is generated between 0 and 100. <br />
            Value <strong>Random2</strong> is also a random number, but this one is generated between 0 and value <strong>Res</strong>. The resulting value is subtracted by 1 if it's higher than 0.<br />
            Value <strong>Res</strong> is a number that can be incremented by having <abbr title="due to negative values always being converted back to positive">low</abbr>/high resource inputs of certain types.<br />
            Value <strong>ID</strong> is the value achieved by subtracting value <strong>Random1</strong> with <strong>Random2</strong>. This value is what determines which ship you will get in the end.<br />
            In case value <strong>ID</strong> becomes 0 or negative, the value will be converted back into a positive value and incremented by 2.<br /><br />
            Which resources that are used to increment value <strong>Res</strong> is dependent on the pool that has been selected.<br />
            For those who are unfamiliar with math operators, <strong>ceil</strong> means round decimals upwards and <strong><abbr title="absolute">abs</abbr></strong> means the number always returns positive.
            <ul>
                <li><strong>Pool 1</strong>: <img style="vertical-align:middle;" :src="getResourceIcon('steel')" width="30" height="30"><img style="vertical-align:middle;" :src="getResourceIcon('bauxite')" width="30" height="30"></li>
                <ul>
                    <li><img style="vertical-align:middle;" src="https://latex.codecogs.com/gif.latex?Res=\operatorname{ceil} \left( \frac{\operatorname{abs} \left ( \text{Steel} - 400 \right )}{25} \right)+\operatorname{ceil} \left( \frac{\operatorname{abs} \left ( \text{Baux} - 300 \right )}{20} \right)" /></li>
                </ul>
                <li><strong>Pool 2</strong>: <img style="vertical-align:middle;" :src="getResourceIcon('ammo')" width="30" height="30"><img style="vertical-align:middle;" :src="getResourceIcon('steel')" width="30" height="30"></li>
                <ul>
                    <li><img style="vertical-align:middle;" src="https://latex.codecogs.com/gif.latex?Res=\operatorname{ceil} \left( \frac{\operatorname{abs} \left ( \text{Ammo} - 400 \right )}{25} \right)+\operatorname{ceil} \left( \frac{\operatorname{abs} \left ( \text{Steel} - 600 \right )}{30} \right)" /></li>
                </ul>
                <li><strong>Pool 3</strong>: <img style="vertical-align:middle;" :src="getResourceIcon('ammo')" width="30" height="30"><img style="vertical-align:middle;" :src="getResourceIcon('steel')" width="30" height="30"></li>
                <ul>
                    <li><img style="vertical-align:middle;" src="https://latex.codecogs.com/gif.latex?Res=\operatorname{ceil} \left( \frac{\operatorname{abs} \left ( \text{Ammo} - 200 \right )}{13} \right)+\operatorname{ceil} \left( \frac{\operatorname{abs} \left ( \text{Input} - 200 \right )}{20} \right)" /></li>
                </ul>
                <li><strong>Pool 4</strong>: <img style="vertical-align:middle;" :src="getResourceIcon('fuel')" width="30" height="30"><img style="vertical-align:middle;" :src="getResourceIcon('steel')" width="30" height="30"></li>
                <ul>
                    <li><img style="vertical-align:middle;" src="https://latex.codecogs.com/gif.latex?Res=\operatorname{ceil} \left( \frac{\operatorname{abs} \left ( \text{Fuel} - 100 \right )}{10} \right)+\operatorname{ceil} \left( \frac{\operatorname{abs} \left ( \text{Steel} - 30 \right )}{15} \right)" /></li>
                </ul>
            </ul>
            <strong>Note:</strong> Keep in mind that 51 is the maximum for <strong>Res</strong>.
        </p>
        <p class="subtitle">
            Step 2b (Example 1)
        </p>
        <p class="box">
            Still working on it...
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
