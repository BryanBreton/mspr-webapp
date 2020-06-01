import axios from 'axios'
/* const actions= {
    connexion({commit}, {email, pwd}){
        let config = {
            headers: {
                authorization: email+':'+pwd
            }
        }
        axios.get('http://192.168.1.23:3000/connexion/etudiant', config).then(response => {
            let user = response
            commit('setCurrentUser', user)
        }).catch(error => {
            console.log(error)
        })
    }
    } */
const actions = {
    inActions({commit}){
        console.log("actions");
        commit('inMutations')
    },
    getDemandes({commit}){
        axios.get('http://127.0.0.1:8080/demandes-list').then(response => {
            let demandes = response.data._embedded.demandes_data
            commit('getDemandes', demandes)
        }).catch(error => {
            console.log(error)
        })
    },
    getDemandesNonInscrites({commit}){
        axios.get('http://127.0.0.1:8080/demandeNonAffectee').then(response => {
            let demandes = response.data
            commit('getDemandesNonInscrites', demandes)
        }).catch(error => {
            console.log(error)
        })
    },
    getTournees({commit}){
        axios.get('http://127.0.0.1:8080/tournees-list').then(response => {
            let tournees = response.data._embedded.tournees_data
            commit('getTournees', tournees)
        }).catch(error => {
            console.log(error)
        })
    },
    getEmployes({commit}){
        axios.get('http://127.0.0.1:8080/employes-list').then(response => {
            let employes = response.data._embedded.employes_data
            commit('getEmployes', employes)
        }).catch(error => {
            console.log(error);
            
        })
    },
    getCamions({commit}){
        axios.get('http://127.0.0.1:8080/camions-list').then(response => {
            let camions = response.data._embedded.camions_data
            commit('getCamions', camions)
        }).catch(error => {
            console.log(error);
        })
    },
    getSites({commit}){
        axios.get('http://127.0.0.1:8080/sites-list').then(response => {
            let sites = response.data._embedded.sites_data
            commit('getSites', sites)
        }).catch(error => {
            console.log(error);
        })
    },
    getEntreprises({commit}){
        axios.get('http://127.0.0.1:8080/entreprises-list').then(response => {
            let entreprises = response.data._embedded.entreprises_data
            commit('getEntreprises', entreprises)
        }).catch(error => {
            console.log(error);
        })
    },
    getDechets({commit}){
        axios.get('http://127.0.0.1:8080/typeDechets-list').then(response => {
            
            let dechets = response.data._embedded.typeDechets_data
            commit('getDechets', dechets)
        }).catch(error => {
            console.log(error);
        })
    },
    getMesTournees({commit}, {id, date}){
        axios.get('http://localhost:8080/tourneesEmployeUneDate?idEmploye='+id+'&dateTournee='+date).then(response => {
            let mesTournees = response.data
            console.log(mesTournees)
            commit('getMesTournees', mesTournees)
        }).catch(error => {
            console.log(error);
        })
    },
    connexion({commit}, {pseudo, password}){
        let coPseudo = pseudo.match(/[A-Z][a-z]+/g);
        axios.get('http://localhost:8080/employes-list/search/findByNomAndPrenomAndPassword?nom='+coPseudo[1]+'&prenom='+coPseudo[0]+'&password='+password).then(res => {
            let user = res.data._embedded.employes_data[0]
            console.log(user);
            commit('connexion', user)
            
      }).catch(error => {
          console.log(error);
          
      })
    }
}
    

export default actions