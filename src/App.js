import './App.css'
import { Banner } from './components/banner'
import { Board } from './components/board'
import { Event } from './components/event'
import { FinalList } from './components/finalList'
import { Footer } from './components/footer'
import { Intro } from './components/intro'
import { Notice } from './components/notice'
import { Prize } from './components/prize'
import { Schedule } from './components/schedule'

function App() {
  return (
    <div className="App">
      <Banner id="banner" />
      <Board id="board" />
      <Schedule id="schedule" />
      <FinalList id="finalList" />
      <Intro id="intro" />
      <Event id="event" />
      <Prize id="prize" />
      <Notice id="notice" />
      <Footer id="footer" />
    </div>
  )
}

export default App
