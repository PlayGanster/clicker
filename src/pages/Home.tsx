import "../styles/home.scss"
import CoinImg from '../assets/coin.webp'
import Rank from "../assets/rank.webp"
import { formatNumber } from '../other/formatNumber'
import { GiTrophyCup } from 'react-icons/gi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Coin } from '../components/home/Coin'
import { useAppSelector } from '../redux/store'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const Home = () => {
	const user = useAppSelector(state=>state.user)
	function styleCoinCount(number:number) {
		if(String(number).length <= 8) return "count--9"
		else return ""
	}
	return (
		<>
			<Header />
			<div className="home-page">
				<div className="page__leader">
					<div className="leader__info">
						<div className="info__coins">
							<img src={CoinImg} className="coins__icon" /><p className={`coins__count ${styleCoinCount(user.coin)}`}>{formatNumber(user.coin)}</p>
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
			<Footer />
		</>
	)
}

export default Home
