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
                ALL DEATHS
            </v-card-subtitle>
            <v-card-text class="display-2 red--text">                
                {{data.deaths}}
            </v-card-text>   
        </v-card>
        <v-card
            class="mx-auto"
            color="#3e3e3e"
            max-width="400"
            align="center"
            tile
            flat
        >                
            <v-card-text class="headline red--text">                
                {{data.todaydeaths}}
            </v-card-text>   
            <v-card-subtitle class="white--text"> 
                TODAY DEATHS
            </v-card-subtitle>
        </v-card>
  </div>
</template>

<script>
export default {
    name:'staticsCardCol2',
    props:["data"],
    data: function(){
        return {

        }
    },
}
</script>

<style>

</style>