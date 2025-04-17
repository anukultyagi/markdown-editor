import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import GuidePage from "./components/GuidePage"
import HomePage from "./components/HomePage"
import Layout from "./components/Layout"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="/guide" element={<GuidePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
