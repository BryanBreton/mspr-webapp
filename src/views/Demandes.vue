<template>
  <div class="home">
    <Navbar/>
    <v-container> 
            <v-card class="pa-md-4 mx-lg-auto milieu">
                    <v-card-title>
                        Nouvelle demande
                        
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
                            v-model="siret"
                            :items="entreprises"
                            label="Entreprise"
                            item-text="raisonSociale"
                            item-value="id"
                        ></v-select>
                        <v-select
                            v-model="siteChoose"
                            :items="sites"
                            label="Site"
                            item-text="nom"
                            item-value="id"
                        ></v-select>
                        <v-date-picker v-model="picker"></v-date-picker>
                        <div class="my-2">
                            <v-btn @click="valider" color="primary">Valider</v-btn>
                        </div>
                        </div>
                    </v-expand-transition>
                    
                </v-card>
                <v-card class="pa-md-4 mx-lg-auto milieu">
                    <v-card-title>
                        Details derniere demande
                    </v-card-title>
                    <v-btn
                        icon
                        @click="show2 = !show2"
                    >
                        <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                    <v-expand-transition>
                        <div v-show="show2">
                        <v-select
                            v-model="dechetChoose"
                            :items="dechets"
                            label="Dechet"
                            item-text="nomTypeDeDechet"
                            item-value="id"
                        ></v-select>
                        <v-text-field outlined shaped name="qte" label="Quantite" v-model="quantite"></v-text-field>
                        <v-text-field outlined shaped name="remarque" label="Remarque" v-model="remarque"></v-text-field>

                        <div class="my-2">
                            <v-btn @click="valider2" color="primary">Valider</v-btn>
                        </div>
                        </div>
                    </v-expand-transition>
                    
                </v-card>

            Liste de demandes   
            <div v-for="demande in demandes" :key="demande">
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

import axios from 'axios'

export default {
    
  name: 'demandes',
  data(){
      return {
          picker: '',
          show: false,
          show2: false,
          siret : '',
          siteChoose: '',
          tourneeChoose: '',
          dechetChoose: '',
          quantite: '',
          remarque: ''
      }
  },
  components: {
    Navbar
  },
  mounted(){
    axios.get('http://localhost:8080/infoDemande?idDemande=3').then(Response => {
        console.log(Response);
        
    })
    this.$store.dispatch('demandesStore/getDemandes').then(setTimeout(() => {
        console.log(this.demandes);
    }, 100));
    this.$store.dispatch('demandesStore/getTournees').then(setTimeout(() => {
        console.log(this.tournees);
    }, 100));
    this.$store.dispatch('demandesStore/getSites').then(setTimeout(() => {
        console.log(this.sites);
    }, 100));
    this.$store.dispatch('demandesStore/getEntreprises').then(setTimeout(() => {
        console.log(this.entreprises);
    }, 100));
    this.$store.dispatch('demandesStore/getDechets').then(setTimeout(() => {
        console.log(this.dechets);
    }, 100));

  },
  computed:{
      ...mapState('demandesStore', ['demandes']),
      ...mapState('demandesStore', ['tournees']),
      ...mapState('demandesStore', ['sites']),
      ...mapState('demandesStore', ['entreprises']),
      ...mapState('demandesStore', ['dechets'])
  },
  methods: {
      valider(){
        console.log(this.siret + ' ' + this.picker + ' ' + this.siteChoose + ' ' + this.tourneeChoose);
        var today = new Date();
        var dd = today.getDate();

        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        if(dd<10) 
        {
            dd='0'+dd;
        } 

        if(mm<10) 
        {
            mm='0'+mm;
        } 
        today = yyyy+'-'+mm+'-'+dd;
        console.log(today);

        let params = {
            dateDemande: today,
            dateElevement: this.picker,
            siret: this.siret,
            noSite: this.siteChoose
        }
        console.log(params);
        
        axios.post('http://localhost:8080/demande', params).then(() => {
            alert('demande envoyée')
        })  
      },
      valider2(){
          let params = {
              qte: this.quantite,
              remarque: this.remarque,
              noTypeDechet: this.dechetChoose
          }
          axios.post('http://localhost:8080/insertDetailDemande', params).then(rep => {
              console.log(rep);
          })
      }
  }

}
</script>
