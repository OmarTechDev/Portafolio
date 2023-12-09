import axios from 'axios'
const baseUrl = 'http://localhost:5097/api/users/'
import Credentials from './credentials';

const sign = async (credentials: Credentials) => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { sign }
