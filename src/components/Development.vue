<template>
<div class="container">
    <p class="title is-spaced">
        Development - How it works
    </p>
    <div class="content">
        <p class="subtitle">
            Step 1
        </p>
        <p class="box">
            In development, there exists 3 categories from which you can get an equipment from.<br />
            This category is decided by the ship type of your main flagship (secretary):
            <ul>
                <li><strong>Category Torpedo</strong> - DE, DD, CL, CLT, SS, AP, CT or AO</li>
                <li><strong>Category Heavy</strong> - CA, FBB, BB, XBB or AR</li>
                <li><strong>Category Aviation</strong> - CAV, CVL, BBV, CV, SSV, AV, LHA, CVB or AS</li>
            </ul>
            Each category has 3 equipment pools and which pool is selected depends on the primary resource.<br />
            The order is Fuel/Steel > Ammo > Bauxite in case there are multiple primary resources.<br /><br />
            <strong>Note:</strong> The category names are not official, they are there for the sake of simplicity.
        </p>
    </div>
    <div class="content">
        <p class="subtitle">
            Step 2
        </p>
        <p class="box">
            When you start a development, a random item in the pool will be selected. Each pool always has 50 equipment listed, but keep in mind an equipment can appear multiple times in said pool (hence why some equipment has 2% rate and others might have 6%). When an item is selected, the following requirements will be checked:
            <ul>
                <li>Is the resource input at least 10x the scrap value of the selected equipment?</li>
                <li>Is your HQ level at least 10x the rarity of the selected equipment?</li>
                <ul>
                    <li><abbr title="Common"><strong>コモン</strong></abbr> - HQ 0+</li>
                    <li><abbr title="Rare"><strong>レア</strong></abbr> - HQ 10+</li>
                    <li><abbr title="Holo"><strong>ホロ</strong></abbr> - HQ 20+</li>
                    <li><abbr title="S Holo"><strong>Sホロ</strong></abbr> - HQ 30+</li>
                </ul>
            </ul>
            Failure to meet all of the above requirements will result in a penguin.<br />
            <strong>Note:</strong> Inputting max resources for everything will not increase your chances of obtaining the equipment you want, but it does effectively prevent you from getting any penguins.
        </p>
    </div>
    <div class="content">
        <p class="subtitle">
            Special Equipment
        </p>
        <p class="box">
            Special equipment like Ro.43 or the Type 96 Land-Base Attack Aircraft are normally not included in the pool and requires fulfilling some specific requirements in order to include them.<br />
            The following equipment are known cases:
            <ul>
                <li><strong>Ro.43</strong> - Requires an Italian ship secretary and Bauxite Primary.</li>
                <li><strong>Type 96 Land-Based Aircraft</strong> - At least 240+ fuel, 260+ ammo and 250+ bauxite. Ammo or Bauxite Primary in Category Aviation.</li>
            </ul>
            <strong>Warning:</strong><br /> As a pool can never exceed 50 items, including these special equipment into the pool will effectively overwrite some existing items instead. This is usually negligible, but keep in mind that some equipment can possibly stop appearing as a result due to this.
        </p>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
