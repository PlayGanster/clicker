import { useEffect } from 'react'
import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import { useAppDispatch } from './redux/store'
import { setInitData } from './redux/features/userSlice'
import Loader from './components/Loader/Loader'
import { addError } from './redux/features/settingsSlice'
import Skins from './pages/Skins'
import Ref from './pages/Ref'
import Earn from './pages/Earn'

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
      // dispatch(setInitData({data: {first_name: "leader", last_name: ""}}))
      dispatch(addError({data: {description: "Не удалось получить данные от телеграма, попробуйте перезапустить приложение."}}))
    }
  }, [])
  return (
      <Loader>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="skins" element={<Skins />} />
              <Route path="ref" element={<Ref />} />
              <Route path="earn" element={<Earn />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Loader>
  );
}

export default App
