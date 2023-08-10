import React from "react";
import "./CustomCarouselStyle.css";
import GaleriaC from "../assets/galeriaC";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

function CustomCarousel() {
	return (
		<div className="d-flex align-items-center justify-content-center slider-container">
			<div className="col-12">
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={20}
					slidesPerView={4}
					grabCursor={true}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						350: {
							slidesPerView: 2,
						},
						768: {
							slidesPerView: 3,
						},
						1200: {
							slidesPerView: 4,
						},
					}}
					scrollbar={{ draggable: true }}
					// onSlideChange={() => console.log("slide change")}
					// onSwiper={(swiper) => console.log(swiper)}
				>
					{GaleriaC.map((catalogue) => (
						<SwiperSlide key={catalogue.id} className="slider mt-2">
							<div className="slider-content">
								<img
									src={require(`../assets/carousel-${catalogue.img}.png`)}
									alt="Imagen"
									className="slider-img"
								/>
								<h5 className="slider-title my-auto">{catalogue.title}</h5>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default CustomCarousel;
