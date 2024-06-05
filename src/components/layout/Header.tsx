import { formatNumber } from '../../other/formatNumber'
import "../../styles/header.scss"
import Coin from "../../assets/coin.webp"
import { GiTrophyCup } from 'react-icons/gi'
import { useAppSelector } from '../../redux/store'

const Header = () => {
	const user = useAppSelector(state=>state.user)
	return (
		<div className="header">
			<div className="header__wrapper">
				<div className="wrapper__leader">
					<img src="https://uprostim.com/wp-content/uploads/2021/03/image038-54-scaled.jpg" className="leader__icon" />
					<div className="leader__info">
						<p className="info__name">Wallet News</p>
						<p className="info__count"><img src={Coin} />{formatNumber(user.coin)}</p>
					</div>
				</div>
				<div className="wrapper__rank">
					<GiTrophyCup size={22} color="#B9F2FF" /> Diamond
				</div>
			</div>
		</div>
	)
}

export default Header
