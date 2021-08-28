import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => {
  const handleClick = () => {
    window.open(
      'https://drive.google.com/file/d/1SNabpMQUVQHJJZOoZKLxZbiaVRxrlOA_/view?usp=sharing'
    );
  };
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi there,
          <br />I am Zaid Tamilore.
        </SectionTitle>
        <SectionText>
          Software engineer based in Lagos, Nigeria who enjoys making fun and
          interactive web interfaces with code. I also specialize in creating
          eye catching and user focused web applications for clients ranging
          from individuals or small businesses to large corporations.
        </SectionText>
        <Button onClick={handleClick}>Resume</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
