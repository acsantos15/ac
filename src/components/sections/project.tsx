import React, { Component } from 'react'

type Props = {id}

type State = {}

export default class project extends Component<Props, State> {
  state = {}

  render() {
    return (
    <div>
        <div className="section-content h-screen" id="project"> 
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">Project</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
        </div>
    </div>
    )
  }
}