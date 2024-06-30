import {
  Button,
  Grid,
  Group,
  NumberInput,
  Paper,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useSessionStorage } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { IconX } from "@tabler/icons-react";
import _ from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { z } from "zod";
import env from "~/config/env";
import Layout from "~/layouts";
import campaignFactory from "~/solidity/node/factory";

const campaignSchema = z.object({
  manager: z.string({
    required_error: "manager is required",
    invalid_type_error: "manager must be a string",
  }),
  minimumContribution: z.number({
    required_error: "minimumContribution is required",
    invalid_type_error: "minimumContribution must be a number",
  }),
});

export default function CampaignForm() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  const [etherAddress] = useSessionStorage({
    key: "ether_address",
    defaultValue: "",
  });

  const form = useForm({
    initialValues: {
      manager: etherAddress,
      minimumContribution: 100,
    },
    validate: zodResolver(campaignSchema),
  });

  useEffect(() => {
    if (!_.isEmpty(etherAddress) && !_.isNil(etherAddress)) {
      form.setFieldValue("manager", etherAddress);
    }
  }, [etherAddress, form, form.values.manager]);

  const onFormSubmit = async () => {
    setVisible(true);

    const { minimumContribution, manager } = form.values;

    try {
      const contract = campaignFactory(env.CONTRACT_ADDRESS);
      // create campaign
      await contract.methods
        .createCampaign(minimumContribution)
        .send({ from: manager });

      // redirect
      router.push("/");
    } catch (error: any) {
      const errMessage = _.get(error, "message", "");

      notifications.show({
        title: `Something went wrong!`,
        message: errMessage,
        color: "red",
        withCloseButton: true,
        icon: <IconX size={16} />,
      });
    } finally {
      setVisible(false);
    }
  };

  return (
    <Layout>
      <Stack>
        <Group gap={10}>
          <Title order={2}>Campaign</Title>
          <Text fw={500}>Create</Text>
        </Group>

        <form onSubmit={form.onSubmit(onFormSubmit)}>
          <Grid>
            <Grid.Col span={{ base: 12, sm: 8 }}>
              <Paper p={20} radius="md">
                <Stack>
                  <TextInput
                    label="Owner Address"
                    placeholder="Input Owner Address"
                    disabled={!!form.values.manager}
                    {...form.getInputProps("manager")}
                  />

                  <NumberInput
                    label="Minimum Contributor"
                    placeholder="Input Minimum Contributor"
                    min={100}
                    suffix=" wei"
                    {...form.getInputProps("minimumContribution")}
                  />
                </Stack>
              </Paper>
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 4 }}>
              <Paper p={20} radius="md">
                <Stack>
                  <Title order={4}>Actions</Title>
                  <Button type="submit" loading={visible} radius="md">
                    Save
                  </Button>
                </Stack>
              </Paper>
            </Grid.Col>
          </Grid>
        </form>
      </Stack>
    </Layout>
  );
}
