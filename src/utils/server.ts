import { parseCookieString } from "./cookie/getCookies";

/** Get cookie at Next request  */
export const cookie = (cookie?: string) => {
  const cookies = !!cookie ? parseCookieString(cookie) : {};
  return { accessToken: cookies?.accessToken };
};
