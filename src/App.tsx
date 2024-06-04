import { useEffect } from 'react'
import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import { useAppDispatch } from './redux/store'
import { setInitData } from './redux/features/userSlice'
import Loader from './components/Loader/Loader'
import { addError } from './redux/features/settingsSlice'

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
    if(tg.initDataUnsafe.user !== null && tg.initDataUnsafe.user !== undefined){
      dispatch(setInitData({data: tg.initDataUnsafe.user}))
    }else {
      dispatch(addError({data: {description: "Не удалось получить данные от телеграма, попробуйте перезапустить приложение."}}))
    }
  }, [])
  return (
      <Loader>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Loader>
  );
}

export default App
