import { useEffect, useState } from "react";
import { getAllClientIds, getDevicesById } from "../api/devices";
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
  const [optionsClientId, setOptionsClientId] = useState<string[]>([]);
  const [filteredDevices, setFilteredDevices] = useState<Device[]>([]);
  const [clientId, setClientId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const clientDevices: Device[] = await getDevicesById(clientId);
      setDevices(clientDevices);
      setFilteredDevices(clientDevices);
    }

    fetchData()
      .catch(console.error)
  }, [clientId]);

  useEffect(() => {
    const fetchData = async () => {
      const clientIds: string[] = await getAllClientIds();
      setOptionsClientId(clientIds);
    }

    fetchData()
      .catch(console.error)
  }, [])

  return (
    <>
      <SelectId
        clientId={clientId}
        optionsClientId={optionsClientId}
        setClientId={setClientId}
      />
      
      <Filter
        devices={devices}
        setFilteredDevices={setFilteredDevices}
      />

      <TotalDevices
        devices={devices}
        filteredDevices={filteredDevices}
      />

      <Table striped bordered hover variant="dark">
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
    </>
  );
}

export { DevicesList };