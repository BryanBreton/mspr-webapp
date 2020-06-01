<template>
  <div>
    <v-app-bar
      color="deep-blue"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title></v-toolbar-title>
 
      <v-spacer></v-spacer>
      <div class="ma-2" @click="versDemandes()">
        Demandes
      </div>
      <div @click="versTournees()">
        Tournees
      </div>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        
        <v-list>
          <v-list-item>
              <v-list-item-title @click="versDate()">Recherche d'une demande par date</v-list-item-title>
          </v-list-item>
          <v-list-item>
              <v-list-item-title @click="quantite()">Nombre de dechets</v-list-item-title>
          </v-list-item>
          <v-list-item>
              <v-list-item-title @click="versEmployes()">Employés avec moins de tournées</v-list-item-title>
          </v-list-item>
          <v-list-item>
              <v-list-item-title @click="versDemandeNonInscrites()">Demande non-inscrites</v-list-item-title>
          </v-list-item>
          <v-list-item>
              <v-list-item-title @click="versDechetParMois()">Dechets par mois</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
    methods: {
        versDate(){
            this.$router.push({name: "filtreDate"})
        },
        quantite(){
            this.$router.push({name: "quantite"})
        },
        versEmployes(){
            this.$router.push({name: "filtreEmployes"})
        },
        versDemandes(){
            this.$router.push({name: "demandes"})
        },
        versTournees(){
          this.$router.push({name: "tournees"})
        },
        versDemandeNonInscrites(){
          this.$router.push({name: "demandesNonInscrites"})
        },
        versDechetParMois(){
          this.$router.push({name: 'dechetsParMois'})
        },
        versMesTournees(){
          this.$router.push({name: 'mesTournees'})
        }
    }
}
</script>