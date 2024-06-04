import { SlEnergy } from 'react-icons/sl'
import "../../styles/Footer.css"
import { Link } from 'react-router-dom'
import { FaUserFriends } from 'react-icons/fa'
import { AiFillSkin } from 'react-icons/ai'
import { PiCoinVerticalFill } from 'react-icons/pi'

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__energy">
				<SlEnergy size={32} color="yellow" />
				<div className="energy__info">
					<p className="info__this">1000</p>
					<p className="info__hour">1000/hour</p>
				</div>
			</div>
			<div className="footer__navigation">
				<Link to="/ref">
					<div className="navigation__item">
						<FaUserFriends size={18} color='white' />
						<p className="item__name">Frens</p>
					</div>
				</Link>
				<Link to="/skins">
					<div className="navigation__item">
						<AiFillSkin size={18} color='white' />
						<p className="item__name">Skins</p>
					</div>
				</Link>
				<Link to="/earn">
					<div className="navigation__item">
						<PiCoinVerticalFill size={18} color='white' />
						<p className="item__name">Earn</p>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Footer
