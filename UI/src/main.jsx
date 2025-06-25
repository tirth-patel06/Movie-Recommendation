import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Result from './component/result.jsx'
import Particles from '../ReactBits/Particles/Particles.jsx';
import MainWrapper from './component/MainWrapper.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Particles */}
        <div className="absolute inset-0 z-0">
          <div style={{ width: '110%', height: '100%', overflow: 'hidden', position: 'relative' }}>
            <Particles
              particleColors={['#ffffff', '#ffffff']}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
        </div>

        {/* Foreground Page Content */}
        <MainWrapper />
      </div>
    </BrowserRouter>
  </StrictMode>
);