import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ExperienceSectionContainer = styled(motion.section)`
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

export const ExperienceTitle = styled(motion.h2)`
  background: linear-gradient(135deg, #D4AF37 0%, #FFF2CD 50%, #D4AF37 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 4px 15px rgba(212, 175, 55, 0.4);

  font-size: 1.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray200};
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }
`;

export const ExperienceGrid = styled(motion.div)`
  position: relative;
  display: grid;
  gap: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 1.5rem;
    height: 100%;
    width: 2px;
    background-color: ${({ theme }) => theme.colors.metal};
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    &::before {
      left: 1rem;
    }
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    &::before {
      left: 0.75rem;
    }
    gap: 1rem;
  }
`;

export const ExperienceCard = styled(motion.div)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.charcoal};
  padding: 1.5rem 1.5rem 1.5rem 4rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.metal}30;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  &::before {
    content: '';
    position: absolute;
    top: 1.75rem;
    left: 1.5rem;
    transform: translateX(-50%);
    width: 1rem;
    height: 1rem;
    border-radius: 9999px;
    background-color: ${({ theme }) => theme.colors.metal};
  }

  @media (max-width: 768px) {
    padding: 1.25rem 1.25rem 1.25rem 3.5rem;
    &::before {
      top: 1.5rem;
      left: 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem 1rem 1rem 3rem;
    &::before {
      top: 1.25rem;
      left: 0.75rem;
      width: 0.8rem;
      height: 0.8rem;
    }
  }
`;

export const ExperienceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

export const CompanyIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  color: ${({ theme }) => theme.colors.gray400};

  @media (max-width: 480px) {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const ExperienceCardTitle = styled.h3`
  background: linear-gradient(135deg, #D4AF37 0%, #FFF2CD 50%, #D4AF37 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 4px 15px rgba(212, 175, 55, 0.4);

  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray100};

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const ExperienceCardSubtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray400};
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
  }
`;

export const ExperienceCardDescription = styled(motion.ul)`
  list-style-position: inside;
  padding-left: 0;
  color: ${({ theme }) => theme.colors.gray300};
  li {
    margin-bottom: 0.5rem;
    padding-left: 1rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    li {
      font-size: 0.9rem;
      padding-left: 0.5rem;
    }
  }
`;
