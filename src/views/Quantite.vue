<template>
  <div class="quantite">
    <Navbar/>
    <v-container>
    <v-row justify="left">
        <v-date-picker v-model="pickerStart" class="ma-2">Date de debut</v-date-picker>
        <v-date-picker v-model="pickerEnd" class="ma-2">Date de fin</v-date-picker>
    </v-row>
    <v-row>
        <v-select
            v-model="siteChoose"
            :items="sites"
            label="Site"
            item-text="nom"
            item-value="id"
        ></v-select>
        </v-row>
    <v-row>
        <v-select
            v-model="dechetChoose"
            :items="dechets"
            label="Dechets"
            item-text="nomTypeDeDechet"
            item-value="nomTypeDeDechet"
        ></v-select>
        
    </v-row>
    <div class="my-2">
        <v-btn small class="primary" @click="bySite()">Trier sur le site</v-btn>
        </div>
        <div class="my-2">
        <v-btn small class="red" @click="all()">Tous les sites</v-btn>
        </div>
        <div v-if="nb>-1">
          Nombre de dechets : {{nb}}
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
    data () {
      return {
        pickerStart: new Date().toISOString().substr(0, 10),
        pickerEnd: new Date().toISOString().substr(0, 10),
        siteChoose : '',
        dechetChoose : '',
        nb : -1
      }
    },
  name: 'quantite',
  components: {
    Navbar
  },
  methods:{
      bySite(){
        let debut = this.pickerStart.substring(8,10)+'/'+this.pickerStart.substring(5,7)+'/'+this.pickerStart.substring(0,4)
        let fin = this.pickerEnd.substring(8,10)+'/'+this.pickerEnd.substring(5,7)+'/'+this.pickerEnd.substring(0,4)
        console.log(debut);
        
        console.log('http://localhost:8080/qteCollecteSite?noSite='+this.siteChoose+'&nomTypeDechet='+this.dechetChoose+'&dateDebut='+debut+'&dateFin='+fin);
        
          axios.get('http://localhost:8080/qteCollecteSite?noSite='+this.siteChoose+'&nomTypeDechet='+this.dechetChoose+'&dateDebut='+debut+'&dateFin='+fin).then(res => {
            this.nb = res.data
          })
      },
      all(){
        let debut = this.pickerStart.substring(8,10)+'/'+this.pickerStart.substring(5,7)+'/'+this.pickerStart.substring(0,4)
        let fin = this.pickerEnd.substring(8,10)+'/'+this.pickerEnd.substring(5,7)+'/'+this.pickerEnd.substring(0,4)
        
          console.log('http://localhost:8080/qteCollecteSiteNational?nomTypeDechet='+this.dechetChoose+'&dateDebut='+debut+'&dateFin='+fin);
        
          axios.get('http://localhost:8080/qteCollecteSiteNational?nomTypeDechet='+this.dechetChoose+'&dateDebut='+debut+'&dateFin='+fin).then(res => {
            this.nb = res.data
          })
      }
  },
  mounted(){
    this.$store.dispatch('demandesStore/getSites').then(setTimeout(() => {
        console.log(this.sites);
    }, 100));
    this.$store.dispatch('demandesStore/getDechets').then(setTimeout(() => {
        console.log(this.dechets);
    }, 100));
  },
  computed:{
    ...mapState('demandesStore', ['sites']),
    ...mapState('demandesStore', ['dechets'])
  }
}
</script>
