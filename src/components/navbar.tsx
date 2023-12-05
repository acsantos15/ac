import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontawesomelib.js';

type Props = {};

type State = {
  isMobile: boolean;
};

export default class Navbar extends Component<Props, State> {
  state: State = {
    isMobile: window.innerWidth <= 768, // Set the initial state based on the screen width
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

  render() {
    const { isMobile } = this.state;

    return (
      <nav className="bg-white fixed w-full z-10 top-0" id="navbar">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <h1 className="text-2xl font-bold text-black-50">LOGO</h1>
          {isMobile ? (
             <div className="flex space-x-10">
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
            <div className="flex items-center space-x-2">
              <span>
                <FontAwesomeIcon icon="house" style={{ color: "#211d21" }}/>
              </span>
              <span className="text-midnight hover:font-bold">
                <Link
                activeClass="active"
                to="home"
                smooth={true}
                duration={300}
                offset={-65}
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