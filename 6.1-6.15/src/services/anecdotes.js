import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'
const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}


const create = async (newObject) => {
  const request = await axios.post(baseUrl, newObject)
  return request.data
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, update }