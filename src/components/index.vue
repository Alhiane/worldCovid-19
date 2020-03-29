<template>
  <div>

      
      <v-card flat>
          <v-toolbar 
          color="blue-grey darken-4"
          dark          
          flat
          >
          </v-toolbar>

            <v-card
            class="mx-auto"
            style="margin-top :-50px"
            max-width="700"  
            flat          
            >
            <v-toolbar flat>
                <v-toolbar-title class="grey--text">
                    World Covid-19 
                </v-toolbar-title>

                <v-spacer></v-spacer>

                 <v-select                    
                    :items="countryNames"
                    menu-props="auto"
                    label="Select Country"
                    hide-details   
                    v-model="optionSelect"    
                    v-if="combo"                          
                >
                </v-select>
                <!-- loader Effect -->
                <v-skeleton-loader
                    ref="skeleton"
                    :boilerplate="boilerplate"
                    :type="type"
                    :tile="tile"
                    class="mx-auto" v-if="comboLoader"
                ></v-skeleton-loader>
                </v-toolbar>
                      <v-divider></v-divider>

            </v-card>

      </v-card>



       

    <!-- page main Statics -->
    <v-container>
        <v-row>
            <v-col sm="12" md="6" lg="3" order-md="1">
                <statics-card :country="optionSelect" :data="staticsforvcard" v-if="cards"/>
                <!-- loader Effect -->
                <v-skeleton-loader
                    ref="skeleton"
                    :boilerplate="boilerplate"
                    :type="loaderCads.type"
                    :tile="tile"
                    class="mx-auto" v-if="cardsLoader"
                ></v-skeleton-loader>

            </v-col>
            <v-col sm="12" md="12" lg="6" cols="6" order-md="3" order-lg="2">
                <char :data="data" v-if="!charLoader"></char>
                <!-- loader Effect -->
                <v-skeleton-loader
                    ref="skeleton"
                    :boilerplate="boilerplate"
                    :type="loaderCads.type"
                    :tile="tile"
                    class="mx-auto" v-if="charLoader"
                ></v-skeleton-loader>
            </v-col>
            <v-col sm="12" md="6" order-md="2" order-lg="3" lg="3" >
                <staticsCard2 :data="staticsforvcard" v-if="cards"/>                
                <!-- loader Effect -->
                <v-skeleton-loader
                    ref="skeleton"
                    :boilerplate="boilerplate"
                    :type="loaderCads.type"
                    :tile="tile"
                    class="mx-auto" v-if="cardsLoader"
                ></v-skeleton-loader>
            </v-col>
        </v-row>
    </v-container>

    <v-container>
        <v-row class="justify-center mt-12">
            <v-col cols="4">
            <v-alert
                border="top"
                colored-border
                type="warning"
                elevation="2"
                >
                This site is unofficial, and is not affiliated with any government or ministry. All data are data authorized by the World Health Organization
            </v-alert>

            </v-col>

            <v-col cols="4">
            <v-alert
                border="top"
                colored-border
                type="warning"
                elevation="2"
                align="right"
                >
                هذا الموقع غير رسمي ، وليس تابع لأي حكومة أو وزارة ، جميع البيانات هي بيانات مصرح بها من قبل منظمة الصحة العالمية
            </v-alert>
            
            </v-col>

            <v-col cols="4">
            <v-alert
                border="top"
                colored-border
                type="warning"
                elevation="2"
                >
                Ce site n'est pas officiel et n'est affilié à aucun gouvernement ou ministère. Toutes les données sont des données autorisées par l'Organisation mondiale de la santé
            </v-alert>

            </v-col>
        </v-row>

        <v-row class="justify-center mt-5">
            <v-col cols="6" >
                <v-alert
                v-model="alert"
                color="cyan"
                border="left"
                elevation="2"
                colored-border
                icon="mdi-code-json"
                >
                    Developed by : <a href="https://github.com/Alhiane" target="_blank" rel="noopener noreferrer">Alhiane Lahcen</a>
                </v-alert>
            </v-col>
        </v-row>

    </v-container>

  </div>
</template>

<script>

// get Axios
import axios from 'axios';
import staticsCard from './StaticsCard';
import staticsCard2 from './staticsCardCol2';
import char from './chartstatics';

export default {
    name: 'index',
    components : {
        staticsCard,
        staticsCard2,
        char
    },
    data() {
        return {
            // loader LAzy
            boilerplate: false,
            tile: false,
            type: 'list-item-avatar',
            types: [],

            // for loader cards
            loaderCads:{                
                type: 'card',                
            },

            // display
            combo : false,
            comboLoader : true,
            
            // for combo
            optionSelect : "",
            Alldata:[],
            loader : true,
            countryNames:[],

            // object for statics Components
            cards : false,
            cardsLoader : true,
            staticsforvcard : {
                cases : 0,
                todaycases : 0,
                deaths: 0,
                todaydeaths : 0,
                recovered: 0
            },

            // data charjs
            data :[{
                    name : 'cases',
                    data : {}
                },
                {
                    name : 'deaths',
                    data : {}
                }
            ],
            charLoader : true
        }
    },
    mounted () {
        this.types = Object.keys(this.$refs.skeleton.rootTypes);
        this.fetchAllCounitriesName();        
    },
    methods : {
        fetchDataChar(){
            this.charLoader = true;
            axios
            .get('https://corona.lmao.ninja/v2/historical/'+ this.optionSelect)
            .then(res =>{
                this.data[0].data= res.data.timeline.cases;
                this.data[1].data = res.data.timeline.deaths;
                console.log(res.data);
                this.charLoader = false;
            })
            .catch()
        },
        fetchAllCounitriesName(){
            axios
            .get("https://corona.lmao.ninja/countries")
            .then(async res => {
                this.Alldata = res.data;
                await this.fullCombo(); // for filter Only country names
                this.comboLoader = false;
                this.combo = true;   
                this.optionSelect = "Morocco";                             
            })
            .catch();
        },
        fullCombo(){
            this.countryNames = this.Alldata.map(i => i.country);
            this.countryNames.sort();
        }
    },
    watch :{
        optionSelect :async function(e){   
            if(e != ""){            
                this.cardsLoader = true;         
                this.cards = false;
                await this.Alldata.forEach(each => {
                    if(this.optionSelect.toLowerCase() == each.country.toLowerCase()){
                        this.staticsforvcard.cases = each.cases;
                        this.staticsforvcard.todaycases = each.todayCases;
                        this.staticsforvcard.deaths = each.deaths;
                        this.staticsforvcard.todaydeaths = each.todayDeaths;
                        this.staticsforvcard.recovered = each.recovered;
                    }                
                }),
                this.cardsLoader = false;
                this.cards = true;
                this.fetchDataChar();
            }
        }
    }
}
</script>

<style>
    .combo {
        background:"#1f1f1f73";
        padding:"20px"  
    }
</style>