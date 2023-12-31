import axios from 'axios'
const baseUrl = 'http://localhost:5097/api/login/'
import Credentials from './credentials';

const login = async (credentials: Credentials) => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { login }
