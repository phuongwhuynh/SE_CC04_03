import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import { Printers } from "./components/printers"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="printers" element={<Printers />}></Route>
        </Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
