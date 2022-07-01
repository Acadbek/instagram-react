import { useState, useEffect } from 'react'
import Story from '../story';
import './style.css'
import axios from 'axios'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";




const Stories = () => {
	let [data, setData] = useState([])

	const getData = async () => {
		let response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
			params: {
				_limit: 20
			}
		})
		let user = await response.data
		setData(user)
	}

	useEffect(() => {
		getData()
	}, [])


	return (
		<div className="bg-white py-5 mt-6 border-[1.5px] border-grey rounded-[10px] !pr-0">
			<Swiper
				slidesPerView={6}
				spaceBetween={3}
				slidesPerGroup={3}
				loop={false}
				loopFillGroupWithBlank={false}
				pagination={{
					clickable: false,
				}}
				breakpoints={{
					"@0.00": {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					"@0.75": {
						slidesPerView: 3,
						spaceBetween: 3,
					},
					"@1.00": {
						slidesPerView: 3,
						spaceBetween: 3,
					},
					"@1.40": {
						slidesPerView: 4,
						spaceBetween: 4,
					},
					"@1.50": {
						slidesPerView: 6,
						spaceBetween: 0,
					},
				}}
				navigation={{
					nextEl: '.review-swiper-button-next',
					prevEl: '.review-swiper-button-prev',
				}}
				modules={[Navigation]}
				className="mySwiper"
			>
				{data.map((user) => (
					<SwiperSlide key={user.id}>
						<Story
							img={user.thumbnailUrl}
							name={`${user.title.toLowerCase().replace(/\s/g, '')}`} />
					</SwiperSlide>
				))}
				<button className="review-swiper-button-prev"></button>
				<button className="review-swiper-button-next"></button>
			</Swiper>
		</div>
	);
}

export default Stories;