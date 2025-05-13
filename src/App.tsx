import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Navbar from './components/Navbar'
import ProjectDetail from './pages/ProjectDetail'
import Projects from './pages/Projects'
import Services from './pages/Services'

// import Portfoli from './pages/Partfoli'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path='/partfoli' element={<Portfoli/>} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </>
  );
}

export default App