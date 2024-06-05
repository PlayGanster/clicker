import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import "../../styles/loader.scss"
import Error from '../../components/Error'
import LoaderGIF from "../../assets/loader.webp"
import { setInitData } from '../../redux/features/userSlice'
import { addError } from '../../redux/features/settingsSlice'

const tg = window.Telegram.WebApp

const Loader = (props: {children:JSX.Element[] | JSX.Element | string}) => {
	const user = useAppSelector(state=>state.user)
	const settings = useAppSelector(state=>state.settings)
	const [load, setLoad] = useState(false)
	const [bar, setBar] = useState(0)
	const dispatch = useAppDispatch()

	useEffect(() => {
		tg.ready()
    tg.expand()
		if(tg.initDataUnsafe.user !== undefined && tg.initDataUnsafe.user !== null){
      dispatch(setInitData({data: tg.initDataUnsafe.user}))
		}else {
      // dispatch(setInitData({data: {first_name: "leader", last_name: ""}}))
			dispatch(addError({data: {error_code: 201, description: (<>Данное приложение подходит только для телеграмм.<br/> Приложение <a href="/">DZB COIN</a></>)}}))
		} 
	}, [])

	useEffect(() => {
		if(user.initData !== null) setTimeout(() => {setBar(1000); setTimeout(() => {setLoad(true)}, 800)}, 2000)
		else setTimeout(() => {setBar(20)}, 200)
	}, [user.initData])

	if(load !== true){
		if(settings.error.length !== 0) return <Error />
		return (<div className="loader-page"><img src={LoaderGIF} /><div className="progress"><div className="progress-bar" style={{width:`${bar}%`}}></div></div></div>)
	}
	return props.children
}

export default Loader
