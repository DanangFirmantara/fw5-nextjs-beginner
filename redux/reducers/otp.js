const initialState = {
	otp:null
}

const otp = (state = initialState, action)=>{
	switch(action.type){
	case 'OTP_ADD':{
		state.otp = action.payload.otp
		return { ...state }
	}
	default :{
		return { ...state }
	}
	}
}

export default otp