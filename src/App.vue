<template>
  <v-app>
      
    <index/>
    
  </v-app>
</template>

<script>
import index from './components/index';

export default {
  name: 'App',

  components: {
    index,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>

</style>