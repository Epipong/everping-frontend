import axios from "axios"

const url = "http://localhost:3002";

const getDevices = async (clientId: string) => {
  console.log(url);
  
  const { data } = await axios.get(`${url}/devices/${clientId}`);
  return data;
}

export { getDevices };