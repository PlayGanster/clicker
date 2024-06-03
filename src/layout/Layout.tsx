import { GiTrophyCup } from 'react-icons/gi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { SlEnergy } from 'react-icons/sl'
import { Outlet } from 'react-router-dom'
import { useAppSelector } from '../redux/store'

const Layout = () => {
	const user = useAppSelector(state=>state.user)
	return (
		<div className="w-full min-h-[100dvh] flex flex-col justify-between bg-[#25272B]">
			<div className="w-full p-[20px]">
				<div className="w-full text-[white!important] bg-[#3D4044] h-full rounded-3xl p-[20px] flex justify-between">
					<div className="flex gap-[10px] items-center justify-center">
						<img className="max-w-[50px] h-[50px] rounded-md" src="https://super.ru/image/rs::3840:::/quality:90/plain/s3:/super-static/prod/5f82064e44c7ef16da6c547d-1900x.jpeg"/>
						<div className="h-full flex flex-col gap-[5px] justify-center">
							<p className="text-[14px] font-semibold">Pavel Durov</p>
							<p className="text-[12px] font-semibold text-gray-400">7,000,000</p>
						</div>
					</div>
					<div className="flex gap-[10px] items-center">
						<GiTrophyCup size={24} color="#B9F2FF" /><p className="text-[14px] font-semibold">Diamond</p>
					</div>
				</div>
			</div>
			<div className="w-full h-full flex justify-center items-center">
				<Outlet />
			</div>
			<div className="w-full p-[20px]">
				<div className="w-full text-[white!important] bg-[#3D4044] h-full rounded-3xl p-[20px] flex justify-between">
					<div className="flex items-center gap-[10px]">
						<SlEnergy size={34} color="yellow" />
						<div className="flex flex-col">
							<p className="font-semibold text-[14px]">{user.energy}</p>
							<p className="font-semibold text-[12px] text-gray-400">1000/hour</p>
						</div>
					</div>
					<div className="flex border-[2px] border-gray-400 rounded-2xl gap-[10px] p-[10px]">
						<RxHamburgerMenu size={22} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Layout
