import { getSecurityIcons } from "../icons/icons";
import { Device } from "./devices-list";

const DeviceItem = ({
  device
}: {
  device: Device
}) => {
  return (
    <tbody>
      <tr key={device.id}>
        <td>{device.serialNumber}</td>
        <td>{getSecurityIcons(device)}</td>
      </tr>
    </tbody>
  )
};

export { DeviceItem };