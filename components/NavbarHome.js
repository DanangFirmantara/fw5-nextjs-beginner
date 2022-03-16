/* eslint-disable react/react-in-jsx-scope */

const NavbarHome = () =>{
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-pallet-1">
			<div className="container py-4 align-items-center d-flex">
				<a className="navbar-brand fw-bold text-white fs-4" href="/">ZWallet</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
               <div className='row ms-auto'>
                  <div className='col col-6'>
                     <button className='btn btn-pallet-2 pallet-1 bg-pallet-1 fw-bold px-5 rounded fs-5 border-white border-2 text-white' type='button'>Login</button>
                  </div>
                  <div className='col col-6'>
                     <button className='btn btn-pallet-1 pallet-1 bg-pallet-2 fw-bold px-5 rounded fs-5 text-pallet-1'>Signup</button>
                  </div>
               </div>
				</div>
			</div>
		</nav>
	)
}

export default NavbarHome