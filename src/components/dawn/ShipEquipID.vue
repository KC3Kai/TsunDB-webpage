<template>
<div class="container">
    <p class="title is-spaced">
        Ship/Equip API Translator
    </p>
    <p class="subtitle">
        Translates an API ID to a name and vice versa. Seperate each entry using a comma.
    </p>
    <div class="content">
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label is-pulled-left">Translation</label>
            </div>
            <div class="field-body">
                <div class="field has-addons">
                    <span :class="apiToName ? 'button is-info' : 'button'" @click="toggleDirection(true)">
                        ID --&gt; Name
                    </span>
                    <span :class="!apiToName ? 'button is-info' : 'button'" @click="toggleDirection(false)">
                        Name --&gt; ID
                    </span>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label is-pulled-left">Language</label>
            </div>
            <div class="field-body">
                <div class="field has-addons">
                    <span :class="language == 'en' ? 'button is-info' : 'button'" @click="toggleLanguage('en')">
                        English
                    </span>
                    <span :class="language == 'jp' ? 'button is-info' : 'button'" @click="toggleLanguage('jp')">
                        日本語
                    </span>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label is-pulled-left">Type</label>
            </div>
            <div class="field-body">
                <div class="field has-addons">
                    <span :class="type == 'ship' ? 'button is-info' : 'button'" @click="toggleType('ship')">
                        Ships
                    </span>
                    <span :class="type == 'equip' ? 'button is-info' : 'button'" @click="toggleType('equip')">
                        Equipment
                    </span>
                </div>
            </div>
        </div>
    </div>
    <p class="subtitle">
        Input
    </p>
    <textarea class="textarea" v-model="input" @input="parseText($event.target.value)"></textarea>
    <p class="subtitle">
        Output
    </p>
    <textarea class="textarea" v-model="output" readonly></textarea>
</div>
</template>

<script>
export default {
    data: function(){
        return {
            equipData: require('./../../data/equip.json'),
            shipData: require('./../../data/ship.json'),
            apiToName: true,
            language: "en",
            type: "ship",
            input: "464, 15, 489",
            output: "Kasumi Kai Ni, Akebono, Michishio Kai Ni"
        }
    },
    methods:{
        parseText(value){
            this.input = value;
            let limit = 200;
            if(this.apiToName){
                let expr = /\d+/g;
                let stringValue = value;
                let match;
                let count = 0;
                while((match = expr.exec(value)) != null){
                    count++;
                    if(count > limit) return this.output = this.input;
                    try{
                        if(this.type == "ship"){
                            stringValue = stringValue.replace(match[0], this.shipData[match[0]][this.language]);
                        }
                        else{
                            stringValue = stringValue.replace(match[0], this.equipData[match[0]][this.language]);
                        }
                    }
                    catch(err){

                    }   
                }
                this.output = stringValue;
            }
            else{
                let stringValue = value;
                let stringArray = this.trimStrings(stringValue.split(","));
                console.log(stringValue.split(","));
                if(stringArray.length > limit) return this.output = this.input;
                try{
                    if(this.type == "ship"){
                        for(let x of stringArray){
                            for(let y in this.shipData){
                                if(this.shipData[y].en == x || this.shipData[y].jp == x){
                                    stringValue = stringValue.replace(x, y);
                                    break;
                                }
                            }
                        }
                    }
                    else{
                        for(let x of stringArray){
                            for(let y in this.equipData){
                                if(this.equipData[y].en == x || this.equipData[y].jp == x){
                                    stringValue = stringValue.replace(x, y);
                                    break;
                                }
                            }
                        }
                    }
                }
                catch(err){

                }
                this.output = stringValue;
            }
        },
        toggleDirection(value){
            this.apiToName = value;
            this.parseText(this.input);
        },
        toggleLanguage(value){
            this.language = value;
            this.parseText(this.input);
        },
        toggleType(value){
            this.type = value;
            this.parseText(this.input);
        },
        trimStrings(value){
            return value.map(x => x.trim());
        }
    }
}
</script>

<style scoped>

</style>
