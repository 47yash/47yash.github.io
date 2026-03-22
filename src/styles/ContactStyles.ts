import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactSectionContainer = styled(motion.section)`
  padding-top: 4rem;
  padding-bottom: 4rem;
  text-align: center;

  @media (max-width: 768px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;

export const ContactTitle = styled(motion.h2)`
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

export const ContactText = styled(motion.p)`
  margin-top: 1rem;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.gray400};
  max-width: 36rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    max-width: 100%;
    margin-top: 0.75rem;
  }
`;

export const ContactButton = styled(motion.a)`
  margin-top: 2rem;
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.metal};
  color: ${({ theme }) => theme.colors.ink};
  font-weight: 500;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 0.5rem;
  transition-property: background-color;
  transition-duration: 300ms;

  &:hover {
    background-color: rgba( ${({ theme }) => parseInt(theme.colors.metal.slice(1,3), 16)}, ${({ theme }) => parseInt(theme.colors.metal.slice(3,5), 16)}, ${({ theme }) => parseInt(theme.colors.metal.slice(5,7), 16)}, 0.8);
  }
`;

export const ContactInfoWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    flex-direction: column; /* Stack items vertically */
    gap: 0.75rem;
    margin-top: 1rem;
  }
`;

export const ContactInfoItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.gray400};
  text-decoration: none;
  transition: color 300ms;

  &:hover {
    color: ${({ theme }) => theme.colors.metal};
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ContactIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;

  @media (max-width: 480px) {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
