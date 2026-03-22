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
  background: linear-gradient(135deg, #D4AF37 0%, #FFF2CD 50%, #D4AF37 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px) scale(1.05);
    filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.6));
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;
