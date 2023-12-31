import React, { Component } from 'react'

import Navbar from '../components/navbar.tsx';
import Home from '../components/sections/home.tsx';
import About from '../components/sections/about.tsx';
import Service from '../components/sections/service.tsx';
import Project from '../components/sections/project.tsx';
import Contact from '../components/sections/contact.tsx';
import Jumpscare from '../components/secret/jumpscare.tsx';

type Props = {}

type State = {};

export default class landing extends Component<Props, State> {
  state: State = {};
  render() {
    return (
      <div>
      <Navbar />
      <Jumpscare />
      <Home id="home" />
      <About id="about" />
      <Service id="service" />
      <Project id="project" />
      <Contact id="contact" />
      </div>

    )
  }
}