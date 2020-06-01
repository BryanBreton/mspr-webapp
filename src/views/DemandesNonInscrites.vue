<template>
  <div class="home">
    <Navbar/>
    <v-container> 
            Liste de demandes sans tournée
            <div v-for="demande in demandesNonInscrites" :key="demande">
                <v-card class="pa-md-4 ma-4 mx-lg-auto">
                    <v-card-title>
                        Demande pour le {{demande.dateElevement}}
                    </v-card-title>
                    <v-card-text>
                        Demandé le {{demande.dateDemande}}
                    </v-card-text>
                    
                    
                    <v-footer>
                        Siret Entreprise : {{demande.siret}}
                        

                    </v-footer>
                </v-card>
                
            </div>
        </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import {mapState} from 'vuex'

export default {
    
  name: 'demandes',
  data(){
      return {
      }
  },
  components: {
    Navbar
  },
  mounted(){
    this.$store.dispatch('demandesStore/getDemandesNonInscrites').then(setTimeout(() => {
        console.log(this.demandesNonInscrites);
    }, 100));

  },
  computed:{
      ...mapState('demandesStore', ['demandesNonInscrites'])
  },
  methods: {
  }

}
</script>
