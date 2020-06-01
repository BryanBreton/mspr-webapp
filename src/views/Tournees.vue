<template>
  <div class="home">
    <Navbar/>
    <v-container> 
            <v-card class="pa-md-4 mx-lg-auto milieu">
                    <v-card-title>
                        Nouvelle tournee
                        
                    </v-card-title>
                    <v-btn
                        icon
                        @click="show = !show"
                    >
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                    <v-expand-transition>
                        <div v-show="show">
                            

                        <v-select
                            v-model="immat"
                            :items="camions"
                            label="Camions"
                            item-text="id"
                        ></v-select>
                        <v-select
                            v-model="employesChoose"
                            :items="employes"
                            label="Employe"
                            item-text="prenom"
                            item-value="id"
                        ></v-select>
                        <v-date-picker v-model="picker"></v-date-picker>
                        <div class="my-2">
                            <v-btn @click="valider()" color="primary">Valider</v-btn>
                        </div>
                        </div>
                    </v-expand-transition>
                    
                </v-card>


            Liste de tournees   
            <div v-for="tournee in tournees" :key="tournee">
                <v-card class="pa-md-4 ma-4 mx-lg-auto">
                    <v-card-title>
                        Tournee le {{tournee.dateTournee}}
                    </v-card-title>                 
                    
                    <v-footer>
                        Immatriculation du camion : {{tournee.noImmatric}}
                        

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

// import axios from 'axios'

export default {
    
  name: 'demandes',
  data(){
      return {
          // tournees: ['oui', 'non'],
          picker: '',
          show: false,
          immat: '',
          employesChoose: ''          
      }
  },
  components: {
    Navbar
  },
  mounted(){
     // axios.get()
        this.$store.dispatch('demandesStore/getTournees').then(setTimeout(() => {
            console.log(this.tournees);
        }, 100));
        this.$store.dispatch('demandesStore/getEmployes').then(setTimeout(() => {
            console.log(this.employes)
        }, 100))
        this.$store.dispatch('demandesStore/getCamions').then(setTimeout(() => {
            console.log(this.camions);
            
        }, 100))
  },
  computed:{
      ...mapState('demandesStore', ['tournees']),
      ...mapState('demandesStore', ['employes']),
      ...mapState('demandesStore', ['camions'])
  },
methods: {
    valider(){
        console.log(this.immat + ' ' + this.picker + ' ' + this.employesChoose);
        
    }
}

}
</script>
