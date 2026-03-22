import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectsSectionContainer = styled(motion.section)`
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;

export const ProjectsTitle = styled(motion.h2)`
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

export const ProjectsGrid = styled(motion.div)`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    margin-top: 1.5rem;
    gap: 1.5rem;
  }
`;

export const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.colors.charcoal};
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  transition-property: border-color, color;
  transition-duration: 300ms;

  &:hover {
    border-color: ${({ theme }) => theme.colors.metal};
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const ProjectCardTitle = styled.h3`
  background: linear-gradient(135deg, #D4AF37 0%, #FFF2CD 50%, #D4AF37 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 4px 15px rgba(212, 175, 55, 0.4);

  font-size: 1.25rem;
  font-family: ${({ theme }) => theme.fonts.serif};
  color: ${({ theme }) => theme.colors.gray100};

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const ProjectCardDescription = styled.p`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.gray400};

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ProjectCardList = styled.ul`
  margin-top: 0.75rem;
  padding-left: 1.25rem;
  color: ${({ theme }) => theme.colors.gray300};
  list-style-type: disc;
  font-size: 0.875rem;

  li {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const ProjectTags = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const ProjectTag = styled.span`
  background-color: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.metal};
  font-size: 0.875rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-radius: 9999px;

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;
