import { combineReducers } from 'redux'
import auth from './auth'
import otp from './otp'
import profile from './profile'
import transaction from './transactions'
import users from './users'

const rootReducer = combineReducers({
	auth,
	otp,
	profile,
	transaction,
	users
})

export default rootReducer