import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FiltreDate from '../views/FiltreDate.vue'
import Quantite from '../views/Quantite.vue'
import FiltreEmployes from '../views/FiltreEmployes.vue'
import Tournees from '../views/Tournees.vue'
import Demandes from '../views/Demandes.vue'
import DemandeNonInscrites from '../views/DemandesNonInscrites.vue'
import DechetsParMois from '../views/DechetsParMois.vue'
import MesTournees from '../views/MesTournees.vue'
// import demandesStore from '../store/demandes/demandes.modules'
// import { setInterval } from 'core-js'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/filtreDate',
    name: 'filtreDate',
    component: FiltreDate,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/quantite',
    name: 'quantite',
    component: Quantite,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/filtreEmployes',
    name: 'filtreEmployes',
    component: FiltreEmployes,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/tournees',
    name: 'tournees',
    component: Tournees,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/demandes',
    name: 'demandes',
    component: Demandes,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/demandeNonInscrites',
    name: 'demandesNonInscrites',
    component: DemandeNonInscrites,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dechetsParMois',
    name: 'dechetsParMois',
    component: DechetsParMois,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/mesTournees',
    name: 'mesTournees',
    component: MesTournees,
    meta: {
      requiresAuth: true
    }
  }
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
      console.log(localStorage.noFonction);
      console.log("oui");
    if(localStorage.noFonction == undefined){ //pas co
      console.log("pas co");
      window.location.replace("/")
    } else {
      if(localStorage.noFonction == 1) {// camionneur
        console.log(window.location.pathname);
        if(window.location.pathname === '/mesTournees'){
          next()
        } else {
          console.log("ca bouge");
          
          window.location.replace("/mesTournees")
        }
      } else { //autre employé
        console.log("nooooooooo");
        next()
      }
      
    }
  } else {
    next()
  }
})

export default router
