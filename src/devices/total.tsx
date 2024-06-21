import { Device } from "./devicesList"

const TotalDevices = ({
  devices
}: {
  devices: Device[]
}) => {
  const healthyDevices = devices.filter(device => {
    const { firewall, antivirus, encryption } = device.security;
    return firewall && antivirus && encryption;
  })

  return (
    <div>
      <p>Total Devices: {devices.length}</p>
      <p>Devices Displayed: {devices.length}</p>
      <p>Healthy Devices Percentage: {(9).toFixed(2)}%</p>
    </div>
  )
}

export { TotalDevices }