import { useEffect } from 'react'
import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import { useAppDispatch } from './redux/store'
import { setInitData } from './redux/features/userSlice'

declare global {
  interface Window {
      Telegram: any;
  }
}
const tg = window.Telegram.WebApp

function App() {
	const dispatch = useAppDispatch()
  useEffect(() => {
    tg.ready()
    tg.expand()
    dispatch(setInitData({data: tg.initDataUnsafe}))
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
