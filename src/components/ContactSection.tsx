import { Variants } from 'framer-motion';
import { 
  ContactSectionContainer, 
  ContactTitle, 
  ContactText, 
  ContactInfoWrapper, 
  ContactInfoItem, 
  ContactIcon 
} from '../styles/ContactStyles';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
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

const ContactSection = () => {
  return (
    <ContactSectionContainer
      id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <ContactTitle variants={itemVariants}>
        Get In Touch
      </ContactTitle>
      <ContactText variants={itemVariants}>
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.
      </ContactText>
      <ContactInfoWrapper variants={itemVariants}>
        <ContactInfoItem href="https://www.linkedin.com/in/yash-gangane-656004194/" target="_blank" rel="noopener noreferrer">
          <ContactIcon viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.044-1.852-3.044-1.853 0-2.136 1.445-2.136 2.939v5.674H9.573V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.923-2.063-2.065 0-1.145.92-2.066 2.063-2.066 1.145 0 2.064.922 2.064 2.066 0 1.142-.92 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.227 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.456c.98 0 1.772-.773 1.772-1.729V1.729C24 .774 23.207 0 22.227 0z" />
          </ContactIcon>
          <span>LinkedIn</span>
        </ContactInfoItem>
        <ContactInfoItem href="https://mail.google.com/mail/?view=cm&fs=1&to=yashgangane987@gmail.com" target="_blank" rel="noopener noreferrer">
          <ContactIcon fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </ContactIcon>
          <span>Email</span>
        </ContactInfoItem>
        <ContactInfoItem href="tel:9021963099">
          <ContactIcon viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 22.001h-16c-1.105 0-2-.896-2-2v-16c0-1.105.895-2 2-2h16c1.105 0 2 .895 2 2v16c0 1.104-.895 2-2 2zm-11-19.001h-2v-1h2v1zm4 0h-2v-1h2v1zm4 0h-2v-1h2v1zm-11 16h10v-1h-10v1zm12-1h-14v-14h14v14z"/>
          </ContactIcon>
          <span>Call</span>
        </ContactInfoItem>
      </ContactInfoWrapper>
    </ContactSectionContainer>
  );
};

export default ContactSection;
