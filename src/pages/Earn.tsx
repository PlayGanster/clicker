import { Link } from 'react-router-dom'

const Earn = () => {
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
			Earn
		</div>
	)
}

export default Earn
