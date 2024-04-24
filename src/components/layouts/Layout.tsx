"use client";
import { atom, useAtom } from "jotai";
import { debounce } from "lodash";
import React, { FC, PropsWithChildren, useCallback, useRef } from "react";
import { Footer } from "./footers";
import { Header } from "./headers";
import { LayoutWrapper, LayoutPageWrapper } from "./styles";

export const headerHeightInit = atom(70);

type Props = {
  isMobile: boolean;
};

/** Layout components */
export const Layout: FC<PropsWithChildren<Props>> = ({
  children,
  isMobile,
}) => {
  const bodyRef = useRef<HTMLDivElement>(null);

  const [headerHeight, setHeaderHeight] = useAtom(headerHeightInit);

  const handleSetHeaderHeight = useCallback(
    (height: number) => {
      debounce((height: number) => setHeaderHeight(height), 200)(height);
    },
    [setHeaderHeight],
  );

  const measureRef = (node: object) => {
    if (!(node instanceof HTMLDivElement)) {
      return;
    }

    handleSetHeaderHeight(node.clientHeight);
  };

  return (
    <div ref={bodyRef} id="smooth-wrapper">
      <LayoutWrapper>
        <Header isMobile={isMobile} ref={measureRef} />
        <LayoutPageWrapper
          id="smooth-content"
          style={{ paddingTop: `${headerHeight}px` }}
        >
          {children}

          <Footer />
        </LayoutPageWrapper>
      </LayoutWrapper>
    </div>
  );
};

Layout.displayName = "Layout";
