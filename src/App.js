import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Details from './screens/Details'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  )
}

export default App
