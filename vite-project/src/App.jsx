import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Amor from "./components/Amor"
import Amor2 from './components/Amor2'
import Baloo from './components/Baloo'
import Grace from './components/Grace'
import MiFoto from './components/MiFoto'
import Negra from './components/Negra'
import YoyMizra from './components/YoyMizra'
import Navigation from './components/Navigation'



const App = () => {

  return (
<Router>
  <Navigation/>
  <Routes>
    <Route path="/Amor" element={<Amor />} />
    <Route path='/amor2' element={<Amor2 />} />
    <Route path='/baloo' element={<Baloo/>} />
    <Route path='/grace' element={<Grace/>} />
    <Route path='/mifoto' element={<MiFoto/>} />
    <Route path='/mizra' element={<MiFoto/>} />
    <Route path='/negra' element={<Negra/>} />
    <Route path='/yoymizra' element={<YoyMizra/>} />
  </Routes>
</Router>
  )
}

export default App
