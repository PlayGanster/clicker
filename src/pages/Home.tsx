import "../styles/home.scss"
import CoinImg from '../assets/coin.png'
import Rank from "../assets/rank.png"
import { formatNumber } from '../other/formatNumber'
import { GiTrophyCup } from 'react-icons/gi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Coin } from '../components/home/Coin'
import { useAppSelector } from '../redux/store'

const Home = () => {
	const user = useAppSelector(state=>state.user)
	return (
		<div className="home-page">
			<div className="page__leader">
				<div className="leader__info">
					<div className="info__coins">
						<img src={CoinImg} className="coins__icon" /><p className="coins__count">{formatNumber(user.coin)}</p>
					</div>
					<div className="info__rank">
							<div className="rank__place">
								<img src={Rank} className="place__venok -left"/>{formatNumber(12600)}th
								<img src={Rank} className="place__venok -right"/>
							</div>
							<span className="rank__point"></span>
							<div className="rank__user">
								<GiTrophyCup size={32} color="#B9F2FF" />
								<p className="user__name">Diamond</p>
								<MdKeyboardArrowRight size={24} color="white" />
							</div>
					</div>
				</div>
				<Coin
        canIClickPlease={true}
        sleep={false}
        funMode={false}
        clickValue={1}
        cooldown={0}
        handleClick={() => {/*nothing*/}}  />
			</div>
			<div className="page__bottom--color"></div>
		</div>
	)
}

export default Home
