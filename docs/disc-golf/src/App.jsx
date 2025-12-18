import { HashRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Team from './pages/Team'
import SystemDesign from './pages/SystemDesign'
import Process from './pages/Process'
import Sprint1 from './pages/Sprint1'
import Sprint2 from './pages/Sprint2'
import Sprint3 from './pages/Sprint3'
import Budget from './pages/Budget'
import Documentation from './pages/Code'

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F9F8F4] text-stone-800">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/design" element={<SystemDesign />} />
            <Route path="/process" element={<Process />} />
            <Route path="/process/sprint1" element={<Sprint1 />} />
            <Route path="/process/sprint2" element={<Sprint2 />} />
            <Route path="/process/sprint3" element={<Sprint3 />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/code" element={<Documentation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App

