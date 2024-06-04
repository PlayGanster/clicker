import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import "../styles/Layout.css"

const Layout = () => {
	return (
		<div className="layout">
			<Header />
			<div className="w-full h-full flex justify-center items-center">
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}

export default Layout
