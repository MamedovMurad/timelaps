// interfaces/CameraResponse.ts

export interface Company {
    id: number;
    uuid: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    representer: string;
    representerPhone: string;
    subscriptionDeadlineStr: string;
  }
  
  export interface Project {
    id: number;
    name: string;
    startDateStr: string;
    endDateStr: string;
    company: Company;
    photoIntervalInMinute: number;
    daysOfWeek: number[];
    startTime: string;
    endTime: string;
    cameras: string[];
    filesCount: number;
    filesSize: number;
  }
  
  export interface CameraResponse {
    id: number;
    name: string;
    modelInfo: string;
    ip: string;
    port: string;
    vncId: string;
    vncPassword: string;
    raspberryPassword: string;
    number: string;
    raspberryOs: string;
    hostname: string;
    project: Project;
    sshUsername: string;
    accessToken: string;
    lastPingValue: number;
    lastPhotoInSec: number;
    lastConInSec: number;
    lastUsbConInSec: number;
    totalStorage: number;
    usedStorage: number;
    lastFileUrl: string;
    location: string;
    filesCount: number;
    filesSize: number;
    lastUsbCheckResult: boolean;
    type: string;
    usbName: string;
  }
  