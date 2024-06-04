import { Link } from 'react-router-dom'

const Ref = () => {
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
			Ref
		</div>
	)
}

export default Ref
