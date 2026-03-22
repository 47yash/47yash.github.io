import { motion, Variants } from 'framer-motion';
import { 
  ExperienceSectionContainer, 
  ExperienceTitle, 
  ExperienceGrid, 
  ExperienceCard, 
  ExperienceHeader,
  CompanyIcon,
  ExperienceCardTitle, 
  ExperienceCardSubtitle,
  ExperienceCardDescription 
} from '../styles/ExperienceStyles';

const experiences = [
  {
    company: 'AMDOCS',
    role: 'Software Developer',
    date: 'Apr 24 - Present',
    description: [
      'Migrated legacy Java applications to Spring Boot, improving performance by 30% and system stability.',
      'Used React.js, enhancing UI responsiveness and reducing production issues by 50% .',
      'Replaced MQ-based integrations with REST APIs, reducing data latency by 60%.',
      'Supported and maintained backend services, including incident analysis, troubleshooting, and root-cause resolution.',
      'Led partial cloud migration to AWS (EC2, S3, RDS) with minimal downtime.',
      'Worked in Agile/Scrum environment using JIRA, Git, CI/CD pipelines.',
      'Developed and supported microservices for large-scale enterprise applications.',
    ]
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const listVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const ExperienceSection = () => {
  return (
    <ExperienceSectionContainer
      id="experience"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <ExperienceTitle variants={itemVariants}>
        Experience
      </ExperienceTitle>

      <ExperienceGrid>
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.company}
            variants={itemVariants}
          >
            <ExperienceHeader>
              <CompanyIcon xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-briefcase" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 7h18a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-18a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2"></path>
                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="12" y1="12" x2="12" y2="12.01"></line>
                <path d="M3 13h18"></path>
              </CompanyIcon>
              <div>
                <ExperienceCardTitle>{experience.role}</ExperienceCardTitle>
                <ExperienceCardSubtitle>{experience.company} | {experience.date}</ExperienceCardSubtitle>
              </div>
            </ExperienceHeader>
            <ExperienceCardDescription
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              {experience.description.map((point, index) => (
                <motion.li key={index} variants={listItemVariants}>{point}</motion.li>
              ))}
            </ExperienceCardDescription>
          </ExperienceCard>
        ))}
      </ExperienceGrid>
    </ExperienceSectionContainer>
  );
};

export default ExperienceSection;
