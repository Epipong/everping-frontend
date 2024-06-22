import { ProgressBar, Table } from "react-bootstrap";
import { isHealthy, isOlderThan30Days } from "../utils/utils";
import { Device } from "./devices-list"

const TotalDevices = ({
  devices,
  filteredDevices,
}: {
  devices: Device[]
  filteredDevices: Device[],
}) => {
  const healthyDevices = filteredDevices.filter(device => isHealthy(device))
  const healthyPercentage = filteredDevices.length > 0 ?
    Math.floor(healthyDevices.length / filteredDevices.length * 100) :
    0;

  return (
    <Table className='mt-3' striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Total Devices</th>
          <th>Devices Displayed</th>
          <th>Healthy Devices</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{devices.length}</td>
          <td>{filteredDevices.length}</td>
          <td>
            <ProgressBar
              animated
              now={healthyPercentage}
              label={`${healthyPercentage}%`}
            />
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export { TotalDevices }