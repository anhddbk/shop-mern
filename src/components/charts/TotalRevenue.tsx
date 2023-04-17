import { Card } from 'antd';
import { useEffect, useState } from 'react';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { RevenueApi } from 'services/revenueApi';
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function TotalRevenueChart() {
  const [reveneuData, setReveneuData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    RevenueApi.getAll().then((response) => {
      const labels = (response as any).carts.map((cart: any) => {
        return `User-${cart.userId}`;
      });
      const data = (response as any).carts.map((cart: any) => {
        return cart.discountedTotal;
      });

      const dataSource: any = {
        labels,
        datasets: [
          {
            label: 'Revenue',
            data: data,
            backgroundColor: 'rgba(255, 0, 0, 1)',
          },
        ],
      };
      setReveneuData(dataSource);
    });
  }, []);

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Order Revenue',
      },
    },
  };

  return (
    <Card style={{ width: 500, height: 250 }}>
      <Bar options={options} data={reveneuData} />
    </Card>
  );
}

export default TotalRevenueChart;
