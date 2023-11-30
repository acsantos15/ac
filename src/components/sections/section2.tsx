import React, { Component } from 'react'

type Props = {id}

type State = {}

export default class section2 extends Component<Props, State> {
  state = {}

  render() {
    return (
    <div>
        <div className="section-content h-screen" id="section2"> 
          <h1>Section2</h1>
        </div>
    </div>
    )
  }
}