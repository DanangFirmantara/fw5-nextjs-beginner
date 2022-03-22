const initialState ={
	isLoading : false,
	successMsg : '',
	errorMsg : '',
	users : null
}

const users = (state = initialState, action)=>{
	switch(action.type){
	case 'USERS_GET_ALL_USERS_PENDING':{
		state.isLoading = true
		state.successMsg = ''
		state.errorMsg = ''
		return { ...state }
	}
	case 'USERS_GET_ALL_USERS_FULFILLED':{
		const { results, message } = action.payload.data
		state.isLoading = false
		state.users = results
		state.successMsg = message
		return { ...state }
	}
	case 'USERS_GET_ALL_USERS_REJECT':{
		const {message} = action.payload.response.data
		if(message){
			state.errorMsg = message
		} else{
			state.errorMsg = action.payload.response.statusText
		}
		state.isLoading = false
		return { ...state }
	}
	default:{
		return { ...state }
	}
	}
}

export default users