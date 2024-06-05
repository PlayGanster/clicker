import Energy from "../../assets/energy.webp"
import Teddy from "../../assets/teddy-bear.webp"
import { formatNumber } from '../../other/formatNumber'
import { useAppSelector } from '../../redux/store'
import "../../styles/footer.scss"

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
					<div className="navigation-item">
						<img src={Teddy} className="item__icon"/>
						<p className="item__name">Frens</p>
					</div>
					<span className="tree"></span>
					<div className="navigation-item">
						<img src={Teddy} className="item__icon"/>
						<p className="item__name">Frens</p>
					</div>
					<span className="tree"></span>
					<div className="navigation-item">
						<img src={Teddy} className="item__icon"/>
						<p className="item__name">Frens</p>
					</div>
					<span className="tree"></span>
					<div className="navigation-item">
						<img src={Teddy} className="item__icon"/>
						<p className="item__name">Frens</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
