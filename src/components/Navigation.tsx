import { StyledHeader, Logo, NavList, NavItem, NavLink } from '../styles/NavigationStyles';
import royalLogo from '../assets/royal-logo.png';

const navItems = ['About', 'Projects', 'Contact'];

const Navigation = () => {
  return (
    <StyledHeader 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <Logo 
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] as const, delay: 1.8 }}
      >
        <img src={royalLogo} alt="Yash Gangane Logo" style={{ height: '45px', objectFit: 'contain', filter: 'drop-shadow(0 2px 5px rgba(212, 175, 55, 0.3))' }} />
      </Logo>
      <nav>
        <NavList>
          {navItems.map((item, index) => (
            <NavItem
              key={item}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] as const, delay: 2 + index * 0.1 }}
            >
              <NavLink href={`#${item.toLowerCase()}`}>
                {item}
              </NavLink>
            </NavItem>
          ))}
        </NavList>
      </nav>
    </StyledHeader>
  );
};

export default Navigation;
