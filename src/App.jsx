import './App.css'
import Navbar from './Components/Navbar'
import MainPart from './Components/MainPart'
import About from './Components/About'
import WhatiDo from './Components/WhatiDo'
import Projects from './Components/Projects'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='backgroundColor'>
      <Navbar />
      <MainPart />
      <About />
      <WhatiDo />
      <Projects />
      <Footer/>
    </div>
  )
}

export default App
