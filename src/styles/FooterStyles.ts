import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FooterContainer = styled.footer`
  padding: 2rem 0;
  margin-top: 4rem;
  border-top: 1px solid ${({ theme }) => theme.colors.charcoal};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 2.5rem;
    padding: 1.5rem 0;
  }
`;

export const FooterText = styled(motion.p)`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray400};
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.sans};
  
  a {
    color: ${({ theme }) => theme.colors.metal};
    text-decoration: none;
    transition: color 300ms ease;

    &:hover {
      color: ${({ theme }) => theme.colors.gray100};
    }
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const FooterLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  a {
    color: ${({ theme }) => theme.colors.gray400};
    transition: color 300ms ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: ${({ theme }) => theme.colors.metal};
    }
    
    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;
