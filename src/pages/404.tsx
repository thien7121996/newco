import { useTranslation } from "react-i18next";
import HelmetProvider from "@/contexts/Router/HelmetProvider";

/** Custom 404 Page */
const Custom404Page = () => {
  const [t] = useTranslation();
  return (
    <>
      <HelmetProvider title={t("pageNotFound.title")} />
      <p>404</p>
    </>
  );
};

export default Custom404Page;
