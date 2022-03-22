import { combineReducers } from 'redux'
import auth from './auth'
import otp from './otp'
import profile from './profile'
import transaction from './transactions'

const rootReducer = combineReducers({
	auth,
	otp,
	profile,
	transaction
})

export default rootReducer