import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"


function App() {

  return (
    <main className="min-h-screen dark:bg-zinc-900 bg-[#ededed] dark:text-zinc-300 text-zinc-800">
      <Navbar />
      <Header />
      <Footer />
    </main>
  )
}

export default App
