import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled(motion.section)`
  padding-top: 6rem;
  padding-bottom: 6rem;

  @media (max-width: 768px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  @media (max-width: 480px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

export const HeroTitle = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 3.75rem;
  color: ${({ theme }) => theme.colors.gray100};

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.25rem;
  }
`;

export const HeroParagraph = styled(motion.p)`
  margin-top: 1rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.gray400};
  max-width: 48rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    max-width: 100%;
  }
`;
