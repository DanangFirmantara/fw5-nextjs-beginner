import { combineReducers } from 'redux'
import auth from './auth'
import otp from './otp'
import profile from './profile'

const rootReducer = combineReducers({
	auth,
	otp,
	profile
})

export default rootReducer