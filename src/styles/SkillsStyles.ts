import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SkillsSectionContainer = styled(motion.section)`
  padding-top: 6rem;
  padding-bottom: 6rem;
  background: radial-gradient(circle at center, ${({ theme }) => theme.colors.charcoal} 0%, ${({ theme }) => theme.colors.ink} 100%);

  @media (max-width: 768px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

export const SkillsTitle = styled(motion.h2)`
  font-size: 2.75rem;
  font-family: ${({ theme }) => theme.fonts.serif};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gray100} 0%, ${({ theme }) => theme.colors.metal} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-bottom: 3.5rem;
  letter-spacing: 0.05em;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: ${({ theme }) => theme.colors.metal};
    margin: 1rem auto 0;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
`;

export const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2.5rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 1.25rem;
  }
`;

export const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  background: linear-gradient(145deg, rgba(30,30,30,0.8) 0%, rgba(20,20,20,0.9) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.1); /* Subtle metal border */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  padding: 2rem 1.5rem;
  border-radius: 1rem;
  min-height: 260px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.metal}, transparent);
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(212, 175, 55, 0.15);
    border-color: rgba(212, 175, 55, 0.4);
    
    &::before {
      opacity: 1;
    }

    img {
      transform: scale(1.1);
      filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.4));
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    min-height: 220px;
  }
`;

export const SkillLogo = styled(motion.img)`
  width: 64px;
  height: 64px;
  margin-bottom: 1.5rem;
  transition: all 0.4s ease;
  object-fit: contain;

  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
    margin-bottom: 1rem;
  }
`;

export const SkillName = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray100};
  margin-bottom: 0.75rem;
  letter-spacing: 0.02em;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const SkillDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray400};

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
