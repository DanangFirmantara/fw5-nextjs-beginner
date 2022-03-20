/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
import { Col, Row} from 'react-bootstrap'
import Link from 'next/link'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const NavbarHome = () =>{
	const dispatch = useDispatch()
	const auth = useSelector(state=> state.auth)

	useEffect(()=>{
		const token = window.localStorage.getItem('token')
		if(token){
			dispatch({
				type : 'AUTH_LOGIN_FULFILLED',
				payload :{
					data :{
						results: token
					}
				}
			})
		}
	},[auth.token])

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-pallet-1">
			<div className="container py-4 align-items-center d-flex">
				<Link href='/'>
					<a className="navbar-brand fw-bold text-white fs-4" href="/">ZWallet</a>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<Row className='ms-auto'>
						<Col xs={12} md={6}>
							<Link href='/login'>
								<a className='btn btn-pallet-2 pallet-1 bg-pallet-1 fw-bold px-5 rounded fs-5 border-white border-2 text-white' >Login</a>
							</Link>
							
						</Col>
						<Col xs={12} lg={6}>
							<Link href='/signup'>
								<a className='btn btn-pallet-2 pallet-1 bg-pallet-2 fw-bold px-5 rounded fs-5 text-pallet-1'>Signup</a>
							</Link>
						</Col>
					</Row>
				</div>
			</div>
		</nav>
	)
}

export default NavbarHome