const mutations = {
    // setCurrentUser(state, user){
        //state.currentUser = user.data
        //Ici on a un objet contenant 0: id, 1: Nom, 2: addresse... Passer en JSON ?
    //}
    inMutations(){
        console.log("mutation");
    },
    getDemandes(state, demandes){
        state.demandes = demandes
    },
    getTournees(state, tournees){
        state.tournees = tournees
    },
    getEmployes(state, employes){
        state.employes = employes
    },
    getCamions(state, camions){
        state.camions = camions
    },
    getSites(state, sites){
        state.sites = sites
    },
    getEntreprises(state, entreprises){
        state.entreprises = entreprises
    },
    getDemandesNonInscrites(state, demandes){
        state.demandesNonInscrites = demandes
    },
    getDechets(state, dechets){
        state.dechets = dechets
    },
    getMesTournees(state, tournees){
        state.mesTournees = tournees
    },
    connexion(state, user){
        state.user = user
    }

}
export default mutations