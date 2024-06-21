import { Icon } from '@iconify/react';
import { Security } from '../devices/devices';

const HOURS_DAY = 24;
const MINUTES_HOUR = 60;
const SECONDS_MINUTE = 60

const getSecurityIcons = (security: Security, lastCheckInDate: number) => {
  const now = Math.floor(Date.now() / 1000);
  const thirtyDaysInSeconds = 30 * HOURS_DAY * MINUTES_HOUR * SECONDS_MINUTE;

  if (now - lastCheckInDate > thirtyDaysInSeconds) {
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