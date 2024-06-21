import { useEffect, useState } from "react";
import { getDevicesById } from "../api/devices";
import { getSecurityIcons } from "../icons/icons";
import { TotalDevices } from "./total";
import { SelectId } from "./select";
import { Filter } from "./filter";

export type Security = {
  firewall: boolean;
  antivirus: boolean;
  encryption: boolean
}

export type Device = {
  id: string;
  clientId: string;
  manufacturer: string;
  model: string;
  serialNumber: string;
  cpu: string;
  ram: number;
  storage: number;
  hardwareId: string;
  security: Security;
  user: string;
  lastCheckInDate: number
};

const DevicesList = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [clientId, setClientId] = useState('flash');

  useEffect(() => {
    const fetchData = async () => {
      const data: Device[] = await getDevicesById(clientId);
      setDevices(data);
    }

    fetchData()
      .catch(console.error)
  }, [clientId]);

  return (
    <div>
      <SelectId
        clientId={clientId}
        setClientId={setClientId}
      />
      <Filter />
      <TotalDevices
        devices={devices}
      />

      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Security Status</th>
          </tr>
        </thead>
        {devices.map(device => (
          <tbody>
            <tr key={device.id}>
              <td>{device.serialNumber}</td>
              <td>{getSecurityIcons(device.security, device.lastCheckInDate)}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export { DevicesList };