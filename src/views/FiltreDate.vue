<template>
  <div class="filtreDate">
    <Navbar/>
    <v-container>
      <v-row justify="left">
        <v-date-picker v-model="picker"></v-date-picker>
        
    </v-row>
    <div v-for="demande in demandes" :key="demande">
            <v-card class="pa-md-4 ma-4 mx-lg-auto">
                <v-card-title>
                    Retirée le : {{demande.dateElevement}}
                </v-card-title>                 
                
                <v-footer>
                    Siret entreprise : {{demande.siret}}
                    

                </v-footer>
            </v-card>
            
        </div>


    <div class="my-2">
        <v-btn small class="primary" @click="appelDemande()">Ok</v-btn>
        </div>
    </v-container>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'
export default {
    data () {
      return {
        picker: new Date().toISOString().substr(0, 10),
        demandes : []
      }
    },
  name: 'FiltreDate',
  components: {
    Navbar
  },
  methods:{
      appelDemande(){
        let date = this.picker.substring(8,10)+'/'+this.picker.substring(5,7)+'/'+this.picker.substring(0,4)
        axios.get('http://localhost:8080/demandePostSaisieAgent?dateDemande='+date).then(res => {
          this.demandes = res.data
        })
      }
  }
}
</script>
