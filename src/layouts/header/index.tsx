import { Burger, Button, Container, Group, Text } from "@mantine/core";
import { useDisclosure, useSessionStorage } from "@mantine/hooks";
import _ from "lodash";
import Link from "next/link";
import { useState } from "react";
import { Web3 } from "web3";
import { Eip1193Provider } from "web3/lib/commonjs/providers.exports";
import env from "~/config/env";
import { hiddenAddress } from "~/core/utils/string";
import classes from "./Header.module.css";

const links = [{ link: "/", label: "Campaign" }];

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState("");

  const [etherAddress, setEtherAddress] = useSessionStorage({
    key: "ether_address",
    defaultValue: "",
  });

  const [etherSignature, setEtherSignature] = useSessionStorage({
    key: "ether_signature",
    defaultValue: "",
  });

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

  async function connectWallet() {
    // @ts-expect-error
    const ethereum: Eip1193Provider = window.ethereum;

    const connect = await ethereum.request({
      method: "eth_requestAccounts",
    });

    const web3 = new Web3(ethereum);
    const accounts = await web3.eth.getAccounts();

    const signature = await web3.eth.personal.sign(
      "Hello World!",
      accounts[0],
      ""
    );

    setEtherAddress(accounts[0]);
    setEtherSignature(signature);

    console.log({ connect, accounts, signature });
  }

  let ensName = hiddenAddress(etherAddress, 30, 20);

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Text fw={600} size="xl" component={Link} href={"/"}>
          {title}
        </Text>
        <Group gap={5} visibleFrom="xs">
          {items}

          {!_.isNil(etherAddress) && !_.isEmpty(etherAddress) ? (
            <Button radius="md" variant="outline">
              {ensName}
            </Button>
          ) : (
            <Button radius="md" variant="outline" onClick={connectWallet}>
              Connect Wallet
            </Button>
          )}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
