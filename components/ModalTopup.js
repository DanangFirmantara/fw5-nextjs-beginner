/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react'
import { Modal } from 'react-bootstrap'
import {	useRouter } from 'next/router'

const ModalTopup = ({isLoading=false}) => {
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const router = useRouter()
  
	useEffect(()=>{
		if(isLoading){
			setShow(true)
		} else{
			setShow(false)
		}
	}, [isLoading])

	const onTopup = (event)=>{
		event.preventDefault()
		router.push('/home')
	}

	return (
		<Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton centered>
				<Modal.Title id="contained-modal-title-vcenter" className='text-center'>Top Up</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className=''>
					<div className='fs-7 text-muted mb-3'>Enter the amount of money, and click submit</div>
					<form obSubmit={onTopup}>
						<input type='text' className='rounded w-100 border border-2 border-pallet-3 py-3 mb-4 px-4'/>
						<div className='d-flex justify-content-end'>
							<button type='submit' className='px-3 py-2 fs-6 bg-pallet-1 border-0 rounded text-white'>Submit</button>
						</div>
					</form>
				</div>
			</Modal.Body>
		</Modal>
	)
}

export default ModalTopup