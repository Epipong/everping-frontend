import { Device } from "../devices/devices-list";

const HOURS_DAY = 24;
const MINUTES_HOUR = 60;
const SECONDS_MINUTE = 60;

const isOlderThan30Days = (lastCheckInDate: number): boolean => {
  const now = Math.floor(Date.now() / 1000);
  const thirtyDaysInSeconds = 30 * HOURS_DAY * MINUTES_HOUR * SECONDS_MINUTE;
  return (now - lastCheckInDate) > thirtyDaysInSeconds;
};

const isHealthy = (device: Device) => {
  const { firewall, antivirus, encryption } = device.security;
  return firewall && antivirus && encryption && !isOlderThan30Days(device.lastCheckInDate);
}

export { isOlderThan30Days, isHealthy };