import { useAppSelector } from '../../redux/store'
import "../../styles/Error.css"

const Error = () => {
	const settings = useAppSelector(state=>state.settings)
	return (
		<div className="error-list">
			<div className="list__header">
				Ошибка
			</div>
			<div className="list__errors">
				{
					settings.error.map((el:any, index:number) => (
						<p key={index}>{el.description}</p>
					))
				}
			</div>
			<div className="list__button">
				<button>
					Выйти
				</button>
			</div>
		</div>
	)
}

export default Error
