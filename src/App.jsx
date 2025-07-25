import React from 'react'
import LotteryCard from './components/LotteryCard/LotteryCard'
import './App.css'

/**
 * Main App Component
 * Showcases lottery components for iOS and Android engineers
 */
function App() {
  return (
    <div className="app">
      <div className="app-header">
        <h1 className="app-title">Lottery Components</h1>
        <p className="app-subtitle">Reference implementation for iOS and Android</p>
      </div>

      <div className="components-showcase">
        <section className="showcase-section">
          <h2 className="section-title">Lottery Card States</h2>
          
          <div className="cards-grid">
            <LotteryCard 
              orderId="LT001" 
              status="won" 
              progress={100}
            />
            
            <LotteryCard 
              orderId="LT002" 
              status="lost" 
              progress={100}
            />
            
            <LotteryCard 
              orderId="LT003" 
              status="pending" 
              progress={66}
            />
            
            <LotteryCard 
              orderId="LT004" 
              status="checking" 
              progress={33}
            />
          </div>
        </section>

        <section className="showcase-section">
          <h2 className="section-title">Implementation Notes</h2>
          <div className="implementation-notes">
            <div className="note-card">
              <h3>iOS Implementation</h3>
              <ul>
                <li>Use UIStackView for layout</li>
                <li>Apply corner radius and shadow</li>
                <li>Use SF Symbols for icons</li>
                <li>Follow Human Interface Guidelines</li>
              </ul>
            </div>
            
            <div className="note-card">
              <h3>Android Implementation</h3>
              <ul>
                <li>Use MaterialCardView or Card in Compose</li>
                <li>Apply Material Design elevation</li>
                <li>Use Material Icons or vector drawables</li>
                <li>Follow Material Design Guidelines</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App 