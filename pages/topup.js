import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import FooterUser from '../components/FooterUser'
import ModalTopup from '../components/ModalTopup'
import NavbarUser from '../components/NavbarUser'
import SidebarUser from '../components/SidebarUser'

const TopUp = () => {
	return (
		<>
			<NavbarUser/>
			<Container className='vh-100'>
				<Row className='mt-5'>
					<Col sm={4}>
						<SidebarUser />
					</Col>
					<Col>
						<ModalTopup isLoading={true}/>
					</Col>
				</Row>
			</Container>
			<FooterUser />
		</>
	)
}

export default TopUp