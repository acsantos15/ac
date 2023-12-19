import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './fontawesomelib.js';
import Landing from './pages/landing.tsx';
import SecretLanding from './pages/secret_landing.tsx';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/die" element={<SecretLanding />} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}

export default App;

