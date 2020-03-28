<template>
    <div>        
        <v-card
            class="mx-auto"
            align="center"
            tile
            flat
        >
            <v-title class="display-1">   
                    {{data[0].name}}
            </v-title>
            <line-chart :data="data[0].data" :stacked="true" :dataset="{borderWidth: 1}" :messages="{empty: 'No data'}"/>
        </v-card>
        <!-- <redraw-chart :data="data"></redraw-chart> -->
        <v-card
            class="mx-auto mt-6"
            align="center"
            tile
            flat            
        >
            <v-title class="display-1">   
                {{data[1].name}}
            </v-title>
            <line-chart :data="data[1].data" :stacked="true" :dataset="{borderWidth: 1} " :color="red" :messages="{empty: 'No data'}"/>
        </v-card>
    </div>
</template>

<script>
export default {
    props :["data"],
    name : 'chartstatics',
    data :function() {
        return {

        }
    }
}
</script>

<style>

</style>