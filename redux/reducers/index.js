import { combineReducers } from 'redux'
import auth from './auth'
import otp from './otp'

const rootReducer = combineReducers({
	auth,
	otp,
})

export default rootReducer