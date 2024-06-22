import { useEffect, useState } from "react";
import { Device } from "./devices-list";
import { isHealthy, isOlderThan30Days } from "../utils/utils";
import { Form } from "react-bootstrap";

export type FilterType = {
  [key: string]: boolean
};

const filterDevices = ({
  devices,
  filters,
  setFilteredDevices,
  setFilters
}: {
  devices: Device[],
  filters: FilterType;
  setFilteredDevices: React.Dispatch<React.SetStateAction<Device[]>>;
  setFilters: React.Dispatch<React.SetStateAction<FilterType>>;
}) => {
  let newFilteredDevices = [...devices];

  newFilteredDevices = devices.filter(
    device =>
      device.security.firewall === filters.firewall ||
      device.security.antivirus === filters.antivirus ||
      device.security.encryption === filters.encryption
  );

  if (filters.oldCheckIn) {
    newFilteredDevices = newFilteredDevices.filter(
      device => isOlderThan30Days(device.lastCheckInDate)
    );
  } else if (filters.healthy) {
    newFilteredDevices = devices.filter(
      device => isHealthy(device)
    );
  }

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
    if (name === "oldCheckIn" && checked) {
      setFilters(prevFilters => ({ ...prevFilters, oldCheckIn: checked, healthy: !checked }));
    } else if (name === "healthy" && checked) {
      setFilters(prevFilters => ({ ...prevFilters, healthy: checked, oldCheckIn: !checked }));
    } else {
      setFilters(prevFilters => ({ ...prevFilters, [name]: checked }));
    }
  };

  useEffect(() => {
    filterDevices({ devices, filters, setFilteredDevices, setFilters });
  }, [filters, devices, setFilteredDevices]);

  return (
    <Form>
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