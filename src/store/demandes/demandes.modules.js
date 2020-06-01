import states from './demandes.states'
import actions from './demandes.actions'
import mutations from './demandes.mutations'

const demandesStore = {
    namespaced: true,
    states,
    actions,
    mutations
}

export default demandesStore