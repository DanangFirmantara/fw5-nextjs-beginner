/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import {useEffect} from 'react'
import '../styles/application.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
	useEffect(()=>{
		import('bootstrap/dist/js/bootstrap')
	}, [])

	return <Component {...pageProps} />
}

export default MyApp
