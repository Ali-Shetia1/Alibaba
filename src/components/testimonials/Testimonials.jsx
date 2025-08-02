import React from 'react';
import './testimonials.css';
import { Data } from './Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
const Testimonials = () => {
  return (
    <section className="testimonials section container" id='testimonials'>
        <h2 className="section-title">Testimonials</h2>
        <span className="section-subtitle">My clints say</span>
        <Swiper className="testimonials-container"
            modules={[Pagination]}
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            pagination={{ clickable: true}}
            breakpoints={{
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                },
            }}
            >
            {Data.map(({id, image, title, description}) => {
                return (
                    <SwiperSlide className="testimonial-card" key={id}>
                        <img src={image} alt="person" className="testimonial-img" />
                        <h3 className="testimonial-name">{title}</h3>
                        <p className="testimonial-text">{description}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Testimonials