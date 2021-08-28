import styled, { keyframes } from 'styled-components';

const stars = '/background-stars.svg';

const animatedBg = keyframes`
 0%{	
    transform: translate3d(0, 0, 0);
 }	
  100% {
    transform: translate3d( 0, -1200px, 0);}
`;

export const Container = styled.div`
  // max-width: 1280px;
  width: 100%;
  margin: auto;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 3873px;
    top: -30%;
    left: -50%;
    z-index: -1;
    background-image: url(${stars});
    animation: ${animatedBg} 30s linear infinite;
      background-repeat: repeat;
`;
