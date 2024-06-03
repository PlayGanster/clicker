import { useEffect } from 'react'
import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'

declare global {
  interface Window {
      Telegram: any;
  }
}
const tg = window.Telegram.WebApp

function App() {
  useEffect(() => {
    tg.ready()
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
