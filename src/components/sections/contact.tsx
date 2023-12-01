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
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">Contact</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
        </div>
    </div>
    )
  }
}