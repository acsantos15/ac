import './App.css';
import Landing from './pages/landing.tsx';
import './fontawesomelib.js';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <div className="App">
      <Analytics />
      <SpeedInsights />
      <Landing />
    </div>
  );
}
export default App;
