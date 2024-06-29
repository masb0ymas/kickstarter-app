import { Paper, Stack, Text, Title } from "@mantine/core";

interface CardProps {
  title: string | number;
  subtitle: string;
  content: string;
}

export default function CardCampaign(props: CardProps) {
  const { title, subtitle, content } = props;

  return (
    <Paper
      p={20}
      shadow="md"
      radius="lg"
      style={{ overflowWrap: "break-word" }}
    >
      <Stack gap={5}>
        <Title order={5}>{title}</Title>
        <Text c="gray" size="sm">
          {subtitle}
        </Text>
        <Text>{content}</Text>
      </Stack>
    </Paper>
  );
}
