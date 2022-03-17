/* eslint-disable react/react-in-jsx-scope */
import { Row,Col, Container } from 'react-bootstrap'
import SidebarHome from '../components/SidebarHome'
import OtpInput from '../components/OtpInput'
import { useRouter } from 'next/router'

const CreatePin = ()=>{

	const router = useRouter()

	const onPin=(event)=>{
		event.preventDefault()
		router.push('/home')
	}
	return(
		<Row className='g-0 vh-100'>
			<Col sm={7}>
				<SidebarHome />
			</Col>
			<Col className='p-5 vh-100'>
				<Container className='mt-5 px-3'>
					<div className='mb-4'>
						<div className='fw-bold fs-4'>Secure Your Account, Your Wallet,</div>
						<div className='fw-bold fs-4'>and Your Data With 6 Digits PIN</div>
						<div className='fw-bold fs-4'>That You Created Yourself.</div>
					</div>
					<div className='mb-5'>
						<div className='fs-7 text-pallet-6'>
						Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don&lsquo;t tell anyone about your Zwallet account password and the PIN.
						</div>
					</div>
					<form className='mb-3' onSubmit={onPin}>
						<OtpInput />
						<button type='submit' className='button-input fw-bold'>
							Confirm
						</button>
					</form>
				</Container>
			</Col>
		</Row>
	)
}

export default CreatePin