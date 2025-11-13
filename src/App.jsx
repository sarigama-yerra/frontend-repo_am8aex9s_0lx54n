import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Coreosofia from './pages/Coreosofia'
import DanzaCurativa from './pages/DanzaCurativa'
import Online from './pages/Online'
import InPresenza from './pages/InPresenza'
import Ritiri from './pages/Ritiri'
import Testimonianze from './pages/Testimonianze'
import Contatti from './pages/Contatti'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,rgba(255,240,245,0.6),rgba(224,242,254,0.4))] text-rose-900">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coreosofia" element={<Coreosofia />} />
          <Route path="/danzacurativa" element={<DanzaCurativa />} />
          <Route path="/online" element={<Online />} />
          <Route path="/in-presenza" element={<InPresenza />} />
          <Route path="/ritiri" element={<Ritiri />} />
          <Route path="/testimonianze" element={<Testimonianze />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
