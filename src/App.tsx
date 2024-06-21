import React, { useEffect, useState } from 'react';
import { getDevices } from './api/devices';
import { Device } from './devices/devices';
import { getSecurityIcons } from './icons/icons';

const App: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [clientId, setClientId] = useState('flash');

  useEffect(() => {
    const fetchData = async () => {
      const data: Device[] = await getDevices(clientId);
      setDevices(data);
    }

    fetchData()
      .catch(console.error)
  }, [clientId]);

  return (
    <div>
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
};

export default App;
