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
        <div className="flex flex-wrap items-center mx-auto p-3 justify-center">
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
            <div className='space-x-2 items-center'>
            <FontAwesomeIcon className='items-start' icon="sun" style={{ color: "#211d21" }} /> 
            <label className="relative inline-flex items-center mb-5 cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer"></input>
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            <FontAwesomeIcon className='' icon="moon" style={{ color: "#211d21" }} />  
            </div>
            </div>
          )}
        </div>
      </nav>
    );
  }
}