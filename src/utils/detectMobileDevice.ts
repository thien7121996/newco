import UAParser from "ua-parser-js";

export const detectMobileDevice = (ua: string) => {
  const device = new UAParser(ua).getDevice();
  return device.type === "mobile";
};
