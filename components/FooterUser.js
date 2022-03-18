import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const FooterUser = () => {
	return (
		<footer className='bg-pallet-1 text-pallet-2 py-4 mt-5'>
			<Container>
				<Row className='align-items-center'>
					<Col>
						<div>2020 Zwallet. All right reserved.</div>
					</Col>
					<Col className='d-flex justify-content-end fw-semibold'>
						<div className='mx-5'>+62 5637 8882 9901</div>
						<div>contact@zwallet.com</div>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default FooterUser