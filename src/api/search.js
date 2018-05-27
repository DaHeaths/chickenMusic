import axios from 'axios'
import { HOST } from './config'

export function getHotKey (id) {
  const url = HOST + '/search/hot'

  return axios.get(url)
}
