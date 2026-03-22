import { Variants } from 'framer-motion';
import {
  ProjectsSectionContainer,
  ProjectsTitle,
  ProjectsGrid,
  ProjectCard,
  ProjectCardTitle,
  ProjectCardDescription,
  ProjectTags,
  ProjectTag
} from '../styles/ProjectsStyles';

const projects = [
  {
    title: 'Project GRAMSAHAY',
    description: 'Robust Full-Stack Solution for grievance Redressal System.',
    tags: ['SpringBoot', 'React.js', 'MYSQL', 'Hibernate', 'BootStrap'],
  },
  {
    title: 'Project GainGame',
    description: 'Skill Building Web Platform which is AI based to learn any skill. This websites let you track your progress like a real game you will have to level up to master the skill.',
    tags: ['SpringBoot', 'React.js', 'MYSQL', 'Hibernate', 'Tailwind CSS', 'JWT', 'Spring Security', 'LLM', 'AI',], // Updated tag
  },
  {
    title: 'Real-Time Tracking System',
    description: 'Designed and implemented an event-driven real-time tracking system enabling low-latency geolocation updates and interactive map visualization.',
    tags: ['Spring Boot', 'WebSocket (STOMP)', 'Redis', 'React', 'Leaflet.js', 'Docker'],
  }
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      mass: 1,
    },
  },
};

const ProjectsSection = () => {
  return (
    <ProjectsSectionContainer
      id="projects"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <ProjectsTitle variants={itemVariants}>
        Featured Projects
      </ProjectsTitle>

      <ProjectsGrid variants={itemVariants}>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
          >
            <ProjectCardTitle>{project.title}</ProjectCardTitle>
            <ProjectCardDescription>{project.description}</ProjectCardDescription>
            <ProjectTags>
              {project.tags.map((tag) => (
                <ProjectTag
                  key={tag}
                >
                  {tag}
                </ProjectTag>
              ))}
            </ProjectTags>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSectionContainer>
  );
};

export default ProjectsSection;
