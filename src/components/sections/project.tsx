import React, { Component } from 'react'

type Props = {id}

type State = {}

export default class project extends Component<Props, State> {
  state = {}

  render() {
    return (
    <div>
        <div className="section-content" id="project"> 
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-crimson"></div>
            <span className="flex-shrink mx-4 text-midnight">Project</span>
            <div className="flex-grow border-t border-crimson"></div>
          </div>
          <div className="flex flex-col md:flex-row m-5 gap-3 justify-center">
            <div className='flex justify-center'>
              <div className="flex flex-col ...">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://github.com/acsantos15/timetable" target="_blank" rel="noopener noreferrer">
                        <img className="rounded-t-lg" src="https://educloud.app/lms/src/timetable/create%20tt.png" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="https://github.com/acsantos15/timetable" target="_blank" rel="noopener noreferrer">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Project 1</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="https://github.com/acsantos15/timetable" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 10">
                            </svg>
                        </a>
                    </div>
                </div>
              </div>
            </div>    
            <div className='flex justify-center'>
              <div className="flex flex-col ...">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://github.com/acsantos15/timetable" target="_blank" rel="noopener noreferrer">
                        <img className="rounded-t-lg" src="https://educloud.app/lms/src/timetable/create%20tt.png" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="https://github.com/acsantos15/timetable" target="_blank" rel="noopener noreferrer">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Project 2</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="https://github.com/acsantos15/timetable" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 10">
                            </svg>
                        </a>
                    </div>
                </div>
              </div>
            </div> 
            <div className='flex justify-center'>
              <div className="flex flex-col ...">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://github.com/acsantos15/timetable" target="_blank" rel="noopener noreferrer">
                        <img className="rounded-t-lg" src="https://educloud.app/lms/src/timetable/create%20tt.png" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="https://github.com/acsantos15/timetable" target="_blank" rel="noopener noreferrer">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Project 3</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="https://github.com/acsantos15/timetable" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 10">
                            </svg>
                        </a>
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