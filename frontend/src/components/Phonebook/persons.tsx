import axios from 'axios'
const URL = '/api/persons'
import {Person} from './kinds';

const getAll = async () => {
  const request = axios.get(URL)

  const response = await request;
  return response.data;
}

const add = async (noteObject:Person) => {
  const request = await axios.post(URL,noteObject)

  return request.data
}

const del = async (id:string) => {
  const request = await axios.delete(`${URL}/${id}`)

  return request.data
}

const update = async (id:string, newObject:string, sameName:string, newEmail:string) => {

  const request = axios.put(`${URL}/${id}`, { name:`${sameName}`, number:`${newObject}`||'' ,email:`${newEmail}`||'' })
  const response = await request;
  return response.data;
}

const doThings = {
  getAll,
  add,
  del,
  update,
}

export default doThings
