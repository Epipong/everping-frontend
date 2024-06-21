export type Security = {
  firewall: boolean;
  antivirus: boolean;
  encryption: boolean
}

export type Device = {
  id: string;
  clientId: string;
  manufacturer: string;
  model: string;
  serialNumber: string;
  cpu: string;
  ram: number;
  storage: number;
  hardwareId: string;
  security: Security;
  user: string;
  lastCheckInDate: number
};