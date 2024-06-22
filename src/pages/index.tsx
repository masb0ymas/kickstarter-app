import {
  Anchor,
  Button,
  Divider,
  Grid,
  Group,
  Paper,
  Title,
} from "@mantine/core";
import Link from "next/link";
import { hiddenAddress } from "~/core/utils/string";
import Layout from "~/layouts";

const campaigns = [
  {
    address: "0xe7F5697269C9B2CD490D42F163f97D04CEB69995",
  },
  {
    address: "0x74214D6ADB05CFce7E37E1E7d45685EcEe72D8EA",
  },
];

export default function IndexPage() {
  return (
    <Layout>
      <Group justify="space-between">
        <Title>Open Campaigns</Title>
        <Button radius="md">Create</Button>
      </Group>

      <Divider my={20} variant="dashed" />

      <Grid columns={24}>
        {campaigns.map((item) => {
          return (
            <Grid.Col span={12} key={item.address}>
              <Paper
                p={20}
                shadow="md"
                radius="lg"
                style={{ overflowWrap: "break-word" }}
              >
                <Title order={4}>{hiddenAddress(item.address)}</Title>

                <Group justify="right">
                  <Anchor
                    component={Link}
                    href={`/campaign/${item.address}`}
                    underline="hover"
                  >
                    View Campaign
                  </Anchor>
                </Group>
              </Paper>
            </Grid.Col>
          );
        })}
      </Grid>
    </Layout>
  );
}
