import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledHeader = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media (max-width: 480px) {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;

export const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  font-family: 'Playfair Display', serif;
  color: #FFD700;
  text-shadow: 0 0 8px rgba(255, 215, 0, 0.6);

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;

export const NavItem = styled(motion.li)`
  /* No direct styling for li, as the a tag holds the styles */
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.gray400};
  transition-property: color, transform;
  transition-duration: 300ms;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.gray100};
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
