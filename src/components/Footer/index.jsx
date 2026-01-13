import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>api by <FooterLink href="https://newsapi.org" target="_blank">NewsAPI</FooterLink></FooterText>
      <FooterText>Made by yoonjaehong</FooterText>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: ${props => props.theme.card};
  border-top: 1px solid ${props => props.theme.border};
`;

const FooterText = styled.span`
  font-size: 0.85rem;
  opacity: 0.7;
`;

const FooterLink = styled.a`
  color: ${props => props.theme.text};
`;
