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
          <div className="grid grid-cols-3 gap-2 m-2">
            <div className="col-span-3 ...">
              <div className="flex flex-col md:flex-row m-5 md:m-8 lg:m-16 xl:m-20 space-y-8 md:space-x-20 md:space-y-0">
                <div className="md:w-1/4 bg-midnight flex justify-center items-center h-60 md:h-60 xl:h-60">
                  <h1 className='font-bold text-3xl text-white'>Image Placeholder</h1>
                </div>
                <div className="md:w-1/2">
                  <h1 className='font-bold text-3xl'>Lorem ipsum dolor</h1>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </div>
            <div className='flex justify-center border-dashed border-2 border-black-600'>
              <div className="flex flex-col ...">
                <div className='flex justify-center bg-midnight mx-52 my-5 h-20  text-white'>icon</div>
                <div className='flex justify-center mx-20 my-10'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
              </div>
            </div>
            <div className='flex justify-center border-dashed border-2 border-black-600'>
              <div className="flex flex-col ...">
                <div className='flex justify-center bg-midnight mx-52 my-5 h-20  text-white'>icon</div>
                <div className='flex justify-center mx-20 my-10'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
              </div>
            </div>
            <div className='flex justify-center border-dashed border-2 border-black-600'>
              <div className="flex flex-col ...">
                <div className='flex justify-center bg-midnight mx-52 my-5 h-20  text-white'>icon</div>
                <div className='flex justify-center mx-20 my-10'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
  }
}