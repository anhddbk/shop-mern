import { Card, Space, Statistic } from 'antd';

type CardProps = {
  icon?: React.ReactNode;
  title?: string;
  value?: any;
};

export const Cards = (props: CardProps) => {
  return (
    <Card>
      <Space direction="horizontal">
        {props.icon}
        <Statistic title={props.title} value={props.value} />
      </Space>
    </Card>
  );
};
