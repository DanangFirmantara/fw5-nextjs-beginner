const initialState = {
	isLoading : false,
	successMsg : '',
	errorMsg : '',
	balance : 0,
	profile : null,
	phone : null
}

const profile = (state=initialState, action)=>{
	switch(action.type){
	case 'PROFILE_GET_BALANCE_PENDING':{
		state.isLoading = true
		state.errorMsg = ''
		state.successMsg = ''
		return { ...state }
	}
	case 'PROFILE_GET_BALANCE_FULFILLED':{
		const { results, message, success } = action.payload.data
		if(success){
			state.balance = results
			state.isLoading = false
			state.successMsg = message
		}
		return { ...state }
	}
	case 'PROFLE_GET_BALANCE_REJECTED':{
		state.isLoading = false
		state.errorMsg = 'Unexpected Error'
		return { ...state }
	}
	case 'PROFILE_GET_PROFILE_PENDING':{
		state.isLoading = true
		state.errorMsg = ''
		state.successMsg = ''
		return { ...state }
	}
	case 'PROFILE_GET_PROFILE_FULFILLED':{
		const { results, message, success } = action.payload.data
		if(success){
			state.profile = results
			state.isLoading = false
			state.successMsg = message
		}
		return { ...state }
	}
	case 'PROFLE_GET_PROFILE_REJECTED':{
		const { message } = action.payload.response.data
		state.errorMsg = message
		state.isLoading = false
		return { ...state }
	}
	case 'PROFILE_GET_PHONE_LIST_PENDING':{
		state.isLoading = true
		state.errorMsg = ''
		state.successMsg = ''
		return { ...state }
	}
	case 'PROFILE_GET_PHONE_LIST_FULFILLED':{
		const { results, message, success } = action.payload.data
		if(success){
			state.phone = results
			state.isLoading = false
			state.successMsg = message
		}
		return { ...state }
	}
	case 'PROFLE_GET_PHONE_LIST_REJECTED':{
		const { message } = action.payload.response.data
		state.errorMsg = message
		state.isLoading = false
		return { ...state }
	}
	case 'PROFILE_RESET_MSG':{
		state.successMsg = ''
		state.errorMsg = ''
		return { ...state }
	}
	default:{
		return { ...state }
	}
	}
}

export default profile