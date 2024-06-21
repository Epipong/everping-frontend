import { getSecurityIcons } from "../icons/icons";
import { Device } from "./devicesList";

const DeviceItem = ({
  device
}: {
  device: Device
}) => {
  return (
    <tbody>
      <tr key={device.id}>
        <td>{device.serialNumber}</td>
        <td>{getSecurityIcons(device.security, device.lastCheckInDate)}</td>
      </tr>
    </tbody>
  )
};

export { DeviceItem };