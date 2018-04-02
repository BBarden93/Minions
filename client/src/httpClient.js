import axios from 'axios'
const httpClient = axios.create()

httpClient.getAllMinions = function(){
    return this({method: 'get', url: '/api/minions'})
}

export default httpClient