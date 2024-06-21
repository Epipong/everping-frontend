import { useState } from "react";
import { Device } from "./devices-list";

export type FilterType = {
  [key: string]: boolean
};

const filterDevices = ({
  devices
}: {
  devices: Device[]
}) => {
  //
}

const Filter = ({
  devices
}: {
  devices: Device[]
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
  filterDevices({ devices })
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="healthy"
          checked={filters.healthy}
          onChange={handleFilterChange}
        />
        Healthy Devices
      </label>
      <label>
        <input
          type="checkbox"
          name="oldCheckIn"
          checked={filters.oldCheckIn}
          onChange={handleFilterChange}
        />
        Check-in Date Older Than 30 Days
      </label>
      <label>
        <input
          type="checkbox"
          name="firewall"
          checked={filters.firewall}
          onChange={handleFilterChange}
        />
        Firewall
      </label>
      <label>
        <input
          type="checkbox"
          name="antivirus"
          checked={filters.antivirus}
          onChange={handleFilterChange}
        />
        Antivirus
      </label>
      <label>
        <input
          type="checkbox"
          name="encryption"
          checked={filters.encryption}
          onChange={handleFilterChange}
        />
        Encryption
      </label>
    </div>
  )
};

export { Filter }