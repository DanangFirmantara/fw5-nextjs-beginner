/* eslint-disable react/react-in-jsx-scope */
import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
	return (
		<Html>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
				<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,600;0,700;1,900&display=swap" rel="stylesheet"></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document
