import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontawesomelib.js';
import logo from '../assets/logo.png';
import "./components.css"

type Props = {};

type State = {
  isMobile: boolean;
};

export default class Navbar extends Component<Props, State> {
  state: State = {
    isMobile: window.innerWidth <= 768, 
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
      <nav className="bg-white fixed w-screen z-10 top-0" id="navbar">
        <div className="flex flex-wrap items-center mx-auto p-5 justify-center">
          {isMobile ? (
             <div className="flex space-x-8 items-center">
              <img className="w-8" alt="logo" src={logo}></img>
              <span className="text-midnight hover:font-bold">
                <Link
                to="home"
                smooth={true}
                duration={300}
                offset={-65}
                activeClass="active"
                onSetActive={() => alert("Home section is active")}
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
              <span className="text-midnight font-bold">
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
              <span className="text-midnight font-bold">
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
            <div className="flex space-x-10 items-center">
            <Link
              to="home"
              smooth={true}
              duration={300}
              offset={-65}
              >
              <img className="w-7 justify-start" alt="logo"  src={logo}></img>
            </Link>
            <Link
              className="text-midnight font-bold"
              to="home"
              smooth={true}
              duration={300}
              offset={-65}
              spy={true}
              activeClass="active"
              >
              <span>
                <FontAwesomeIcon className='mr-1' icon="house" style={{ color: "#211d21" }}/>
              </span>
              HOME
            </Link>
            <Link
              className="text-midnight font-bold"
              to="about"
              smooth={true}
              duration={300}
              offset={-65}
              spy={true}
              activeClass="active"
              >
              <span>
                <FontAwesomeIcon className='mr-1' icon="address-card" style={{ color: "#211d21" }} />
              </span>
              ABOUT
            </Link>
            <Link
              className="text-midnight font-bold"
              to="service"
              smooth={true}
              duration={300}
              offset={-65}
              spy={true}
              activeClass="active"
              >
              <span>
                <FontAwesomeIcon className='mr-1' icon="gear" style={{ color: "#211d21" }} />
              </span>
              SERVICE
            </Link>
            <Link
              className="text-midnight font-bold"
              to="project"
              smooth={true}
              duration={300}
              offset={-65}
              spy={true}
              activeClass="active"
              >
              <span>
                <FontAwesomeIcon className='mr-1' icon="folder-tree" style={{ color: "#211d21" }} />
              </span>
              PROJECTS
            </Link>
            <Link
                className="text-midnight font-bold"
                to="contact"
                smooth={true}
                duration={300}
                offset={-65}
                spy={true}
                activeClass="active"
                >
                <span>
                  <FontAwesomeIcon className='mr-1' icon="phone" style={{ color: "#211d21" }} />
                </span>
                CONTACT
            </Link>
            </div>
          )}
        </div>
      </nav>
    );
  }
}