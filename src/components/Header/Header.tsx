import { GiTrophyCup } from 'react-icons/gi'
import "../../styles/Header.css"
import { useAppSelector } from '../../redux/store'

const Header = () => {
	const user = useAppSelector(state=>state.user)
	return (
		<div className="header">
			<div className="wrapper">
				<div className="wrapper__profile">
					<img className="profile__icon" src="https://avatars.dzeninfra.ru/get-zen_doc/9716076/pub_643973f64d6f40338279c0d7_643974586f99ba706b90cd3d/scale_1200" />
					<div className="profile__info">
						<p className="info__name">${user.initData.user.username}</p>
						<p className="info__coins">1,000,000</p>
					</div>
				</div>
				<div className="wrapper__status">
					<GiTrophyCup size={24} color="#B9F2FF"/><p className="status__name">Diamond</p>
				</div>
			</div>
		</div>
	)
}

export default Header
