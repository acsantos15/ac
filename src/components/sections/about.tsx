import React, { Component } from 'react'

type Props = {id}

type State = {}

export default class about extends Component<Props, State> {
  state = {}

  render() {
    return (
    <div>
        <div className="section-content h-screen" id="about"> 
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">About</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className="grid grid-cols-3 gap-1 m-1">
            <div className="col-span-3 ...">
              <div className="flex flex-col md:flex-row m-5 md:m-8 lg:m-16 xl:m-20 space-y-8 md:space-x-20 md:space-y-0">
                <div className="md:w-1/2 bg-midnight flex justify-center items-center h-60 md:h-60 xl:h-60">
                  <h1 className='font-bold text-3xl text-white'>Image Placeholder</h1>
                </div>
                <div className="md:w-1/2">
                  <h1 className='font-bold text-3xl'>Lorem ipsum dolor</h1>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </div>
            <div className='border-dashed border-2 border-indigo-600'>02</div>
            <div className='border-dashed border-2 border-indigo-600'>03</div>
            <div className='border-dashed border-2 border-indigo-600'>04</div>
          </div>
        </div>
    </div>
    )
  }
}