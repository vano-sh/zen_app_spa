import { API_BASE_URL } from 'constants/api'

export const useFetch = () => {
  const getData = async (endPoint) => {
    try {
      const response = await fetch(`${API_BASE_URL}${endPoint}.json`)
      return response.json()
    } catch (error) {
      console.error(error)
    }
  }

  const postData = async (endPoint, body) => {
    try {
      const response = await fetch(`${API_BASE_URL}${endPoint}.json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      return response.json()
    } catch (error) {
      console.error(error)
    }
  }

  return { getData, postData }
}
