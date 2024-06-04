import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import "../../styles/layout.scss"

const Layout = (props: {children?: JSX.Element[] | JSX.Element | string}) => {
	return (
		<div className="layout">
			<Header />
			{
				props.children
			}
			<Footer />
		</div>
	)
}

export default Layout
