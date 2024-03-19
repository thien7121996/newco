import Head from "next/head";
import { FC } from "react";
import { theme } from "@/configs/theme";
import { katakanaHalfwidthToFullwidth } from "@/utils/katakanaHalfwidthToFullwidth";

type HelmetProviderType = {
  title: string;
  description?: string;
  url?: string;
};
const descriptionDefault = "Corize Inc";
/** SEO support provider */
const HelmetProvider: FC<HelmetProviderType> = ({
  description = descriptionDefault.replace(/<br>/gi, ""),
  title,
}) => {
  return (
    <Head>
      {/* Main meta tags */}
      <title>{katakanaHalfwidthToFullwidth(title)}</title>
      <meta name="title" content={katakanaHalfwidthToFullwidth(title)} />
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
      <meta name="theme-color" content={theme.colors.primary} />
      {/* Use for dev */}
      <meta name="google" content="nositelinkssearchbox" />
      <meta name="theme-color" content={theme.colors.primary} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={katakanaHalfwidthToFullwidth(title)} />
      <meta property="og:description" content={description} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary"></meta>
      <meta
        property="twitter:title"
        content={katakanaHalfwidthToFullwidth(title)}
      />
      <meta property="twitter:description" content={description} />
    </Head>
  );
};

export default HelmetProvider;
