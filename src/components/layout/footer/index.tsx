import { Typography } from 'antd';
import { HeaderAndFooterStyled } from 'styled/HeaderAndFooter.styled';

const Footer: React.FC = () => {
  return (
    <HeaderAndFooterStyled
      height={50}
      borderTop="1px solid rgba(0, 0, 0, 0.15)"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Typography.Link href="tel:+123456789">+123456789</Typography.Link>
      <Typography.Link href="https://www.google.com" target={'_blank'}>
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target={'_blank'}>
        Terms of Use
      </Typography.Link>
    </HeaderAndFooterStyled>
  );
};

export default Footer;
