import React, { Component } from 'react'

import Navbar from '../components/navbar.tsx';
import Section1 from '../components/sections/section1.tsx';
import Section2 from '../components/sections/section2.tsx';
import Section3 from '../components/sections/section3.tsx';

type Props = {}

type State = {}

export default class landing extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>
        <Navbar />
        <Section1
          id="section1"
        />
        <Section2
          id="section2"
        />
        <Section3
          id="section3"
        />
      </div>
    )
  }
}