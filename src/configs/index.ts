import dev from "./env/dev";
import { Config } from "./types";

const env = process.env.NEXT_PUBLIC_ENV || "dev";

const getConfig = (): Config => {
  if (env === "dev") {
    return dev;
  }

  return dev;
};

export default getConfig();
