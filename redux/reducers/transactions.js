const initialState = {
	isLoading : false,
	successMsg : '',
	errorMsg : ''
}

const transaction = (state = initialState, action) =>{
	switch(action.type){
	case 'TRANSACTION_TOP_UP_PENDING':{
		state.isLoading = true
		state.successMsg = ''
		state.errorMsg = ''
		return { ...state }
	}
	case 'TRANSACTION_TOP_UP_FULFILLED':{
		const { message } = action.payload.data
		state.isLoading = false
		state.successMsg = message
		return { ...state }
	}
	case 'TRANSACTION_TOP_UP_PEDING':{
		const { message } = action.payload.response.data
		state.isLoading = false
		state.errorMsg = message
		return { ...state }
	}
	default : {
		return { ...state }
	}
	}
}

export default transaction