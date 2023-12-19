import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../fontawesomelib';

type Props = {id}

type State = {}

export default class service extends Component<Props, State> {
  state = {}

  render() {
    return (
    <div>
        <div className="section-content" id="service"> 
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-crimson"></div>
            <span className="flex-shrink mx-4 text-midnight">Service</span>
            <div className="flex-grow border-t border-crimson"></div>
          </div>
          <div className="flex flex-col md:flex-row m-5 gap-3 justify-center">
            <video className="w-1/2" autoPlay controls>
              <source src="https://v3.cdnpk.net/videvo_files/video/free/2016-12/large_watermarked/Hack_code_greenonblack_01_Videvo_preview.mp4" type="video/mp4"></source>
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex flex-col md:flex-row m-5 gap-3 justify-center">
            <div className='flex justify-center border-dashed border-2 border-black-600'>
              <div className="flex flex-col ...">
                  <div className='flex justify-center m-8'>
                    <FontAwesomeIcon icon="globe" style={{ color: "#211d21" }} size="5x"/>
                  </div>
                <div className='flex justify-center mx-20 my-10'>Web Development</div>
              </div>
            </div>
            <div className='flex justify-center border-dashed border-2 border-black-600'>
              <div className="flex flex-col ...">
                  <div className='flex justify-center m-8'>
                    <FontAwesomeIcon icon="mobile-screen" style={{ color: "#211d21" }} size="5x"/>
                  </div>
                <div className='flex justify-center mx-20 my-10'>Mobile App Development</div>
              </div>
            </div>
            <div className='flex justify-center border-dashed border-2 border-black-600'>
              <div className="flex flex-col ...">
                  <div className='flex justify-center m-8'>
                    <FontAwesomeIcon icon="gamepad" style={{ color: "#211d21" }} size="5x"/>
                  </div>
                <div className='flex justify-center mx-20 my-10'>Game Development</div>
              </div>
            </div>
            <div className='flex justify-center border-dashed border-2 border-black-600'>
              <div className="flex flex-col ...">
                  <div className='flex justify-center m-8'>
                    <FontAwesomeIcon icon="computer" style={{ color: "#211d21" }} size="5x"/>
                  </div>
                <div className='flex justify-center mx-20 my-10'>Tech Support</div>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
  }
}