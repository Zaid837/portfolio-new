import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCode } from 'react-icons/di';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';

const Header = () => {
  return (
    <Container>
      <Div1>
        <Link href="/">
          <a
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              marginBottom: '20px',
            }}
          >
            {/* <Span>ZAID</Span> */}
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons target="blank" href="https://github.com/Zaid837">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons target="blank" href="https://linkedin.com/in/tamilorezaid">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons target="blank" href="https://instagram.com/zaid_tamilore">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
