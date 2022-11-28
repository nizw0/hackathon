import './App.css'
import { Banner } from './components/banner'
import { Board } from './components/board'
import { Event } from './components/event'
import { Footer } from './components/footer'
import { Intro } from './components/intro'
import { Navbar } from './components/navbar'
import { Notice } from './components/notice'
import { Prize } from './components/prize'
import { Schedule } from './components/schedule'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Board />
      <Intro />
      <Event />
      <Prize />
      <Notice />
      <Schedule />
      <Footer />
    </div>
  )
}

export default App
