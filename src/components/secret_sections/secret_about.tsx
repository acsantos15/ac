import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../fontawesomelib';

type Props = {id}

type State = {};

export default class about extends Component<Props, State> {
  state: State = {};

  render() {
    return (
    <div>
        <div className="section-content" id="about"> 
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-crimson"></div>
            <span className="flex-shrink mx-4 text-midnight">About</span>
            <div className="flex-grow border-t border-crimson"></div>
          </div>
          <div className="grid grid-cols-3 gap-2 m-2 justify-center">
            <div className="col-span-3 ...">
              <div className="flex flex-col md:flex-row m-5 md:m-8 lg:m-16 xl:m-20 space-y-8 md:space-x-20 md:space-y-0">
                <div className="md:w-1/4 bg-midnight flex justify-center items-center h-60 md:h-60 xl:h-60">
                  <img src="https://i.pinimg.com/originals/b2/32/55/b2325557a903fdf56b50da4656da9221.gif" className='w-full' alt='coding gif'></img>
                </div>
                <div className="md:w-1/2">
                  <h1 className='font-bold text-3xl'>A little bit about me</h1>
                  <p className="text-gray-600 mt-10">
                    Im Aries Carlo L. Santos my nickname is ac I specialize in crafting dynamic and user-friendly websites. 
                    With a keen eye for design and a proficiency in various programming languages, I am dedicated to creating seamless and innovative online experiences. 
                    My goal is to stay abreast of the latest industry trends and technologies to deliver cutting-edge web solutions.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row m-5">
              <div className="m-3">
                <div className='flex justify-center border-dashed border-2 border-black-600'>
                  <div className="flex flex-col ...">
                  <div className='flex justify-center m-8'>
                    <FontAwesomeIcon icon="briefcase" style={{ color: "#211d21" }} size="5x"/>
                  </div>
                  <div className='flex justify-center text-2xl font-bold'>
                    Career
                  </div>
                  <div className='flex justify-center mx-10 mb-10'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  </div>
                  </div>
                </div>
              </div>
              <div className="m-3">
                <div className='flex justify-center border-dashed border-2 border-black-600'>
                  <div className="flex flex-col ...">
                  <div className='flex justify-center m-8'>
                    <FontAwesomeIcon icon="graduation-cap" style={{ color: "#211d21" }} size="5x"/>
                  </div>
                  <div className='flex justify-center text-2xl font-bold'>
                    Education
                  </div>
                  <div className='flex justify-center mx-10 mb-10'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  </div>
                  </div>
                </div>
              </div>
              <div className="m-3">
                <div className='flex justify-center border-dashed border-2 border-black-600'>
                  <div className="flex flex-col ...">
                  <div className='flex justify-center m-8'>
                    <FontAwesomeIcon icon="gamepad" style={{ color: "#211d21" }} size="5x"/>
                  </div>
                  <div className='flex justify-center text-2xl font-bold'>
                    Hobby
                  </div>
                  <div className='flex justify-center mx-10 mb-10'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    )
  }
}