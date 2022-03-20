const initialState = {
	isLoading : '',
	token : '',
	successMsg : '',
	errorMsg : ''
}

const auth = (state=initialState, action)=>{
	switch(action.type) {
	case 'AUTH_LOGIN_PENDING':{
		state.isLoading = true
		state.successMsg = ''
		state.errorMsg = ''
		return { ...state }
	}
	case 'AUTH_LOGIN_FULFILLED':{
		const {results, message, success} = action.payload.data
		state.isLoading = false
		if(success){
			state.token = results.token
			state.successMsg = message
			window.localStorage.setItem('token', state.token)
		} else{
			state.errorMsg = message
			state.token = ''
			window.localStorage.removeItem('token')
		}
		return { ...state }
	}
	case 'AUTH_LOGIN_REJECTED':{
		state.errorMsg = 'Unexpected error'
		state.isLoading = false
		return { ...state }
	}
	case 'AUTH_FORGOT_REQUEST_PENDING':{
		state.isLoading = true
		state.successMsg = ''
		state.errorMsg = ''
		return { ...state }
	}
	case 'AUTH_FORGOT_REQUEST_FULFILLED':{
		const { message, success} = action.payload.data
		state.isLoading = false
		if(success){
			state.successMsg = message
		} else{
			state.errorMsg = message
		}
		return { ...state }
	}
	case 'AUTH_FORGOT_REQUEST_REJECTED':{
		const {message} = action.payload.response.data
		state.isLoading = false
		state.errorMsg = message
		return { ...state}
	}
	case 'AUTH_RESET_MSG':{
		state.successMsg = ''
		state.errorMsg = ''
		return { ...state }
	}
	case 'AUTH_LOGOUT':{
		window.localStorage.removeItem('token')
		state.token=''
		state.successMsg=''
		state.errorMsg=''
		return { ...state }
	}
	default:{
		return { ...state }
	}
	}
}

export default auth