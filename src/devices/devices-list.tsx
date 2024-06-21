import { useEffect, useState } from "react";
import { getDevicesById } from "../api/devices";
import { TotalDevices } from "./total";
import { SelectId } from "./select";
import { Filter } from "./filter";
import { DeviceItem } from "./device-item";
import { Table } from "react-bootstrap";

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
  const [filteredDevices, setFilteredDevices] = useState<Device[]>([]);
  const [clientId, setClientId] = useState('flash');

  useEffect(() => {
    const fetchData = async () => {
      const data: Device[] = await getDevicesById(clientId);
      setDevices(data);
      setFilteredDevices(filteredDevices);
    }

    fetchData()
      .catch(console.error)
  }, [clientId, filteredDevices]);

  return (
    <div>
      <SelectId
        clientId={clientId}
        setClientId={setClientId}
      />
      
      <Filter
        devices={devices}
        setFilteredDevices={setFilteredDevices}
      />

      <TotalDevices
        devices={filteredDevices}
      />

      <Table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Security Status</th>
          </tr>
        </thead>
        {filteredDevices.map(device => (
          <DeviceItem
            device={device}
          />
        ))}
      </Table>
    </div>
  );
}

export { DevicesList };