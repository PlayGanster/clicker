import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import "../styles/Layout.css"

const Layout = () => {
	return (
		<div className="layout">
			<Header />
			<div style={{
				width: "100%",
				height:"100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				overflowY: "auto",
				paddingTop: 120,
				paddingBottom:80
			}}>
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}

export default Layout
