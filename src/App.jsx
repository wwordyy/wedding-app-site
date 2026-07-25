import Hero from './pages/Hero'
import Welcome from './pages/Welcome'
import Venue from './pages/Venue'
import Countdown from './pages/CountDown'
import Wishes from './pages/Wishes'
import PersonContacts from './pages/PersonContacts'
import TelegramGroup from './pages/TelegramGroup'
import Farewell from './pages/Farewall'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/loader'
import CustomCursor from './components/Cursor'

function App() {

  const [loading, setLoading] = useState(true);

  return (
    <>
        <CustomCursor/>
        <AnimatePresence>
          {loading && <Loader onComplete={() => setLoading(false)}/>}

        </AnimatePresence>

        <div className='flex flex-col'>
          <Hero/>
          <Welcome/>
          <Venue/>
          <Countdown/>
          <Wishes/>
          <PersonContacts/>
          <TelegramGroup/>
          <Farewell/>
        </div>
    </>
  )
}

export default App
