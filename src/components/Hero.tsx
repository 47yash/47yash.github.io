import { Variants } from 'framer-motion';
import { HeroSection, HeroTitle, HeroParagraph } from '../styles/HeroStyles'; // Import styled components

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
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

const Hero = () => {
  return (
    <HeroSection
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <HeroTitle variants={itemVariants}>
        YASH GANGANE
      </HeroTitle>
      <HeroParagraph variants={itemVariants}>
        Software Developer with experience in Java-based backend development and production support. Strong expertise in Java, Spring Boot, SQL, Unix/Linux environments, and cloud platforms like AWS.
      </HeroParagraph>
    </HeroSection>
  );
};

export default Hero;
