import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+2347089426312">+2347089426312</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:ayomide.zaid@gmail.com">ayomide.zaid@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan><span>&#169;</span> Zaid Oluwatamilore 2021</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons target="blank" href="https://github.com/Zaid837">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons target="blank" href="https://linkedin.com/in/tamilorezaid">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons target="blank" href="https://instagram.com/zaid_tamilore">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        </SocialContainer>
        
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
