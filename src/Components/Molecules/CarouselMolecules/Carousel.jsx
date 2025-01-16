import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Carousel.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 
import Image1 from '../../../Layout/Assets/CarouselProducts/Carousel1.jpeg';
import Image2 from '../../../Layout/Assets/CarouselProducts/Carousel2.jpeg';
import Image3 from '../../../Layout/Assets/CarouselProducts/Carousel3.jpeg';

const Carousel = () => {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={false}
            slidesPerView={2} 
            spaceBetween={40} 
            coverflowEffect={{
                rotate: 50, // Nessuna rotazione
                stretch: 50, // Allunga leggermente le immagini laterali
                depth: 50, // Effetto 3D sulle immagini
                modifier: 1, // Intensità dell'effetto
                slideShadows: true, // Ombre laterali
            }}
            pagination={false} // Abilita i punti di navigazione
            navigation={{
                nextEl: '.swiper-button-next', 
                prevEl: '.swiper-button-prev', 
            }} // Aggiungi la navigazione
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Nature 4" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Nature 5" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="Nature 6" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="Nature 7" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="Nature 8" />
            </SwiperSlide>

                <FaArrowLeft size={30} color="#fff" className="swiper-button-prev"/> {/* Icona freccia sinistra */}
                <FaArrowRight size={30} color="#fff" className="swiper-button-next"/> {/* Icona freccia destra */}
        </Swiper>
    );
};

export default Carousel;
