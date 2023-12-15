import './App.css';
import Landing from './pages/landing.tsx';
import './fontawesomelib.js';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { inject } from '@vercel/analytics';

inject();

function App() {
  return (
    <div className="App">
      <SpeedInsights />
      <Landing />
    </div>
  );
}
export default App;
