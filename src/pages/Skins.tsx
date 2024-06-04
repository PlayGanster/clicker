import { Link } from 'react-router-dom'

const Skins = () => {
	return (
		<div style={{
			color: "white"
		}}>
			<Link to="/" style={{
				textDecoration: 'none',
				color: "white",
			}}>
				{"<"}-- Назад
			</Link>
			Skins
		</div>
	)
}

export default Skins
