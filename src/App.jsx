import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./components/pages/Home"
import Navbar from "./components/Navbar"
import ResultPage from "./components/pages/ResultPage"




function App() {
  

  return (
    <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="resultPage" element={<ResultPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
