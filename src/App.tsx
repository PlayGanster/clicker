import { useEffect } from 'react'
import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import { store } from './redux/store'

declare global {
  interface Window {
      Telegram: any;
  }
}
const tg = window.Telegram.WebApp

function App() {
  useEffect(() => {
    tg.ready()
    tg.expand()
  }, [])
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App
