import { useEffect, useState } from "react";
import { Device } from "./devices-list";
import { isHealthy, isOlderThan30Days } from "../utils/utils";
import { Form } from "react-bootstrap";

export type FilterType = {
  healthy: boolean;
  oldCheckIn: boolean;
  firewall: boolean;
  antivirus: boolean;
  encryption: boolean;
};

const isFirewallSelected = (device: Device, filters: FilterType) =>
  filters.firewall && device.security.firewall;

const isAntivirusSelected = (device: Device, filters: FilterType) =>
  filters.antivirus && device.security.antivirus;

const isEncryptionSelected = (device: Device, filters: FilterType) =>
  filters.encryption && device.security.encryption;

const isHealthySelected = (device: Device, filters: FilterType) =>
  filters.healthy && isHealthy(device);

const isOldCheckInSelected = (device: Device, filters: FilterType) =>
  filters.oldCheckIn && isOlderThan30Days(device.lastCheckInDate);

const filterDevices = ({
  devices,
  filters,
  setFilteredDevices,
}: {
  devices: Device[],
  filters: FilterType;
  setFilteredDevices: React.Dispatch<React.SetStateAction<Device[]>>;
}) => {
  let newFilteredDevices = devices.filter(
    device =>
      isFirewallSelected(device, filters) ||
      isAntivirusSelected(device, filters) ||
      isEncryptionSelected(device, filters) ||
      isHealthySelected(device, filters) ||
      isOldCheckInSelected(device, filters)
  );

  setFilteredDevices(newFilteredDevices);
}

const Filter = ({
  devices,
  setFilteredDevices
}: {
  devices: Device[];
  setFilteredDevices: React.Dispatch<React.SetStateAction<Device[]>>;
}) => {
  const [filters, setFilters] = useState<FilterType>({
    healthy: true,
    oldCheckIn: false,
    firewall: true,
    antivirus: true,
    encryption: true,
  });

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setFilters(prevFilters => ({ ...prevFilters, [name]: checked }));
  };

  useEffect(() => {
    filterDevices({ devices, filters, setFilteredDevices });
  }, [filters, devices, setFilteredDevices]);

  return (
    <Form className='mt-3'>
      <Form.Check
        type="checkbox"
        name="healthy"
        label="Healthy Devices"
        checked={filters.healthy}
        onChange={handleFilterChange}
      />

      <Form.Check
        type="checkbox"
        name="oldCheckIn"
        label="Check-in Date Older Than 30 Days"
        checked={filters.oldCheckIn}
        onChange={handleFilterChange}
      />

      <Form.Check
        type="checkbox"
        name="firewall"
        label="Firewall"
        checked={filters.firewall}
        onChange={handleFilterChange}
      />

      <Form.Check
        type="checkbox"
        name="antivirus"
        label="Antivirus"
        checked={filters.antivirus}
        onChange={handleFilterChange}
      />

      <Form.Check
        type="checkbox"
        name="encryption"
        label="Encryption"
        checked={filters.encryption}
        onChange={handleFilterChange}
      />
    </Form>
  )
};

export { Filter }