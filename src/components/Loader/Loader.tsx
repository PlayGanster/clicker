import { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/store'
import "../../styles/Loader.css"
import Error from '../Error/Error'

const Loader = (props: {children:JSX.Element[] | JSX.Element | string}) => {
	const user = useAppSelector(state=>state.user)
	const settings = useAppSelector(state=>state.settings)
	const [load, setLoad] = useState(false)
	useEffect(()=>{
		if(user.initData !== null){
			setTimeout(() => {
				setLoad(true)
			}, 2000)
		}
	}, [user.initData])

		if(load === true){
			return (
				<>
					{props.children}
				</>
			)
		}else {
			if(settings.error.length !== 0){
				return (
					<Error />
				)
			}
			return (
				<div className="wrapper-loader">
					<div className="pl">
						<div className="pl__dot"></div>
						<div className="pl__dot"></div>
						<div className="pl__dot"></div>
						<div className="pl__dot"></div>
						<div className="pl__dot"></div>
						<div className="pl__dot"></div>
						<div className="pl__dot"></div>
						<div className="pl__dot"></div>
						<div className="pl__dot"></div>
						<div className="pl__dot"></div>
						<div className="pl__dot"></div>
						<div className="pl__dot"></div>
						<div className="pl__text">Loading…</div>
					</div>
				</div>
			)
		}
}

export default Loader
