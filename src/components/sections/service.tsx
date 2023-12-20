import React, { Component } from 'react'
import { FontAwesomeIcon, Props } from '@fortawesome/react-fontawesome';
import '../../fontawesomelib';
import ServiceVid from "../../assets/services.mp4"

type State = {
  isVideoPlaying: boolean;
};

export default class Service extends Component<Props, State> {
  private videoRef: React.RefObject<HTMLVideoElement>;

  constructor(props: Props) {
    super(props);

    this.state = {
      isVideoPlaying: false,
    };

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this value based on when you want the video to start playing
    };

    const observer = new IntersectionObserver(this.handleIntersection, options);

    if (this.videoRef.current) {
      observer.observe(this.videoRef.current);
    }
  }

  handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.playVideo();
      } else {
        this.pauseVideo();
      }
    });
  };

  playVideo = () => {
    if (this.videoRef.current && !this.state.isVideoPlaying) {
      this.videoRef.current.play();
      this.setState({ isVideoPlaying: true });
    }
  };

  pauseVideo = () => {
    if (this.videoRef.current && this.state.isVideoPlaying) {
      this.videoRef.current.pause();
      this.setState({ isVideoPlaying: false });
    }
  };

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
            <video
              ref={this.videoRef}
              className="w-1/2"
              autoPlay={false} // Set to false to prevent autoplay
              controls
              loop
            >
              <source src={ServiceVid} type="video/mp4"></source>
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex flex-col md:flex-row m-5 gap-3 justify-center">
            <div className='flex justify-center border-dashed border-2 border-black-600 hover:bg-hovergray'>
              <div className="flex flex-col ...">
                  <div className='flex justify-center m-8'>
                    <FontAwesomeIcon icon="globe" style={{ color: "#211d21" }} size="5x"/>
                  </div>
                <div className='flex justify-center mx-20 my-10'>Web Development</div>
              </div>
            </div>
            <div className='flex justify-center border-dashed border-2 border-black-600 hover:bg-hovergray'>
              <div className="flex flex-col ...">
                  <div className='flex justify-center m-8'>
                    <FontAwesomeIcon icon="mobile-screen" style={{ color: "#211d21" }} size="5x"/>
                  </div>
                <div className='flex justify-center mx-20 my-10'>Mobile App Development</div>
              </div>
            </div>
            <div className='flex justify-center border-dashed border-2 border-black-600 hover:bg-hovergray'>
              <div className="flex flex-col ...">
                  <div className='flex justify-center m-8'>
                    <FontAwesomeIcon icon="gamepad" style={{ color: "#211d21" }} size="5x"/>
                  </div>
                <div className='flex justify-center mx-20 my-10'>Game Development</div>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
  }
}