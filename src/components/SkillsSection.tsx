import { Variants } from 'framer-motion';
import { SkillsSectionContainer, SkillsTitle, SkillsGrid, SkillCard, SkillName, SkillDescription, SkillLogo } from '../styles/SkillsStyles';

import dockerLogo from '../assets/skills/Docker.png';
import dsaLogo from '../assets/skills/DSA.jfif';
import htmlLogo from '../assets/skills/HTML.jfif';
import javaLogo from '../assets/skills/JAVA.png';
import jpaLogo from '../assets/skills/JPA.png';
import oopLogo from '../assets/skills/OOP.png';
import restLogo from '../assets/skills/rest.png';
import gradleLogo from '../assets/skills/Gradle.webp';
import jenkinsLogo from '../assets/skills/Jenkins.jfif';
import hibernateLogo from '../assets/skills/Hibernate_logo.webp';

const skills = [
  { name: 'Java', logo: javaLogo, description: 'A robust, object-oriented programming language.' },
  { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg', description: 'A versatile scripting language for web development.' },
  { name: 'C++', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg', description: 'A powerful language for system-level programming.' },
  { name: 'C#', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg', description: 'A modern, object-oriented language from Microsoft.' },
  { name: 'Spring Boot', logo: 'https://www.svgrepo.com/show/354380/spring-icon.svg', description: 'A framework for building production-ready Spring applications.' },
  { name: 'JPA', logo: jpaLogo, description: 'A specification for object-relational mapping in Java.' },
  { name: 'Hibernate', logo: hibernateLogo, description: 'A popular ORM framework for Java.' },
  { name: 'REST APIs', logo: restLogo, description: 'Designing and building RESTful web services.' },
  { name: 'Maven', logo: 'https://maven.apache.org/images/maven-logo-black-on-white.svg', description: 'A build automation and project management tool.' },
  { name: 'Gradle', logo: gradleLogo, description: 'A modern build automation tool.' },
  { name: 'React.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', description: 'A JavaScript library for building user interfaces.' },
  { name: 'HTML', logo: htmlLogo, description: 'The standard markup language for web pages.' },
  { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg', description: 'A stylesheet language for describing the presentation of a document.' },
  { name: 'Bootstrap', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg', description: 'A popular CSS framework for responsive web design.' },
  { name: 'MySQL', logo: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg', description: 'A widely used relational database management system.' },
  { name: 'MongoDB', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg', description: 'A popular NoSQL document-oriented database.' },
  { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', description: 'A suite of cloud computing services from Amazon.' },
  { name: 'Git', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg', description: 'A distributed version control system.' },
  { name: 'Docker', logo: dockerLogo, description: 'A platform for developing, shipping, and running applications in containers.' },
  { name: 'CI/CD', logo: jenkinsLogo, description: 'Continuous Integration and Continuous Delivery.' },
  { name: 'OOP', logo: oopLogo, description: 'Object-Oriented Programming.' },
  { name: 'DSA', logo: dsaLogo, description: 'Data Structures and Algorithms.' },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
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

const SkillsSection = () => {
  return (
    <SkillsSectionContainer
      id="skills"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <SkillsTitle variants={itemVariants}>
        Skills
      </SkillsTitle>

      <SkillsGrid variants={itemVariants}>
        {skills.map((skill) => (
          <SkillCard key={skill.name}>
            <SkillLogo
              src={skill.logo}
              alt={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <SkillName>{skill.name}</SkillName>
            <SkillDescription>{skill.description}</SkillDescription>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSectionContainer>
  );
};

export default SkillsSection;
