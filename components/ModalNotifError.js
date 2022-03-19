/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { ImSad } from 'react-icons/im'

const ModalNotifError = ({ message }) => {
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	useEffect(() => {
		if (message) {
			setShow(true)
		} else {
			setShow(false)
		}
	}, [message])
	return (
		<>
			<Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header id='modal-notif' className='error'>
					<Modal.Title id="contained-modal-title-vcenter" className='text-center'>
						<div className='text-center'>
							<div className='notif-icon'>
								<ImSad  />
							</div>
						</div>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className='py-5'>
					<div className='text-center'>
						<div className='fs-1 pps fw-bold text-pallet-3'>Error</div>
						<div className='fs-4 pps  text-pallet-3'>{message}</div>
					</div>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default ModalNotifError