import useBackgroundImage from "@/hooks/useBackgroundImage";
import useTitle from "@/hooks/useTitle";

import { PageLayoutProps } from "./Page.type";
import { PropsWithChildren } from "react";

function PageLayout({
  title,
  titleAppendAppName,
  backgroundImagePath,
  children,
}: PropsWithChildren<PageLayoutProps>) {
  useTitle(title, titleAppendAppName);
  useBackgroundImage(backgroundImagePath);

  return children;
}

export default PageLayout;
