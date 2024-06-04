import "../styles/Home.css"
import { formatNumber } from '../data/formatNumber'
import { useAppSelector } from '../redux/store'
import CoinTop from "../assets/coin.png"
import { GiLaurelCrown } from 'react-icons/gi'
import { Coin } from '../components/Coin/Coin'

const Home = () => {
	const user = useAppSelector(state=>state.user)
	return (
		<div className="home">
			<div className="home__balance">
				<img src={CoinTop} className="balance__photo"/>{formatNumber(user.coin)}
			</div>
			<div className="home__place">
				<GiLaurelCrown size={28} color='#B9F2FF' />{formatNumber(12564)}<GiLaurelCrown size={28} color='#B9F2FF' />
			</div>
			<Coin 
        canIClickPlease={true}
        sleep={false}
        funMode={false}
        clickValue={1}
        cooldown={0}
        handleClick={() => {/*nothing*/}} />
		</div>
	)
}

export default Home
