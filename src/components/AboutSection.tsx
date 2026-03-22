import { Variants } from 'framer-motion';
import { AboutSectionContainer, AboutTitle, Divider, PhilosophyContent } from '../styles/AboutStyles';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.8,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const dividerVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: {
            duration: 1,
            ease: [0.4, 0, 0.2, 1],
            delay: 0.5,
        }
    }
}

const AboutSection = () => {
  return (
    <AboutSectionContainer
      id="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <AboutTitle variants={itemVariants}>
        About Me
      </AboutTitle>

      <Divider 
        variants={dividerVariants} 
      />

      <PhilosophyContent variants={itemVariants}>
        <p>
          From the foundations of robust back-end systems to the elegant spires of performant user interfaces, I architect digital realms. My dominion extends across the vast landscapes of Java, Spring Boot, and AWS, where I command the forces of code to build resilient and scalable enterprise systems. With a steady hand, I ensure the stability of business-critical applications and lead the charge in migrating legacy systems to modern cloud fortresses.
        </p>
      </PhilosophyContent>
    </AboutSectionContainer>
  );
};

export default AboutSection;
