import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import FooterUser from '../components/FooterUser'
import Layout from '../components/Layout'
import ModalTopup from '../components/ModalTopup'
import NavbarUser from '../components/NavbarUser'
import SidebarUser from '../components/SidebarUser'

const TopUp = () => {
	return (
		<Layout >
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
		</Layout>
	)
}

export default TopUp