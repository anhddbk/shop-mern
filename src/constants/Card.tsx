import { Card, Space, Statistic } from "antd";
import { CardProps } from "models";

export const DashboardCard = (props: CardProps) => {
    return (
      <Card>
        <Space direction="horizontal">
          {props.icon}
          <Statistic title={props.title} value={props.value} />
        </Space>
      </Card>
    );
  };