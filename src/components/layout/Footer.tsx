import Energy from "../../assets/energy.webp"
import Coin from "../../assets/coin.webp"
import { formatNumber } from '../../other/formatNumber'
import { useAppSelector } from '../../redux/store'
import "../../styles/footer.scss"
import { Link } from 'react-router-dom'

const Footer = () => {
	const user = useAppSelector(state=>state.user)
	return (
		<div className="footer">
			<div className="footer__wrapper">
				<div className="footer__top">
					<div className="top__energy">
						<img src={Energy} className="energy__icon" />
						<div className="energy__info">
							<p className="info__this">{formatNumber(1200000)}</p>
						</div>
					</div>
					<div className="top__progress">
						<div className="progress__bar" style={{
							width: `${(100/1000) * user.energy}%`
						}}>
						</div>
					</div>
				</div>
				<div className="footer__navigation">
					<Link to="/frens" className="navigation-item">
						<img src="https://smileysplanet.ru/smileys/apple/wrapped-gift-1945.png" className="item__icon"/>
						<p className="item__name">Frens</p>
					</Link>
					<span className="tree"></span>
					<Link to="/earn" className="navigation-item">
						<img src={Coin} className="item__icon"/>
						<p className="item__name">Earn</p>
					</Link>
					<span className="tree"></span>
					<div className="navigation-item">
						<img src="https://smileysplanet.ru/smileys/apple/rocket-1845.png" className="item__icon"/>
						<p className="item__name">Boosts</p>
					</div>
					<span className="tree"></span>
					<div className="navigation-item">
						<img src="https://smileysplanet.ru/smileys/apple/sparkles-1934.png" className="item__icon"/>
						<p className="item__name">Trade</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
