import { GiLaurels } from 'react-icons/gi'
import { RiCopperCoinFill } from 'react-icons/ri'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { setCoin, setEnergy } from '../redux/features/userSlice'
import { useState } from 'react'

const Home = () => {
	const user = useAppSelector(state=>state.user)
	const dispatch = useAppDispatch()
	const [rotateX, setRotateX] = useState(0);
	const [rotateY, setRotateY] = useState(0);
  const [clickCoords, setClickCoords] = useState<any>(null);

	const handleTouchStart = (event:any) => {
		if((user.energy - 5) >= 0){
			dispatch(setEnergy({data: (user.energy - 5)}))
			dispatch(setCoin({data: user.coin + 5}))
			const block = event.currentTarget;
			const rect = block.getBoundingClientRect();
			const x = event.touches[0].clientX - rect.left;
			const y = event.touches[0].clientY - rect.top;
			console.log(event)
			setClickCoords({ x, y });
			setTimeout(() => {
				setClickCoords(null);
			}, 1000); // Remove coordinate display after 1 second
		}
		const block = event.currentTarget;
		const rect = block.getBoundingClientRect();
    const x = event.touches[0].clientX - rect.left;
    const y = event.touches[0].clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;
		const deltaX = x - centerX;
		const deltaY = y - centerY;
		const angleX = deltaX / centerX * 20; // наклон на 10 пикселей
		const angleY = deltaY / centerY * 20;// наклон на 10 пикселей
	
    setRotateX(angleX); // наклон на 10-15 пикселей
    setRotateY(angleY); // наклон на 10-15 пикселей
	}

  const handleTouchEnd = () => {
    setRotateX(0);
    setRotateY(0);
  };

	return (
		<div className="w-full h-full flex flex-col justify-center items-center gap-[20px]">
			<h2 className="flex gap-[10px] text-[46px] font-bold text-[white] items-center"><RiCopperCoinFill color="yellow" size={46} />{user.coin}</h2>
			<div className="flex gap-[10px] items-center">
				<p className="flex items-center gap-[5px] font-semibold text-[18px] text-[white]"><GiLaurels size={22} color="white" />12,256<GiLaurels size={22} color="white" /></p>
			</div>
			<div className={`w-[250px] h-[250px] rounded-[100%] border-2 mt-[50px] ${rotateX !== 0 || rotateY !== 0 ? 'transform' : ''} relative`} 
    style={{
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    }} onTouchStart={handleTouchStart}
		onTouchEnd={handleTouchEnd}>
				<img src="https://sun6-23.userapi.com/s/v1/ig2/2sGschNkDhDhVkKQt5Llo-Madl1doK-hG9MqbrMG8MSpNgt-FkePIAvL3JJoxCY7zde1xkpo6ifSd9gQaBp6rmjf.jpg?size=2149x2149&quality=95&crop=0,0,2149,2149&ava=1" className="w-full h-full rounded-[100%]"/>
				{clickCoords && (
					<div
						style={{
							position: 'absolute',
							top: clickCoords.y,
							left: clickCoords.x,
							fontSize: 24,
							color: 'black',
							zIndex: 1,
						}}
						className="font-bold"
					>
						5
					</div>
				)}
			</div>
		</div>
	)
}

export default Home
