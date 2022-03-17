/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'


const Footer = () =>{
	return(
		<footer className='bg-pallet-1 text-pallet-2'>
			<Container className='pt-5 pb-3'>
				<Row className='border-bottom border-2 border-pallet-2 pb-5'>
					<Col sm={3}>
						<Link href='/'>
							<a className="fs-2 fw-bold mb-3 text-pallet-2">ZWallet</a>
						</Link>
						<div className='fs-6'>Simplify financial needs and saving much time in banking needs with one single app.</div>
					</Col>
				</Row>
				<Row className='justify-content-between mt-3'>
					<Col sm={8}>
						<div className='fs-7'>2020 Zwallet. All right reserved.</div>
					</Col>
					<Col>
						<div className='d-flex justify-content-between'>
							<div className='fs-7'>+62 5637 8882 9901</div>
							<div className='fs-7'>contact@zwallet.com</div>
						</div>
						
					</Col>
				</Row>
				
			</Container>
		</footer>
	)
}

export default Footer