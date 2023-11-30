import React, { Component } from 'react'

type Props = {id}

type State = {}

export default class section1 extends Component<Props, State> {
  state = {}

  render() {
    return (
    <div>
        <div className="mt-16 section-content h-screen" id="section1">
          <h1>Section1</h1>
        </div>
    </div>
    )
  }
}
