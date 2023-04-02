import { Button } from 'antd';
import React from 'react';

import { Link } from 'react-router-dom';

export const Title: React.FC = () => {
  return (
    <Button>
      <Link to="/">
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          alt="mern"
          width="28px"
        />
      </Link>
    </Button>
  );
};
