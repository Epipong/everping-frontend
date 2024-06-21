import { isOlderThan30Days } from "../utils/date-operation";
import { Device } from "./devicesList"

const TotalDevices = ({
  devices
}: {
  devices: Device[]
}) => {
  const healthyDevices = devices.filter(device => {
    const { firewall, antivirus, encryption } = device.security;
    return firewall && antivirus && encryption && !isOlderThan30Days(device.lastCheckInDate);
  })
  const healthyPercentage = devices.length > 0 ?
    Math.floor(healthyDevices.length / devices.length * 100):
    0;

  return (
    <div>
      <p>Total Devices: {devices.length}</p>
      <p>Devices Displayed: {devices.length}</p>
      <p>Healthy Devices Percentage: {healthyPercentage}%</p>
    </div>
  )
}

export { TotalDevices }