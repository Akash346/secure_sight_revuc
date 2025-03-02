import { Link } from 'react-router-dom';

const NavMenu = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ul className="navigation-menu">
      <li><Link to="/">Home</Link></li>
      <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
      <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a></li>
      <li><Link to="/chatbot">AWS-BEDROCK</Link></li>
      <li><a href="#architecture" onClick={(e) => { e.preventDefault(); scrollToSection('architecture'); }}>Architecture</a></li>
    </ul>
  );
};

export default NavMenu;
