import Vue from 'vue'
import Vuex from 'vuex'
import demandesStore from './demandes/demandes.modules'
Vue.use(Vuex)

const Store = new Vuex.Store({
  modules: {demandesStore}
})

export default Store