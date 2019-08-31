import http from './httpService.js'
import config from '../../src/config.json'

// export function login(email, password) {
//     return http.post(config.api_login,{email,password})     
// }

export function getFirstNameOfUser() {
    return http.get(config.api_users + '/userfirstname')
}

export function createUser(user) {
    return http.post(config.api_users + '/createuser', user)
}

export function getUserAvatar() {
    return http.get(config.api_users + '/useravatar')
}