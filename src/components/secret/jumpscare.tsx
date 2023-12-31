import React, { Component } from 'react'
import Booom from "../../assets/vine-boom.mp3"

type Props = {}

type State = {
    isModalVisible: boolean;
    buttonPosition: { top: number; left: number };
}

export default class jumpscare extends Component<Props, State> {

  state = {
    isModalVisible: false,
    buttonPosition: { top: 0, left: 0 },
  }

  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  hideModal = () => {
    this.setState({ isModalVisible: false });
  };

  componentDidMount() {
    this.calculateRandomPosition();
    window.addEventListener('beforeunload', this.calculateRandomPositionBeforeUnload);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.calculateRandomPositionBeforeUnload);
  }

  calculateRandomPosition = () => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const randomTop = Math.floor(Math.random() * windowHeight);
    const randomLeft = Math.floor(Math.random() * windowWidth);

    this.setState({ buttonPosition: { top: randomTop, left: randomLeft } });
  };

  calculateRandomPositionBeforeUnload = () => {
    this.calculateRandomPosition();
  };

  playAudio = () => {
    const audioElement = document.getElementById('jumpscareAudio') as HTMLMediaElement | null;
    if (audioElement) {
      if (audioElement.paused) {
        audioElement.play().catch(error => {
          console.error('Failed to play audio:', error);
        });
      }
    }
  };

  render() {
    const { isModalVisible, buttonPosition  } = this.state;
    return (
        <>
        {isModalVisible && (
        <div id="extralarge-modal" tabIndex={-1} aria-hidden="true" className="fixed inset-0 flex items-center justify-center z-50">
            <img className="w-full" src='https://wallpapers.com/images/hd/creepy-pictures-w2idb9p3qrto8trj.jpg' alt='die'></img>
            <a href="/ǝᴉpllᴉʍnoʎ" className="fixed text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Go Back</a>
            <audio id="jumpscareAudio"  autoPlay controls hidden>
              <source src={Booom} type="audio/mp3" />
            </audio>
        </div>
        )}
        <button
          type="button"
          onMouseEnter={() => {
            this.showModal();
            this.playAudio();
          }}
          style={{
            position: 'fixed',
            top: `${buttonPosition.top}px`,
            left: `${buttonPosition.left}px`,
            transition: 'transform 300ms ease-in-out',
            zIndex: 999, // Adjust the zIndex to make sure it's on top of other elements
          }}
        >
          <img className="w-3" src="https://i.pinimg.com/originals/22/f8/82/22f8829905251c8d1e88d81aed03c292.gif" alt="die" />
        </button>
        </>
    )
  }
}