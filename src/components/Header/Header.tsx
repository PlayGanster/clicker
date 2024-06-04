import { GiTrophyCup } from 'react-icons/gi'
import "../../styles/Header.css"
import { useAppSelector } from '../../redux/store'

const Header = () => {
	const user = useAppSelector(state=>state.user)
	return (
		<div className="header">
			<div className="wrapper">
				<div className="wrapper__profile">
					<img className="profile__icon" src={user.initData.photo_url} />
					<div className="profile__info">
						<p className="info__name">{user.initData.first_name} {user.initData.last_name}</p>
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
