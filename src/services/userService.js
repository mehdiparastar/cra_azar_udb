import http from './httpService.js'
import config from '../../src/config.json'

// export function login(email, password) {
//     return http.post(config.api_login,{email,password})     
// }

export function getFullNameOfUser() {
    return http.get(config.api_users + '/userfullname')
}