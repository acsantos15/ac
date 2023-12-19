import React, { Component } from 'react'

import Shome from '../components/secret_sections/secret_home.tsx';
import Sabout from '../components/secret_sections/secret_about.tsx';
import Sservice from '../components/secret_sections/secret_service.tsx';
import Snavbar from '../components/secret/secret_navbar.tsx';

type Props = {}

type State = {};

export default class landing extends Component<Props, State> {
  state: State = {};
  render() {
    return (
        <div className='bg-crimson'>
            <Snavbar />
            <Shome/>
            <Sabout id="about" />
            <Sservice id="service" />
        </div>
    )
  }
}