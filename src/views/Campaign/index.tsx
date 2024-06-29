import {
  Anchor,
  Button,
  Divider,
  Grid,
  Group,
  Paper,
  Stack,
  Title,
} from "@mantine/core";
import _ from "lodash";
import Link from "next/link";
import { useEffect, useState } from "react";
import env from "~/config/env";
import EmptyRecord from "~/core/components/Empty/EmptyRecord";
import { hiddenAddress } from "~/core/utils/string";
import Layout from "~/layouts";
import campaignFactory from "~/solidity/node/factory";

export default function CampaignPage() {
  const [factory, setFactory] = useState([]);

  useEffect(() => {
    getFactory();
  }, []);

  const getFactory = async () => {
    const new_campaign = campaignFactory(env.CONTRACT_ADDRESS);

    console.log({ new_campaign });
    const result = await new_campaign.methods.getDeployedCampaigns().call();

    console.log(result);

    // @ts-expect-error
    setFactory(result);
  };

  return (
    <Layout>
      <Group justify="space-between">
        <Title>Open Campaigns</Title>
        <Button radius="md">Create</Button>
      </Group>

      <Divider my={20} variant="dashed" />

      <Grid columns={24} justify="center">
        {!_.isEmpty(factory) ? (
          factory.map((address) => {
            return (
              <Grid.Col span={12} key={address}>
                <Paper
                  p={20}
                  shadow="md"
                  radius="lg"
                  style={{ overflowWrap: "break-word" }}
                >
                  <Title order={4}>{hiddenAddress(address)}</Title>

                  <Group justify="right">
                    <Anchor
                      component={Link}
                      href={`/campaign/${address}`}
                      underline="hover"
                    >
                      View Campaign
                    </Anchor>
                  </Group>
                </Paper>
              </Grid.Col>
            );
          })
        ) : (
          <Stack mt={60}>
            <EmptyRecord />
          </Stack>
        )}
      </Grid>
    </Layout>
  );
}
