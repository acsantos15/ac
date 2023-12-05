import React, { Component } from 'react'

type Props = {id}

type State = {}

export default class home extends Component<Props, State> {
  state = {}

  render() {
    return (
    <div>
      <div className="mt-16 section-content min-h-screen" id="home">
        <div className="relative flex items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400">Home</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="flex flex-col md:flex-row m-10 md:m-20 lg:m-32 xl:m-60 space-y-8 md:space-x-20 md:space-y-0">
          <div className="md:w-1/2 mt-32">
            <h1 className='font-bold text-7xl text-crimson'>Hi!</h1>
            <h1 className='font-bold text-7xl text-crimson'>I'm AC</h1>
            <h1 className='font-bold text-6xl text-midnight'>Web Developer</h1>
          </div>
          <div className="md:w-1/2 bg-midnight flex justify-center items-center h-60 md:h-96 xl:h-96">
            <h1 className='font-bold text-3xl text-white'>Image Placeholder</h1>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
