<template>
<div class="container">
    <p class="title is-spaced">
        Event Rewards
    </p>
    <p class="subtitle">
        
    </p>
    <div class="content">
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label is-pulled-left">Map </label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <div class="select">
                            <select @change="toggleMap">
                                <option disabled selected>Select a map</option>
                                <option value="42-1">42-1</option>
                                <option value="42-2">42-2</option>
                                <option value="42-3">42-3</option>
                                <option value="42-4">42-4</option>
                                <option value="42-5">42-5</option>
                                <option value="43-1">43-1</option>
                                <option value="43-2">43-2</option>
                                <option value="43-3">43-3</option>
                                <option value="44-1">44-1</option>
                                <option value="44-2">44-2</option>
                                <option value="44-3">44-3</option>
                                <option value="44-4">44-4</option>
                                <option value="44-5">44-5</option>
                                <option value="45-1">45-1</option>
                                <option value="45-2">45-2</option>
                                <option value="45-3">45-3</option>
                            </select>
                        </div>
                    </div>
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
        <textarea class="textarea" v-model="output"></textarea>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import sortJsonArray from 'sort-json-array';

export default {
    data: function(){
        return{
            configData: require('./../../data/config.json'),
            itemData: require('./../../data/item.json'),
            shipData: require('./../../data/ship.json'),
            equipData: require('./../../data/equip.json'),
            map: undefined,
            language: "en",
            input: undefined,
            output: "Select a map"
        }
    },
    methods:{
        getData(){
            let container = {
                map: this.map
            }
            axios.post(`${this.configData.host}/eventreward`, container)
            .then(response => response.data)
            .then(data => {
                this.input = data;
                this.parseList(data, this.language)
                })
            .catch(err => console.error(err));
        },
        parseDifficulty(value, lang){
            if(value == 0){
                if(lang == "en") return "All:";
                else return "全:";
            }
            else if(value == 1){
                if(lang == "en") return "Casual:";
                else return "丁:";
            }
            else if(value == 2){
                if(lang == "en") return "Easy:";
                else return "丙:";
            }
            else if(value == 3){
                if(lang == "en") return "Medium:";
                else return "乙:";
            }
            else if(value == 4){
                if(lang == "en") return "Hard:";
                else return "甲:";
            }
        },
        parseList(data, lang){
            let newObj = {};
            for(const x of data){
                newObj[x.difficulty] = x.rewards;
            }
            let text = ``;
            for(const diff in newObj){
                let difficulty = this.parseDifficulty(diff, lang);
                text += `${difficulty}`;
                for(const reward of newObj[diff]){
                    let x = this.parseReward(reward.api_id, reward.api_type, lang);
                    text += `\n- ${x} x${reward.api_value}`;
                }
                text += `\n\n`;
            }
            this.output = text;
        },
        parseReward(id, type, lang){
            if(type == 1){
                return (this.itemData[id][lang] == '' || this.itemData[id][lang] == undefined) ? this.itemData[id]['jp'] : this.itemData[id][lang]; 
            }
            else if(type == 2){
                return (this.shipData[id][lang] == '' || this.shipData[id][lang] == undefined) ? this.shipData[id]['jp'] : this.shipData[id][lang]; 
            } 
            else if(type == 3){
                return (this.equipData[id][lang] == '' || this.equipData[id][lang] == undefined) ? this.equipData[id]['jp'] : this.equipData[id][lang]; 
            } 
        },
        toggleLanguage(value){
            this.language = value;
            if(this.map != undefined) this.parseList(this.input, value);
        },
        toggleMap(value){
            this.map = value.target.value;
            this.getData();
        }
    }
}
</script>

<style scoped>

</style>
