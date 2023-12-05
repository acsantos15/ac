import React, { Component } from 'react'

type Props = {id}

type State = {}

export default class service extends Component<Props, State> {
  state = {}

  render() {
    return (
    <div>
        <div className="section-content h-screen" id="service"> 
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">Service</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className="grid grid-cols-2 gap-20 m-20">
            <div className='flex justify-center border-dashed border-2 border-black-600'>
              <div className="flex flex-col ...">
                <div className='flex justify-center bg-midnight mx-52 my-5 h-20  text-white'>icon</div>
                <div className='flex justify-center mx-20 my-10'>Web Development</div>
              </div>
            </div>
            <div className='flex justify-center border-dashed border-2 border-black-600'>
              <div className="flex flex-col ...">
                <div className='flex justify-center bg-midnight mx-52 my-5 h-20  text-white'>icon</div>
                <div className='flex justify-center mx-20 my-10'>Mobile App Development</div>
              </div>
            </div>
            <div className='flex justify-center border-dashed border-2 border-black-600'>
              <div className="flex flex-col ...">
                <div className='flex justify-center bg-midnight mx-52 my-5 h-20  text-white'>icon</div>
                <div className='flex justify-center mx-20 my-10'>Game Development</div>
              </div>
            </div>
            <div className='flex justify-center border-dashed border-2 border-black-600'>
              <div className="flex flex-col ...">
                <div className='flex justify-center bg-midnight mx-52 my-5 h-20  text-white'>icon</div>
                <div className='flex justify-center mx-20 my-10'>Tech Support</div>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
  }
}