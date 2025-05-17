"use client";

import BaseLayout from "./components/BaseLayout";
import Hero from "./components/Hero";
import GlobalStyles from "./styles/globalStyles";

export default function Home() {
  return (
    <BaseLayout>
      <GlobalStyles />
      <Hero />
    </BaseLayout>
  );
}
