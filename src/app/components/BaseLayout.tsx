"use client";

import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  padding: 50px;

  @media (max-width: 768px) {
    padding-top: 120px;
  }
`;

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
    </Wrapper>
  );
}
