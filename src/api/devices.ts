import axios from "axios"
import * as _ from "dotenv";

const url = process.env.REACT_APP_API_URL;

const getDevicesById = async (clientId: string) => {
  console.log(url);

  const { data } = await axios.get(`${url}/devices/${clientId}`);
  return data;
}

export { getDevicesById };