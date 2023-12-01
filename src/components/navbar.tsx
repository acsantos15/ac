import React, { Component } from 'react'
import { Link } from 'react-scroll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../fontawesomelib.js';

type Props = {}

type State = {
  isMenuOpen: boolean;
};

export default class navbar extends Component<Props, State> {
  state: State = {
    isMenuOpen: false,
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render() {
    const { isMenuOpen } = this.state;
    
    return (  
    <nav className="bg-white fixed w-full z-10 top-0" id="navbar">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <h1 className="text-2xl font-bold text-black-50">XICONX AC</h1>
          <button
            onClick={this.toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon="bars" style={{ color: '#211d21' }} size="2xl" />
          </button>
          <div className={`flex space-x-10 ${isMenuOpen ? 'flex-col' : 'hidden md:flex'}`}>
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
                </Link></span>
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
                </Link></span>
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
                </Link></span>
            </div>
          </div>
        </div>
    </nav>
    )
  }
}