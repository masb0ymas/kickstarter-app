import { Burger, Button, Container, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { useState } from "react";
import env from "~/config/env";
import classes from "./Header.module.css";

const links = [{ link: "/", label: "Campaign" }];

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState("");

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  const title = env.APP_NAME;

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Text fw={600} size="xl" component={Link} href={"/"}>
          {title}
        </Text>
        <Group gap={5} visibleFrom="xs">
          {items}
          <Button radius="md" variant="outline">
            Connect Wallet
          </Button>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
