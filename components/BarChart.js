/* eslint-disable react/prop-types */
import React from 'react'
import {IoMdArrowUp,IoMdArrowDown} from 'react-icons/io'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	LogarithmicScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'

ChartJS.register(
	CategoryScale,
	LinearScale,
	LogarithmicScale,
	BarElement,
	Title,
	Tooltip,
	Legend
)

import { Bar } from 'react-chartjs-2'


const BarChart = ({labels, data:rawData, income=0, expense=0}) => {
	
	const options = {
		chartAreaBorder: {
			borderColor: 'rgba(0, 0, 0, 0)'
		},
		scales: {
			x: {
				grid: {
					display: false,
				}
			},
			y: {
				grid: {
					display: false,
				}
			}
		},
		responsive: true,
		plugins: {
			legend: {
				display: false
			},
			title: {
				display: false,
			},
		},
	}

	const data = {
		labels,
		datasets: [
			{
				label: 'Dataset 1',
				data: rawData,
				backgroundColor: 'rgb(5, 110, 102)',
				borderRadius: 1000,
				barThickness: 14
			}
		],
	}
	return (
		<div className=''>
			<div className='d-flex justify-content-between px-5 py-3'>
				<div>
					<IoMdArrowUp className='fs-4 text-success fw-bold mb-1'/>
					<div className='fs-8 mb-1 pallet-6'>Income</div>
					<div className='fs-6 fw-bold mb-1'>Rp {Number(income).toLocaleString('id-ID')}</div>
				</div>
				<div>
					<IoMdArrowDown className='fs-4 text-danger fw-bold mb-1'/>
					<div className='fs-8 mb-1 pallet-6'>Expense</div>
					<div className='fs-6 fw-bold mb-1'>Rp {Number(expense).toLocaleString('id-ID')}</div>
				</div>
			</div>
			<div className='px-'>
				<Bar optons={options} data={data}/>
			</div>
		</div>
	)
}

export default BarChart