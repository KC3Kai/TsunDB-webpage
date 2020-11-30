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
                                <option value="46-1">46-1</option>
                                <option value="46-2">46-2</option>
                                <option value="46-3">46-3</option>
                                <option value="46-4">46-4</option>
                                <option value="46-5">46-5</option>
                                <option value="46-6">46-6</option>
                                <option value="47-1">47-1</option>
                                <option value="48-1">48-1</option>
                                <option value="48-2">48-2</option>
                                <option value="48-3">48-3</option>
                                <option value="48-4">48-4</option>
                                <option value="48-5">48-5</option>
                                <option value="48-6">48-6</option>
                                <option value="48-7">48-7</option>
                                <option value="49-1">49-1</option>
                                <option value="49-2">49-2</option>
                                <option value="49-3">49-3</option>
                                <option value="49-4">49-4</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label is-pulled-left">Type</label>
            </div>
            <div class="field-body">
                <div class="field has-addons">
                    <span :class="list == 'normal' ? 'button is-info' : 'button'" @click="toggleListType('normal')">Normal</span>
                    <span :class="list == 'wikia' ? 'button is-info' : 'button'" @click="toggleListType('wikia')">Wikia</span>
                    <span :class="list == 'markdown' ? 'button is-info' : 'button'" @click="toggleListType('markdown')">Markdown</span>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label is-pulled-left">Language</label>
            </div>
            <div class="field-body">
                <div class="field has-addons">
                    <span :class="language == 'en' ? 'button is-info' : 'button'" @click="toggleLanguage('en')">English</span>
                    <span :class="language == 'jp' ? 'button is-info' : 'button'" @click="toggleLanguage('jp')">日本語</span>
                </div>
            </div>
        </div>
        <textarea class="textarea" v-model="output" rows="100"></textarea>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import sortJsonArray from 'sort-json-array';
import prettier from 'prettier/standalone'
import markdown from "prettier/parser-markdown";

export default {
    data: function(){
        return{
            configData: require('./../../data/config.json'),
            itemData: require('./../../data/item.json'),
            shipData: require('./../../data/ship.json'),
            equipData: require('./../../data/equip.json'),
            map: undefined,
            list: 'normal',
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
        parseList(data, lang){
            if(this.list == 'normal') this.normalParse(data, lang);
            else if(this.list == 'wikia') this.wikiaParse(data, lang);
            else if(this.list == 'markdown') this.markdownParse(data, lang);
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
        normalParse(data, lang){
            let newObj = {};
            for(const x of data){
                newObj[x.difficulty] = x.rewards;
            }
            let text = ``;
            for(const diff in newObj){
                let difficulty = this.normalParseDifficulty(diff, lang);
                text += `${difficulty}`;
                for(const reward of newObj[diff]){
                    let x = this.parseReward(reward.api_id, reward.api_type, lang);
                    text += `\n- ${x} x${reward.api_value}`;
                }
                text += `\n\n`;
            }
            this.output = text;
        },
        normalParseDifficulty(value, lang){
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
        toggleLanguage(value){
            this.language = value;
            if(this.map != undefined) this.parseList(this.input, value);
        },
        toggleListType(value){
            this.list = value;
            if(this.map != undefined) this.getData();
        },
        toggleMap(value){
            this.map = value.target.value;
            this.getData();
        },
        wikiaParse(data, lang){
            this.output = "SoonTM";
        },
        markdownParse(data, lang){
            let rewards = {};
            for(const x of data){
                for(const reward of x.rewards){
                    if(!rewards.hasOwnProperty(`${reward.api_id}-${reward.api_type}`)) rewards[`${reward.api_id}-${reward.api_type}`] = [0,0,0,0];
                    rewards[`${reward.api_id}-${reward.api_type}`][Number(x.difficulty)-1] = reward.api_value;
                }
            }
            let list = [];
            for(const x in rewards){
                let newObj = {
                    item: x,
                    count: rewards[x]
                };
                list.push(newObj);
            }
            console.log(list);
            let sortedList = this.markdownSort(list);
            for(const x in sortedList){
                let i = sortedList[x].item.split("-");
                sortedList[x].item = this.parseReward(i[0], i[1], lang);
            }
            console.log(data);
            console.log(sortedList);
            let text = "|Item | Casual (丁)|Easy (丙)|Medium (乙)|Hard (甲)|\n|:--|:--|:--|:--|:--|\n";
            for(const x of sortedList){
                text += `|${x.item}`;
                for(const y of x.count){
                    text += `|${(y == 0) ? "-" : `${y}`}`;
                }
                text += "|\n";
            }
            this.output = prettier.format(text, {
                parser: "markdown",
                plugins: [markdown]
            });
        },
        markdownSort(list){
            let newArr = [];
            let listA = [[],[],[]];
            let newArr1 = [];
            let newArr2 = [];
            for(const x of list){
                if(x.item.split("-")[1] == 2) listA[2].push(x);
                else (x.count.includes(0)) ? listA[0].push(x) : listA[1].push(x);
            }

            let previous = undefined;
            for(const x of listA[0]){
                let value = 0;
                for(const y of x.count){
                    value += Number(y);
                }
                if(previous == undefined){
                    previous = value;
                    newArr1.splice(0, 0, x);
                    continue;
                }
                else{
                    (previous > value) ? newArr1.splice(newArr1.length,0,x) : newArr1.splice(0,0,x);
                }
            }

            previous = undefined;
            for(const x of listA[1]){
                let value = 0;
                for(const y of x.count){
                    value += Number(y);
                }
                if(previous == undefined){
                    previous = value;
                    newArr2.splice(0, 0, x);
                    continue;
                }
                else{
                    (previous > value) ? newArr2.splice(newArr2.length,0,x) : newArr2.splice(0,0,x);
                }
            }
            newArr = listA[2].concat(newArr2.concat(newArr1));
            return newArr;
        }
    }
}
</script>

<style scoped>
    textarea{
        font-family: Consolas, monospace;
    }
</style>
