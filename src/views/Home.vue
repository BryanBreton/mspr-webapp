<template>
  <div class="home">
    <v-container>
      <v-card class="pa-md-4 ma-4 mx-lg-auto">
        <v-card-title>
          Connectez vous
        </v-card-title>
        <v-card-text>
          <v-text-field outlined shaped name="pseudo" label="Pseudo" v-model="pseudo"></v-text-field>
          <v-text-field outlined shaped name="password" label="password" type="password" v-model="password"></v-text-field>
          <v-btn class="primary" @click="connexion()">Ok</v-btn>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';
export default {
  name: 'Home',
  components: {
  },
  data(){
    return {
      pseudo : '',
      password : ''
    }
  },
  mounted(){
    this.$store.dispatch('demandesStore/getDemandes').then(setTimeout(() => {
    }, 100));
    this.$store.dispatch('demandesStore/getTournees').then(setTimeout(() => {
    }, 100));
    this.$store.dispatch('demandesStore/getSites').then(setTimeout(() => {
    }, 100));
    this.$store.dispatch('demandesStore/getEntreprises').then(setTimeout(() => {
    }, 100));
    this.$store.dispatch('demandesStore/getDechets').then(setTimeout(() => {
    }, 100));
    this.$store.dispatch('demandesStore/getDemandesNonInscrites').then(setTimeout(() => {
    }, 100));
    this.$store.dispatch('demandesStore/getCamions').then(setTimeout(() => {
    }, 100));
  },
  methods:{
    connexion(){
      this.$store.dispatch('demandesStore/connexion', {pseudo: this.pseudo, password: this.password}).then(setTimeout(() => {
        console.log(this.user.noFonction)
        localStorage.noFonction = this.user.noFonction
        localStorage.id = this.user.id
        if(this.user.noFonction == 1){
          console.log('resa');
          window.location.replace("/mesTournees")
          
        } else {
          if(this.user.noFonction > 1){
            window.location.replace("/demandes")
          }
        }
      }, 2000))
    }
  },
  computed:{
    ...mapState('demandesStore', ['user'])
  }
}
</script>
