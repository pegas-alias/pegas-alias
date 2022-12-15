import { serverInstance } from './axios';
import { FilterState } from '../store/leaders/type'

export const getPublicData = async (url: string) => {
  return await serverInstance
    .get(url)
    .then(response => response.data)
    .catch(error => {
      console.error(error)
    })
}

export const getTeamsAPI = (filter: FilterState) => {
  return serverInstance
    .get('/api/teams', { params: filter })
    .then(response => response.data )
    .catch(error => {
      console.log(error)
    })
}