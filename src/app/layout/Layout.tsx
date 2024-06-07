import { BrowserRouter } from 'react-router-dom'
import "../../styles/layout.scss"

const Layout = (props: {children?: JSX.Element[] | JSX.Element | string}) => {
	return (
		<BrowserRouter>
			<div className="layout">
				{
					props.children
				}
			</div>
		</BrowserRouter>
	)
}

export default Layout
