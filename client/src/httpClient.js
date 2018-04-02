import axios from 'axios'
const httpClient = axios.create()

httpClient.getAllMinions = function(){
    return this({method: 'get', url: '/api/minions'})
}

httpClient.getAMinion = function(id){
    return this({method: 'get', url: `/api/minions/${id}`})
}

httpClient.createMinion = function(fields){
    return this({method: 'post', url: '/api/minions', data: fields})
}

httpClient.updateMinion = function(id, fields){
    return this({method: 'patch', url: `/api/minions/${id}`, data: fields})
}

httpClient.deleteMinion = function(id) {
    return this({method: 'delete', url: `/api/minions/${id}`})
}

export default httpClient