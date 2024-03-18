import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Recipes from './components/Recipes/Recipes'

function App() {
  
  return (
    <>
      <div className=''>
        <Navbar></Navbar>
      </div>
      <div className=''>
        <Banner></Banner>
      </div>
      <div>
        <Recipes></Recipes>
      </div>
    </>
  )
}

export default App
