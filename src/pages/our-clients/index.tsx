import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { NextPageWithLayout } from "./../_app";
import { Layout } from "@/components/layouts/Layout";
import { OurClients } from "@/components/pages/OurClients";
import { Partner } from "@/components/ui/Partner";
import { TopBarPage } from "@/components/ui/TopBarPage";
import HelmetProvider from "@/contexts/Router/HelmetProvider";

const OurClientsPage: NextPageWithLayout = ({}) => {
  const { t } = useTranslation();

  return (
    <>
      <HelmetProvider title="Our Clients" description={t("home.description")} />
      <>
        <TopBarPage headingPage="Our Clients" />
        <OurClients />
        <Partner />
      </>
    </>
  );
};

OurClientsPage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default OurClientsPage;
