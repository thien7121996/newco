import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { NextPageWithLayout } from "./../_app";
import { Layout } from "@/components/layouts/Layout";
import { CareerAndNews } from "@/components/pages/CareerAndNews";
import { TopBarPage } from "@/components/ui/TopBarPage";
import HelmetProvider from "@/contexts/Router/HelmetProvider";

const CareerAndNewsPage: NextPageWithLayout = ({}) => {
  const { t } = useTranslation();

  return (
    <>
      <HelmetProvider
        title="Career And News"
        description={t("home.description")}
      />
      <>
        <TopBarPage headingPage="Career and News" />
        <CareerAndNews />
      </>
    </>
  );
};

CareerAndNewsPage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default CareerAndNewsPage;
