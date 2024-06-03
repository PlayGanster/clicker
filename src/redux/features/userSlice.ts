import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type Coin = number
type Energy = number

interface UserState {
	coin: Coin,
	energy: Energy
}

const initialState: UserState = {
	coin: 0,
	energy: 1000
}

export const UserSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setCoin: (state, action:PayloadAction<{data: number}>) => {
			state.coin = action.payload.data
		},
		setEnergy: (state, action:PayloadAction<{data: number}>) => {
			state.energy = action.payload.data
		}
	}
})

export default UserSlice.reducer
export const {setCoin, setEnergy} = UserSlice.actions