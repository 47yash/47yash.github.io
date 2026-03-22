import { StyledHeader, Logo, NavList, NavItem, NavLink } from '../styles/NavigationStyles';

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
        YG
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
