import axios from 'axios'
const url = "http://localhost:8080/"
const excApi = "https://api.exchangeratesapi.io/"

export const getNodeRates = async (date) =>
{
    try{
        return await axios.get(`${url}`, {
            params: { date: date } })
    }
    catch (error) {
            console.log(error) 
        }
}

export const getLocalRates = async (date) => {
    try {
      return await axios.get(`${excApi}${date}`)
    } catch (error) {
      console.error(error)
    }
}