import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import Guide from './components/Guide/Guide'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='guide' element={<Guide />} />
        </Route>
      </Routes>
    </>
  )
}

export default App