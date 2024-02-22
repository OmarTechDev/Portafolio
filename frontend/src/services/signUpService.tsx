import axios from 'axios'
const baseUrl = `${import.meta.env.VITE_API_BASE_URL}/users/`
import Credentials from './credentials';

const sign = async (credentials: Credentials) => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { sign }
