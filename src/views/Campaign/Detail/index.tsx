import { Divider, Grid, Group, Title } from "@mantine/core";
import _ from "lodash";
import { useRouter } from "next/router";
import { hiddenAddress } from "~/core/utils/string";
import Layout from "~/layouts";
import CardCampaign from "../partials/CardCampaign";

export default function CampaignDetailPage() {
  const router = useRouter();
  const id = _.get(router, "query.id", "") as string;

  const listDetail = [
    {
      id: 1,
      title: hiddenAddress(id),
      subtitle: "Address of Manager",
      content:
        "The manager created this campaign and can create request to withdraw money.",
    },
    {
      id: 2,
      title: 100,
      subtitle: "Minimum contribute (wei)",
      content:
        "You must contribute at least this much wei to become a approver.",
    },
    {
      id: 3,
      title: 0,
      subtitle: "Number of Requests",
      content:
        "A request tries to withdraw money from the contract. Request must be approved by approvers.",
    },
    {
      id: 4,
      title: 0,
      subtitle: "Number of Approvers",
      content: "Number of people of who have already donated to this campaign.",
    },
    {
      id: 5,
      title: 0,
      subtitle: "Campaign Balance (ether)",
      content: "The balance is how much money this campaign has left to spend.",
    },
  ];

  return (
    <Layout>
      <Group justify="space-between">
        <Title>Campaign</Title>
      </Group>

      <Divider my={20} variant="dashed" />

      <Grid my={20} columns={12}>
        {listDetail.map((item) => {
          return (
            <Grid.Col span={6} key={item.id}>
              <CardCampaign
                title={item.title}
                subtitle={item.subtitle}
                content={item.content}
              />
            </Grid.Col>
          );
        })}
      </Grid>
    </Layout>
  );
}
