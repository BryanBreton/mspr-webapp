<template>
  <div class="filtreDate">
    <Navbar/>
    <v-container>
        <v-row>
        <v-date-picker v-model="picker" type="month"></v-date-picker>
        
    </v-row>
    <div class="my-2">
        <v-btn small class="primary" @click="appelDemande()">Ok</v-btn>
        </div>
    <div v-for="dechet in dechets" :key="dechet">
                <v-card class="pa-md-4 ma-4 mx-lg-auto">
                    <v-card-title>
                        Dechet : {{dechet.nomTypeDechet}}
                    </v-card-title>                 
                    
                    <v-footer>
                        Quantite : {{dechet.quantiteEnlevee}}
                        

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
    data () {
      return {
        picker: new Date().toISOString().substr(0, 10),
        dechets : []
      }
    },
  name: 'FiltreDate',
  components: {
    Navbar
  },
  methods:{
      appelDemande(){
        let year = this.picker.substring(0,4)
        let month = this.picker.substring(5, 7)
        axios.get('http://localhost:8080/quantiteTotaleCollectee?annee='+year+'&mois='+month).then(res => {
            this.dechets = res.data
        })

        
      }
  }
}
</script>
