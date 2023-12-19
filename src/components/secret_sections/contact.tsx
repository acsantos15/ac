import React, { Component } from 'react'

type Props = {id}

type State = {}

export default class contact extends Component<Props, State> {
  state = {}

  render() {
    return (
    <div>
        <div className="section-content h-screen" id="contact"> 
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-crimson"></div>
            <span className="flex-shrink mx-4 text-midnight">Contact</span>
            <div className="flex-grow border-t border-crimson"></div>
          </div>
        </div>
    </div>
    )
  }
}