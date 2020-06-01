<template>
  <div class="filtreEmpolyes">
    <Navbar/>
    <v-container
    id="input-usage"
    fluid
  >
    <v-row>
      <v-col cols="12">
           <v-icon>mdi-magnify</v-icon>
           nombre de tournées minimales :
        <v-text-field v-model="nb">
        

        </v-text-field> 
        <v-btn small class="primary" @click="recherche()">Ok</v-btn>
      </v-col>
    </v-row>
    <div v-for="employe in employesFiltered" :key="employe">
        <v-card class="pa-md-4 ma-4 mx-lg-auto">
            <v-card-title>
                {{employe.employe.nom}} {{employe.employe.prenom}}
            </v-card-title>                 
            
            <v-footer>
                Nombre de tournees : {{employe.nbTournee}}
                

            </v-footer>
        </v-card>
        
    </div>
  </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'
export default {
  name: 'filtreEmpolyes',
  components: {
    Navbar
  },
  data(){
      return {
          nb: 0,
          employesFiltered: []
      }
  },
  methods: {
      recherche(){
          console.log(this.nb);
        axios.get('http://127.0.0.1:8080/employeTournee?nbTournee='+this.nb).then(response => {
          this.employesFiltered = response.data
        })
      }
  },
}
</script>
