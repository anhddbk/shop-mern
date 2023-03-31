import { Col, Space } from 'antd';
import React from 'react';

function Products() {
  return (
    <div>
      <Col span={16} push={8}>col-18 col-push-6</Col>
      <Col span={8} pull={16}>col-6 col-pull-18</Col>
    </div>
  );
}

export default Products;
