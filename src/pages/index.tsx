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
import Layout from "~/layouts";

const campaigns = [
  {
    address: "0x5a2aB87d167c53856e557AAC95a415f1b45f7c8B",
  },
  {
    address: "0x0F18d25A05030a6BfFD19dE42736edC540b5d222",
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
                <Title order={3}>{item.address}</Title>

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
