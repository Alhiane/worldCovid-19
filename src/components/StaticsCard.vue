<template>
  <div>      
        <v-card
            class="mx-auto"
            color="#3e3e3e"
            max-width="400"
            align="center"
            tile
            flat
        >                
            <v-card-subtitle class="white--text"> 
                ALL CASES
            </v-card-subtitle>
            <v-card-text class="display-2 red--text">                
                {{data.cases}}
            </v-card-text>   
        </v-card>

        <v-card
            class="mx-auto"
            color="#444444"
            max-width="400"
            align="center"   
            tile         
            flat
        >                
            <v-card-text class="headline display-2 red--text">                
                {{data.todaycases}}
            </v-card-text>   
            <v-card-subtitle class="white--text"> 
                TODAY CASES
            </v-card-subtitle>
        </v-card>

        <v-card
            class="mx-auto mt-6"
            color="#3e3e3e"
            max-width="400"
            align="center"
            tile
            flat
        >                
            <v-card-subtitle class="white--text"> 
                ALL RECOVERED
            </v-card-subtitle>
            <v-card-text class="display-2 green--text">                
                {{data.recovered}}
            </v-card-text>   
        </v-card>        
  </div>
</template>

<script>
export default {
    name:'staticsCard',
    props:["country","data"],
    data: function(){
        return {

        }
    },
}
</script>

<style>

</style>