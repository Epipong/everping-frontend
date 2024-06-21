import { Icon } from '@iconify/react';
import { Security } from '../devices/devices-list';
import { isOlderThan30Days } from '../utils/utils';

const getSecurityIcons = (security: Security, lastCheckInDate: number) => {
  if (isOlderThan30Days(lastCheckInDate)) {
      return <Icon icon="mdi:clock" color="grey" />;
  }

  const icons = [];

  if (!security.firewall) {
    icons.push(<Icon icon="mdi:wall" color="red" key="firewall" />);
  }
  if (!security.antivirus) {
    icons.push(<Icon icon="mdi:antivirus" color="red" key="antivirus" />);
  }
  if (!security.encryption) {
    icons.push(<Icon icon="mdi:lock-off" color="red" key="encryption" />);
  }
  if (icons.length === 0) {
    icons.push(<Icon icon="mdi:shield-check" color="green" key="healthy" />);
  }

  return icons;
};

export { getSecurityIcons };