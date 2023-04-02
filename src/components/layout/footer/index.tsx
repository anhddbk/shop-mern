import { Typography } from 'antd';
import { FooterStyled } from 'styled/Layout';

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <Typography.Link href="tel:+123456789">+123456789</Typography.Link>
      <Typography.Link href="https://www.google.com" target={'_blank'}>
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target={'_blank'}>
        Terms of Use
      </Typography.Link>
    </FooterStyled>
  );
};

export default Footer;
