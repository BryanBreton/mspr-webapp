<template>
  <div class="home">
    <v-container>
        Mes tournees
        <div v-for="tournee in mesTournees" :key="tournee">
            <v-card class="pa-md-4 ma-4 mx-lg-auto">
        <v-card-title>
          Camion immatriculé : {{tournee.noImmatric}}
        </v-card-title>
        <v-card-text>
          Prevue le : {{tournee.dateTournee}}
        </v-card-text>
      </v-card>
        </div>
      
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      mesTournees: []
    }
  },
  mounted(){
    axios.get('http://localhost:8080/tourneesEmployeUneDate?idEmploye=8&dateTournee=10/09/2018').then(response => {
            this.mesTournees = response.data
        }).catch(error => {
            console.log(error);
        })
  },
  computed:{
      ...mapState('demandesStore', ['user']),
      ...mapState('demandesStore', ['mesTournees'])
  }
}
</script>
