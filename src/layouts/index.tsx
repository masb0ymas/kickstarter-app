import React from "react";
import Header from "./header";
import { Container } from "@mantine/core";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <main style={{ backgroundColor: `var(--mantine-color-gray-1)` }}>
      <Header />

      <Container size="md">{children}</Container>
    </main>
  );
}
