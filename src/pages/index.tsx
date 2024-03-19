import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { NextPageWithLayout } from "./_app";
import { Layout } from "@/components/layouts/Layout";
import { Home } from "@/components/pages/Home";
import HelmetProvider from "@/contexts/Router/HelmetProvider";

const HomePage: NextPageWithLayout = ({}) => {
  const { t } = useTranslation();

  return (
    <>
      <HelmetProvider
        title={t("home.title")}
        description={t("home.description")}
      />
      <Home />
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default HomePage;
