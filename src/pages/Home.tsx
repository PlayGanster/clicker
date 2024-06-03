import { GiLaurels } from 'react-icons/gi'
import { RiCopperCoinFill } from 'react-icons/ri'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { setCoin, setEnergy } from '../redux/features/userSlice'

const Home = () => {
	const user = useAppSelector(state=>state.user)
	const dispatch = useAppDispatch()

	const handleTouchStart = () => {
		if((user.energy - 5) >= 0){
			dispatch(setEnergy({data: (user.energy - 5)}))
			dispatch(setCoin({data: user.coin + 5}))
		}
	}

	return (
		<div className="w-full h-full flex flex-col justify-center items-center gap-[20px]">
			<h2 className="flex gap-[10px] text-[46px] font-bold text-[white] items-center"><RiCopperCoinFill color="yellow" size={46} />{user.coin}</h2>
			<div className="flex gap-[10px] items-center">
				<p className="flex items-center gap-[5px] font-semibold text-[18px] text-[white]"><GiLaurels size={22} color="white" />12,256<GiLaurels size={22} color="white" /></p>
			</div>
			<div className="w-[250px] h-[250px] rounded-[100%] active:scale-[1.02] border-2 mt-[50px]" onTouchStart={handleTouchStart}>
				<img src="https://sun6-23.userapi.com/s/v1/ig2/2sGschNkDhDhVkKQt5Llo-Madl1doK-hG9MqbrMG8MSpNgt-FkePIAvL3JJoxCY7zde1xkpo6ifSd9gQaBp6rmjf.jpg?size=2149x2149&quality=95&crop=0,0,2149,2149&ava=1" className="w-full h-full rounded-[100%]"/>
			</div>
		</div>
	)
}

export default Home
