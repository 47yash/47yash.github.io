import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutSectionContainer = styled(motion.section)`
  padding-top: 4rem;
  padding-bottom: 4rem;

  @media (max-width: 768px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;

export const AboutTitle = styled(motion.h2)`
  background: linear-gradient(135deg, #D4AF37 0%, #FFF2CD 50%, #D4AF37 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 4px 15px rgba(212, 175, 55, 0.4);

  font-size: 1.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray200};

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const Divider = styled(motion.div)`
  margin-top: 1rem;
  height: 2px;
  width: 6rem;
  background-color: ${({ theme }) => theme.colors.metal};
  transform-origin: left;
`;

export const PhilosophyContent = styled(motion.div)`
  margin-top: 2rem;
  & > p {
    margin-bottom: 1.5rem;
  }
  & > p:last-child {
    margin-bottom: 0;
  }
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.gray400};
  max-width: 48rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    max-width: 100%;
  }
`;
