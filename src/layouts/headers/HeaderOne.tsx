import { useState } from "react";
import UseSticky from "../../hooks/UseSticky";
import Sidebar from "../../components/common/Sidebar";
import { Link } from "react-router-dom";
import './HeaderOne.css';

export default function HeaderOne() {
  const { sticky } = UseSticky();
  const [open, setOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`main-header ${sticky ? 'fixed-header' : ''}`}>
        <div className="header-upper">
          <div className="container">
            <div className="header-inner">
              <div className="logo-wrapper">
                <Link to="/">
                  <img 
                    src="/assets/images/Rev/logo.png" 
                    alt="Secure Sight Logo" 
                    className="header-logo" 
                  />
                  <span className="nav-bar-icon">Secure Sight</span>
                </Link>
              </div>
              <nav className="main-navigation">
                <ul className="navigation-menu">
                  <li><Link to="/">HOME</Link></li>
                  <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>ABOUT</a></li>
                  <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>FEATURES</a></li>
                  <li><Link to="/chatbot">AWS-BEDROCK</Link></li>
                  <li><a href="#architecture" onClick={(e) => { e.preventDefault(); scrollToSection('architecture'); }}>ARCHITECTURE</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
}
