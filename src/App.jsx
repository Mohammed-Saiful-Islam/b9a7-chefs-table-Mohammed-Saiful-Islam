import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
    <div className='hidden'>
      <Navbar></Navbar>
    </div>
    <div>
      <Banner></Banner>
    </div>
    </>
  )
}

export default App
