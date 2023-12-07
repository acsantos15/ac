import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontawesomelib.js';
import logo from '../assets/logo.png';

type Props = {};

type State = {
  isMobile: boolean;
  activeSection: string | null;
};

export default class Navbar extends Component<Props, State> {
  state: State = {
    isMobile: window.innerWidth <= 768, // Set the initial state based on the screen width
    activeSection: null,
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      isMobile: window.innerWidth <= 768,
    });
  };

  handleSetActive = (to: string) => {
    this.setState({
      activeSection: to,
    });
  };

  render() {
    const { isMobile, activeSection } = this.state;

    return (
      <nav className="bg-white fixed w-full z-10 top-0" id="navbar">
        <div className="max-w-screen-lg flex flex-wrap items-center mx-auto p-5 justify-center">
          {isMobile ? (
             <div className="flex space-x-8">
              <img className="w-8" alt="logo" src={logo}></img>
              <span className="text-midnight hover:font-bold">
                <Link
                activeClass="active"
                to="home"
                smooth={true}
                duration={300}
                offset={-65}
                >
                <FontAwesomeIcon icon="house" style={{ color: "#211d21" }}/>
                </Link>
              </span>
              <span className="text-midnight hover:font-bold">
                <Link
                activeClass="active"
                to="about"
                smooth={true}
                duration={300}
                offset={-65}
                >
                <FontAwesomeIcon icon="address-card" style={{ color: "#211d21" }} />
                </Link>
              </span>
              <span className="text-midnight hover:font-bold">
                <Link
                activeClass="active"
                to="service"
                smooth={true}
                duration={300}
                offset={-65}
                >
                <FontAwesomeIcon icon="gear" style={{ color: "#211d21" }} />
                </Link>
              </span>
              <span className="text-midnight hover:font-bold">
                <Link
                activeClass="active"
                to="project"
                smooth={true}
                duration={300}
                offset={-65}
                >
                <FontAwesomeIcon icon="folder-tree" style={{ color: "#211d21" }} />
                </Link>
              </span>
              <span className="text-midnight hover:font-bold">
                <Link
                activeClass="active"
                to="contact"
                smooth={true}
                duration={300}
                offset={-65}
                >
                <FontAwesomeIcon icon="phone" style={{ color: "#211d21" }} /> 
                </Link>
              </span>
            </div>
          ) : (
            <div className="flex space-x-10">
            <Link
                activeClass="active"
                to="home"
                smooth={true}
                duration={300}
                offset={-65}
                >
                <img className="w-7 justify-start" alt="logo"  src={logo}></img>
            </Link>
            <div className="flex items-center space-x-2">
              <span>
                <FontAwesomeIcon icon="house" style={{ color: "#211d21" }}/>
              </span>
              <span className={`text-midnight hover:font-bold ${activeSection === 'home' ? 'red-text' : ''}`}>
                <Link
                onSetActive={this.handleSetActive}
                to="home"
                smooth={true}
                duration={300}
                offset={-65}
                spy={true}
                >
                HOME
                </Link>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span>
                <FontAwesomeIcon icon="address-card" style={{ color: "#211d21" }} />
              </span>
              <span className="text-midnight hover:font-bold">
                <Link
                activeClass="active"
                to="about"
                smooth={true}
                duration={300}
                offset={-65}
                spy={true}
                >
                ABOUT
                </Link>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span>
                <FontAwesomeIcon icon="gear" style={{ color: "#211d21" }} />
              </span>
              <span className="text-midnight hover:font-bold">
                <Link
                activeClass="active"
                to="service"
                smooth={true}
                duration={300}
                offset={-65}
                spy={true}
                >
                SERVICE
                </Link>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span>
                <FontAwesomeIcon icon="folder-tree" style={{ color: "#211d21" }} />
              </span>
              <span className="text-midnight hover:font-bold">
                <Link
                activeClass="active"
                to="project"
                smooth={true}
                duration={300}
                offset={-65}
                spy={true}
                >
                PROJECTS
                </Link>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span>
                <FontAwesomeIcon icon="phone" style={{ color: "#211d21" }} /> 
              </span>
              <span className="text-midnight hover:font-bold">
                <Link
                activeClass="active"
                to="contact"
                smooth={true}
                duration={300}
                offset={-65}
                spy={true}
                >
                CONTACT
                </Link>
              </span>
            </div>
            </div>
          )}
        </div>
      </nav>
    );
  }
}