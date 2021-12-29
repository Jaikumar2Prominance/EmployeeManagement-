import axios from 'axios'
import {AuthModel} from '../models/AuthModel'
import {UserModel} from '../models/UserModel'

const API_URL = process.env.REACT_APP_API_URL
//const API_URL = "";

/*export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`
export const LOGIN_URL = `${API_URL}/login`
export const REGISTER_URL = `${API_URL}/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`*/

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/api/user/current`;
export const LOGIN_URL = `${API_URL}/api/user/login`;
export const LOGOUT_URL = `${API_URL}/api/user/logout`;
export const REGISTER_URL = `${API_URL}/api/user/register`;
export const REQUEST_PASSWORD_URL = `${API_URL}/auth/forgot-password`;
export const GET_PROFILES_URL = `${API_URL}/api/profile/all`;

// Server should return AuthModel
/*export function login(email: string, password: string) {
  return axios.get(LOGIN_URL, {
    params: {
      email: email,
      password: password,
    },
  })
}*/

export function login(email: string, password: string) {
  return axios.post(LOGIN_URL, {
      email: email,
      password: password,
  })
}

// Server should return AuthModel
export function register(email: string, firstname: string, lastname: string, password: string) {
  return axios.post<AuthModel>(REGISTER_URL, {
    email,
    firstname,
    lastname,
    password,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.get<{result: boolean}>(REQUEST_PASSWORD_URL, {
    params: {
      email: email,
    },
  })
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  // Check common redux folder => setupAxios
  return axios.get<UserModel>(GET_USER_BY_ACCESSTOKEN_URL)
}

export function getProfiles() {
  return axios.get(GET_PROFILES_URL);
}
