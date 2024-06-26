import axios from "axios"
import * as dotenv from "dotenv";

const url = process.env.REACT_APP_API_URL;

const getDevicesById = async (clientId: string) => {
  const { data } = await axios.get(`${url}/devices/${clientId}`);
  return data;
}

const getAllClientIds = async () => {
  const { data } = await axios.get(`${url}/client_ids`);
  return data;
}

export { getDevicesById, getAllClientIds };