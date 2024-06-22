import { Icon } from '@iconify/react';
import { Device } from '../devices/devices-list';
import { isHealthy, isOlderThan30Days } from '../utils/utils';

const getSecurityIcons = (device: Device) => {
  if (isOlderThan30Days(device.lastCheckInDate)) {
    return <Icon icon="mdi:clock" color="grey" />;
  } else if (isHealthy(device)) {
    return <Icon icon="mdi:shield-check" color="green" key="healthy" />;
  }

  const icons: JSX.Element[] = [];
  const { firewall, antivirus, encryption } = device.security;

  if (!firewall) {
    icons.push(<Icon icon="mdi:wall" color="red" key="firewall" />);
  }
  if (!antivirus) {
    icons.push(<Icon icon="mdi:antivirus" color="red" key="antivirus" />);
  }
  if (!encryption) {
    icons.push(<Icon icon="mdi:lock-off" color="red" key="encryption" />);
  }

  return icons;
};

export { getSecurityIcons };